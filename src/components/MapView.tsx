import { useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'

import type { Place } from '../data/places'

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

export const MapView: React.FC<MapViewProps> = ({ places, selectedId, onSelect }) => {
  const selectedPlace = places.find(place => place.id === selectedId)
  
  const colorMap = useMemo(() => {
    const map = new Map<number, string>()
    places.forEach(place => {
      const color = `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, '0')}`
      map.set(place.id, color)
    })
    return map
  }, [places])

  const getIcon = (id: number): L.DivIcon =>
    L.divIcon({
      html: `<div class="pizza-icon${
        id === selectedId ? ' selected' : ''
      }" style="background:${colorMap.get(id)}">🍕</div>`,
      className: '',
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    })
  
  return (
    <MapContainer 
      center={[20, 0] as L.LatLngExpression} 
      zoom={2} 
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution="&copy; OpenStreetMap contributors &copy; CARTO"
      />
      
      {places.map(place => (
        <Marker
          key={place.id}
          position={[place.lat, place.lng] as L.LatLngExpression}
          icon={getIcon(place.id)}
          eventHandlers={{ click: () => onSelect(place.id) }}
        />
      ))}
      
      {selectedPlace && (
        <FlyToMarker position={[selectedPlace.lat, selectedPlace.lng]} />
      )}
    </MapContainer>
  )
}
