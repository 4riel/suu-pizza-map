import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import type { Place } from '../data/places'
import { useEffect } from 'react'

const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
})

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
          icon={icon}
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
