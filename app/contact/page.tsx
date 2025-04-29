"use client"

import type { Metadata } from "next"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import dynamic from "next/dynamic"

// Dynamically import the map component with no SSR
const LocationMap = dynamic(() => import("@/components/contact/location-map"), { ssr: false })

export const metadata: Metadata = {
  title: "Contact Us - Crown & Glory Salon",
  description: "Get in touch with Crown & Glory Salon. Find our location, contact information, and business hours.",
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-light py-20 mb-12">
        <div className="container-custom">
          <h1 className="heading-xl text-white text-center mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
            We're here to answer any questions you may have about our services or to book your next appointment.
          </p>
        </div>
      </div>
      <div className="container-custom mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
        <div className="mt-20">
          <h2 className="heading-md mb-6">Find Us</h2>
          <LocationMap />
        </div>
      </div>
    </>
  )
}
