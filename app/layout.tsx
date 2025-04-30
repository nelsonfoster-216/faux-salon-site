import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppWidget from "@/components/widgets/whatsapp-widget"
import GoogleAnalytics from "@/components/analytics/google-analytics"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

// Use a dynamic metadataBase that works in all environments
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
                'https://main.d33dnt609ym1xw.amplifyapp.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Crown & Glory Salon - Beauty for All",
  description:
    "Premier unisex salon in Cleveland, Ohio offering haircuts, styling, nail care, beauty treatments, and makeup services for men and women.",
  keywords: "unisex salon, beauty salon Cleveland, haircuts, hairstyling, nail care, beauty treatments, makeup services",
  openGraph: {
    title: "Crown & Glory Salon - Beauty for All",
    description:
      "Premier unisex salon in Cleveland, Ohio offering haircuts, styling, nail care, beauty treatments, and makeup services for men and women.",
    images: ["/images/crown-glory-logo.jpeg"],
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/images/crown-glory-logo.jpeg",
    apple: "/images/crown-glory-logo.jpeg",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  )
}
