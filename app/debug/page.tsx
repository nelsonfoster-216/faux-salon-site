"use client"

import { useEffect, useState } from "react"

export default function DebugPage() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    console.log("Debug page mounted")
  }, [])

  return (
    <div className="container-custom py-20">
      <h1 className="text-2xl font-bold mb-4">Debug Page</h1>
      <p className="mb-4">This is a simple page to test if the basic rendering works.</p>
      <div className="p-4 bg-gray-100 rounded-md">
        <p><strong>Client-side rendering status:</strong> {mounted ? 'Mounted' : 'Not mounted'}</p>
        <p><strong>Current URL:</strong> {mounted ? window.location.href : 'Loading...'}</p>
        <p><strong>User Agent:</strong> {mounted ? navigator.userAgent : 'Loading...'}</p>
      </div>
    </div>
  )
} 