"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Check } from "lucide-react"

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Show success message instead of opening WhatsApp
    setShowSuccess(true)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
      setIsOpen(false)
    }, 3000)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all"
        aria-label="Chat with us"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-xl w-80 overflow-hidden salon-card">
          <div className="bg-[#25D366] text-white p-4">
            <h3 className="font-bold text-lg">Chat with Us</h3>
            <p className="text-sm">Typically replies within minutes</p>
          </div>

          {showSuccess ? (
            <div className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Demo successful!</h3>
              <p className="text-gray-600">This is just a simulation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div className="bg-amber-50 border border-amber-200 text-amber-800 px-3 py-2 rounded-md mb-2">
                <p className="text-xs">Demo Mode - No messages will be sent</p>
              </div>
            
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                  placeholder="Hi, I'd like to book an appointment..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] text-white py-2 px-4 rounded-md hover:bg-[#128C7E] transition-colors"
              >
                Send on Text
              </button>
            </form>
          )}
        </div>
      )}
    </>
  )
}
