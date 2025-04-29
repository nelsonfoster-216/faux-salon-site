"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Scissors, Palette, Sparkles, Users } from "lucide-react"

// Gallery data
const galleryItems = {
  all: [
    {
      id: 1,
      src: "https://images.pexels.com/photos/3992855/pexels-photo-3992855.jpeg",
      alt: "Salon styling tools",
      category: "interior",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg",
      alt: "Hair salon service",
      category: "hair",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg",
      alt: "Manicure service",
      category: "nails",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg",
      alt: "Makeup session",
      category: "makeup",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg",
      alt: "Barber service",
      category: "hair",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/2693415/pexels-photo-2693415.jpeg",
      alt: "Professional makeup application",
      category: "makeup",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg",
      alt: "Nail care service",
      category: "nails",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3998406/pexels-photo-3998406.jpeg",
      alt: "Haircut service",
      category: "hair",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/6663467/pexels-photo-6663467.jpeg",
      alt: "Hair styling session",
      category: "hair",
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/3997304/pexels-photo-3997304.jpeg",
      alt: "Pedicure treatment",
      category: "nails",
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/6954220/pexels-photo-6954220.jpeg",
      alt: "Beauty treatment",
      category: "makeup",
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/3993435/pexels-photo-3993435.jpeg",
      alt: "Professional hairstyling",
      category: "hair",
    },
  ],
  hair: [
    {
      id: 2,
      src: "https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg",
      alt: "Hair salon service",
      category: "hair",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg",
      alt: "Barber service",
      category: "hair",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3998406/pexels-photo-3998406.jpeg",
      alt: "Haircut service",
      category: "hair",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/6663467/pexels-photo-6663467.jpeg",
      alt: "Hair styling session",
      category: "hair",
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/3993435/pexels-photo-3993435.jpeg",
      alt: "Professional hairstyling",
      category: "hair",
    },
  ],
  nails: [
    {
      id: 3,
      src: "https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg",
      alt: "Manicure service",
      category: "nails",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg",
      alt: "Nail care service",
      category: "nails",
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/3997304/pexels-photo-3997304.jpeg",
      alt: "Pedicure treatment",
      category: "nails",
    },
  ],
  makeup: [
    {
      id: 4,
      src: "https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg",
      alt: "Makeup session",
      category: "makeup",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/2693415/pexels-photo-2693415.jpeg",
      alt: "Professional makeup application",
      category: "makeup",
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/6954220/pexels-photo-6954220.jpeg",
      alt: "Beauty treatment",
      category: "makeup",
    },
  ],
}

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedAlt, setSelectedAlt] = useState<string>("")

  return (
    <>
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>All</span>
            </TabsTrigger>
            <TabsTrigger value="hair" className="flex items-center gap-2">
              <Scissors className="h-4 w-4" />
              <span>Hair</span>
            </TabsTrigger>
            <TabsTrigger value="nails" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span>Nails</span>
            </TabsTrigger>
            <TabsTrigger value="makeup" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>Makeup</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {Object.keys(galleryItems).map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryItems[category as keyof typeof galleryItems].map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div
                      className="relative aspect-square overflow-hidden rounded-md cursor-pointer group salon-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      onClick={() => {
                        setSelectedImage(item.src)
                        setSelectedAlt(item.alt)
                      }}
                    >
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={item.id <= 4}
                        loading={item.id <= 4 ? "eager" : "lazy"}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          // @ts-ignore - Need to set src on error
                          e.target.src = "/placeholder.svg";
                          // @ts-ignore - Only show placeholder styling when needed
                          e.target.classList.add("placeholder-image");
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white font-medium">{item.alt}</span>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <div className="relative aspect-video w-full">
                      <Image 
                        src={item.src || "/placeholder.svg"} 
                        alt={item.alt} 
                        fill 
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className="object-contain" 
                        loading="eager"
                        onError={(e) => {
                          // @ts-ignore - Need to set src on error
                          e.target.src = "/placeholder.svg";
                          // @ts-ignore - Only show placeholder styling when needed
                          e.target.classList.add("placeholder-image");
                        }}
                      />
                    </div>
                    <p className="text-center text-gray-700 mt-2 font-medium">{item.alt}</p>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}
