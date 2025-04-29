"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"

// Define salon locations type
interface Location {
  name: string;
  position: [number, number];
  address: string;
}

// Define salon locations in Cleveland, Ohio
const locations: Location[] = [
  { name: "Crown & Glory Salon - Downtown", position: [41.5027, -81.6936], address: "750 Euclid Ave, Cleveland, OH 44115" },
  { name: "Crown & Glory Salon - Ohio City", position: [41.4857, -81.7086], address: "2515 Jay Ave, Cleveland, OH 44113" },
  { name: "Crown & Glory Salon - University Circle", position: [41.5074, -81.6076], address: "11304 Euclid Ave, Cleveland, OH 44106" },
  { name: "Crown & Glory Salon - Tremont", position: [41.4702, -81.6944], address: "2155 W 7th St, Cleveland, OH 44113" },
  { name: "Crown & Glory Salon - Lakewood", position: [41.4824, -81.7968], address: "14801 Detroit Ave, Lakewood, OH 44107" },
]

// Custom icon for markers - using a standard map pin icon
const customIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

export default function LocationMap() {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null)

  return (
    <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
      <MapContainer 
        center={[41.4993, -81.6944] as [number, number]} 
        zoom={11} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.position}
            icon={customIcon}
            eventHandlers={{
              click: () => setActiveLocation(location),
            }}
          >
            <Tooltip>For Demo Purposes Only</Tooltip>
            <Popup>
              <div className="font-semibold">{location.name}</div>
              <div className="text-sm mb-2">{location.address}</div>
              <Button asChild size="sm" className="mt-2 bg-primary text-white">
                <Link href="/booking">Book Now</Link>
              </Button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
