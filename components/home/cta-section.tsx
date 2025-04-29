"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

// Dynamically import the map component with no SSR
const LocationMap = dynamic(() => import("@/components/home/location-map"), { ssr: false })

export default function CTASection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h2 className="heading-lg mb-6">Visit Our Salon Today</h2>
            <p className="text-gray-600 mb-8">
              Find us in Cleveland, Ohio. We have multiple locations to serve you better. Walk-ins are welcome, but appointments are recommended.
            </p>
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-primary mt-1 mr-2" />
                <div>
                  <h3 className="font-semibold">Main Location</h3>
                  <p className="text-gray-600">123 Beauty Lane, Cleveland, Ohio 44123, USA</p>
                </div>
              </div>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">Get Directions</Link>
            </Button>
          </div>
          
          <div className="lg:col-span-3">
            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  )
}
