import type { Metadata } from "next"
import { Suspense } from "react"
import BookingForm from "@/components/booking/booking-form"
import BookingBanner from "@/components/booking/booking-banner"

export const metadata: Metadata = {
  title: "Book an Appointment - Crown & Glory Salon",
  description:
    "Book your appointment at Crown & Glory Salon. Choose from our range of services and select a convenient time slot.",
}

export default function BookingPage() {
  return (
    <>
      <BookingBanner />
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <Suspense fallback={<div className="text-center py-8">Loading booking form...</div>}>
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </>
  )
}
