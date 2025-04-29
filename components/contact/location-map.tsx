"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"

const customIcon = new Icon({
  iconUrl: "/placeholder.svg?height=41&width=32&text=📍",
  iconSize: [32, 41],
  iconAnchor: [16, 41],
  popupAnchor: [0, -41],
})

export default function LocationMap() {
  return (
    <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
      <MapContainer center={[41.4993, -81.6944]} zoom={11} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[41.4993, -81.6944]} icon={customIcon}>
          <Popup>Crown & Glory Salon</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
