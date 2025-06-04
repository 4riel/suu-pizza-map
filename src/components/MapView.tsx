import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import type { Place } from '../data/places'
import { useEffect, useMemo } from 'react'


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
  return (
    <MapContainer center={[20, 0] as L.LatLngExpression} zoom={2} style={{ height: '100%', width: '100%' }}>
      {/* Use a tile provider with English labels */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution="&copy; OpenStreetMap contributors &copy; CARTO"
      />
      {places.map((place) => (
        <Marker
          key={place.id}
          position={[place.lat, place.lng] as L.LatLngExpression}
          icon={getIcon(place.id)}
          eventHandlers={{ click: () => onSelect(place.id) }}
        >
          <Popup>
            <strong>{place.name}</strong>
            <br />
            {place.city}, {place.country}
          </Popup>
        </Marker>
      ))}
      {selectedPlace && <FlyToMarker position={[selectedPlace.lat, selectedPlace.lng]} />}
    </MapContainer>
  )
}
