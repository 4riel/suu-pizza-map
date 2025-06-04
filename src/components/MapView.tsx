import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import type { Place } from '../data/places'
import { useEffect, useMemo, useState } from 'react'

// Simple clustering utility
interface ClusterGroup {
  lat: number
  lng: number
  places: Place[]
  isCluster: boolean
}

const groupNearbyPlaces = (places: Place[], zoom: number): ClusterGroup[] => {
  // No clustering when zoomed in close enough to see individual places
  if (zoom >= 7) {
    // At high zoom levels (city/street level), show individual places
    return places.map(place => ({
      lat: place.lat,
      lng: place.lng,
      places: [place],
      isCluster: false
    }))
  }

  // Adjust clustering distance based on zoom level for lower zooms
  let clusterDistance: number
  if (zoom >= 5) {
    clusterDistance = 0.8 // Small clustering for regional view
  } else if (zoom >= 3) {
    clusterDistance = 3   // Medium clustering for country view
  } else {
    clusterDistance = 8   // Heavy clustering for continent/world view
  }

  const clusters: ClusterGroup[] = []
  const used = new Set<number>()

  places.forEach((place, index) => {
    if (used.has(index)) return

    const nearby = places.filter((other, otherIndex) => {
      if (used.has(otherIndex) || index === otherIndex) return false
      
      const distance = Math.sqrt(
        Math.pow(place.lat - other.lat, 2) + 
        Math.pow(place.lng - other.lng, 2)
      )
      
      return distance < clusterDistance
    })

    if (nearby.length > 0) {
      // Create cluster
      const allPlaces = [place, ...nearby]
      const centerLat = allPlaces.reduce((sum, p) => sum + p.lat, 0) / allPlaces.length
      const centerLng = allPlaces.reduce((sum, p) => sum + p.lng, 0) / allPlaces.length
      
      clusters.push({
        lat: centerLat,
        lng: centerLng,
        places: allPlaces,
        isCluster: true
      })
      
      // Mark all as used
      used.add(index)
      nearby.forEach((_, nearbyIndex) => {
        const actualIndex = places.findIndex(p => p === nearby[nearbyIndex])
        used.add(actualIndex)
      })
    } else {
      // Single place
      clusters.push({
        lat: place.lat,
        lng: place.lng,
        places: [place],
        isCluster: false
      })
      used.add(index)
    }
  })

  return clusters
}

interface MapViewProps {
  places: Place[]
  selectedId: number | null
  onSelect: (id: number) => void
}

const FlyToMarker: React.FC<{ position: L.LatLngExpression }> = ({ position }) => {
  const map = useMap()
  useEffect(() => {
    map.flyTo(position, 6)
  }, [position, map])
  return null
}

const MapController: React.FC<{ 
  userLocation: L.LatLngExpression | null
  onZoomChange: (zoom: number) => void 
}> = ({ userLocation, onZoomChange }) => {
  const map = useMap()
  
  useEffect(() => {
    const handleCenterMap = (event: CustomEvent) => {
      const { lat, lng } = event.detail
      map.flyTo([lat, lng], 13)
    }

    const handleZoom = () => {
      onZoomChange(map.getZoom())
    }

    map.on('zoomend', handleZoom)
    window.addEventListener('centerMap', handleCenterMap as EventListener)
    
    return () => {
      map.off('zoomend', handleZoom)
      window.removeEventListener('centerMap', handleCenterMap as EventListener)
    }
  }, [map, onZoomChange])

  useEffect(() => {
    if (userLocation) {
      map.flyTo(userLocation, 13)
    }
  }, [userLocation, map])

  return null
}

const UserLocationMarker: React.FC<{ position: L.LatLngExpression }> = ({ position }) => {
  const userIcon = L.divIcon({
    html: `<div style="
      width: 16px;
      height: 16px;
      background: #4285f4;
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    "></div>`,
    className: '',
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  })

  return <Marker position={position} icon={userIcon} />
}

export const MapView: React.FC<MapViewProps> = ({ places, selectedId, onSelect }) => {
  const [userLocation, setUserLocation] = useState<L.LatLngExpression | null>(null)
  const [currentZoom, setCurrentZoom] = useState(4) // Start with country-level zoom
  const selectedPlace = places.find((p) => p.id === selectedId)
  
  // Group places into clusters based on zoom level
  const clusters = useMemo(() => {
    return groupNearbyPlaces(places, currentZoom)
  }, [places, currentZoom])

  const getClusterIcon = (cluster: ClusterGroup) => {
    if (cluster.isCluster) {
      const count = cluster.places.length
      const hasSelected = cluster.places.some(p => p.id === selectedId)
      return L.divIcon({
        html: `<div class="pizza-cluster-icon${hasSelected ? ' selected' : ''}">
          🍕<span class="count">${count}</span>
        </div>`,
        className: '',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      })
    } else {
      const place = cluster.places[0]
      const isSelected = place.id === selectedId
      return L.divIcon({
        html: `<div class="pizza-icon${isSelected ? ' selected' : ''}">🍕</div>`,
        className: '',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      })
    }
  }

  const handleClusterClick = (cluster: ClusterGroup) => {
    if (cluster.isCluster && cluster.places.length > 1) {
      // For clusters, select the first place as a default
      onSelect(cluster.places[0].id)
    } else {
      onSelect(cluster.places[0].id)
    }
  }

  useEffect(() => {
    const handleCenterMap = (event: CustomEvent) => {
      const { lat, lng } = event.detail
      setUserLocation([lat, lng])
    }

    window.addEventListener('centerMap', handleCenterMap as EventListener)
    
    return () => {
      window.removeEventListener('centerMap', handleCenterMap as EventListener)
    }
  }, [])

  return (
    <MapContainer center={[20, 0] as L.LatLngExpression} zoom={4} style={{ height: '100%', width: '100%' }}>
      {/* Use a colorful tile provider similar to Airbnb */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution="&copy; OpenStreetMap contributors &copy; CARTO"
      />
      
      <MapController userLocation={userLocation} onZoomChange={setCurrentZoom} />
      
      {clusters.map((cluster, index) => (
        <Marker
          key={`cluster-${index}-${cluster.places.map(p => p.id).join('-')}`}
          position={[cluster.lat, cluster.lng] as L.LatLngExpression}
          icon={getClusterIcon(cluster)}
          eventHandlers={{ click: () => handleClusterClick(cluster) }}
        />
      ))}
      
      {selectedPlace && <FlyToMarker position={[selectedPlace.lat, selectedPlace.lng]} />}
      
      {userLocation && <UserLocationMarker position={userLocation} />}
    </MapContainer>
  )
}
