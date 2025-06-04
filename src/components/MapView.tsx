import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import type { Place } from '../data/places'
import { useEffect, useMemo, useState } from 'react'

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

const MapController: React.FC<{ userLocation: L.LatLngExpression | null }> = ({ userLocation }) => {
  const map = useMap()
  
  useEffect(() => {
    const handleCenterMap = (event: CustomEvent) => {
      const { lat, lng } = event.detail
      map.flyTo([lat, lng], 13)
    }

    window.addEventListener('centerMap', handleCenterMap as EventListener)
    
    return () => {
      window.removeEventListener('centerMap', handleCenterMap as EventListener)
    }
  }, [map])

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
  const selectedPlace = places.find((p) => p.id === selectedId)
  
  const colorMap = useMemo(() => {
    const map = new Map<number, string>()
    places.forEach((p) => {
      const color = `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, '0')}`
      map.set(p.id, color)
    })
    return map
  }, [places])

  const getIcon = (id: number) =>
    L.divIcon({
      html: `<div class="pizza-icon${
        id === selectedId ? ' selected' : ''
      }" style="background:${colorMap.get(id)}">🍕</div>`,
      className: '' as string,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    })

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
    <MapContainer center={[20, 0] as L.LatLngExpression} zoom={2} style={{ height: '100%', width: '100%' }}>
      {/* Use a colorful tile provider similar to Airbnb */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution="&copy; OpenStreetMap contributors &copy; CARTO"
      />
      
      <MapController userLocation={userLocation} />
      
      {places.map((place) => (
        <Marker
          key={place.id}
          position={[place.lat, place.lng] as L.LatLngExpression}
          icon={getIcon(place.id)}
          eventHandlers={{ click: () => onSelect(place.id) }}
        />
      ))}
      
      {selectedPlace && <FlyToMarker position={[selectedPlace.lat, selectedPlace.lng]} />}
      
      {userLocation && <UserLocationMarker position={userLocation} />}
    </MapContainer>
  )
}
