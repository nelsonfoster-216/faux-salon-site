"use client"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Crown } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  
  const handleSubscribe = () => {
    setSubscribeSuccess(true);
    // Reset after 3 seconds
    setTimeout(() => {
      setSubscribeSuccess(false);
    }, 3000);
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Crown & Glory Salon */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary mr-3">
                <Image
                  src="/images/crown-glory-logo.jpeg"
                  alt="Crown & Glory Salon Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-bold gradient-text">Crown & Glory Salon</span>
            </div>
            <p className="text-gray-400 mb-6">
              Elevating beauty and style with our premium unisex salon services. Experience the glow today!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-accent mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-accent transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              {/* Contact page disabled due to metadata export error */}
              {/* <li>
                <Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li> */}
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-accent transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <span className="text-accent">Contact info available below →</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-accent mr-3"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-accent shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-400">123 Beauty Lane, Cleveland, Ohio 44123, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-accent mr-3" />
                <span className="text-gray-400">(216) 555-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-accent mr-3" />
                <span className="text-gray-400">info@crownandglory.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-accent mr-3"></span>
              Business Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="h-6 w-6 text-accent shrink-0 mt-0.5 mr-3" />
                <div>
                  <p className="text-gray-400">Monday - Saturday:</p>
                  <p className="font-semibold text-white">10:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-6 w-6 text-accent shrink-0 mt-0.5 mr-3" />
                <div>
                  <p className="text-gray-400">Sunday:</p>
                  <p className="font-semibold text-white">11:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 pt-10 pb-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest offers and beauty tips.</p>
            <p className="text-xs text-amber-400 mb-6">(Demo - no messages will be sent)</p>
            {subscribeSuccess ? (
              <div className="bg-green-900/30 border border-green-700 text-green-400 px-4 py-3 rounded-lg mb-6 animate-pulse">
                <p className="text-sm">Demo successful! This is just a simulation.</p>
              </div>
            ) : (
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button 
                  type="button" 
                  onClick={handleSubscribe}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Demo Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>Copyright 2025. Made with open-source templates, robots and soul by Nelson Foster, Co-Founder and CEO, ProKofa Solutions.</p>
        </div>
      </div>
    </footer>
  )
}
