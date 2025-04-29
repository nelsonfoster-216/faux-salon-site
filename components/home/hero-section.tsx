import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1080&fit=crop&crop=focalpoint&auto=format&q=80"
          alt="Luxurious salon interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Crown & Glory{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Where every visit leaves you feeling like royalty
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Experience royal treatment with our bespoke beauty services, where elegance is crafted and confidence is crowned.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
              <Link href="/booking">Book Your Experience</Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-accent overflow-hidden">
                  <Image
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${i + 60}.jpg`}
                    alt={`Happy customer ${i}`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="text-accent flex text-2xl">{"★★★★★"}</div>
              <p className="text-sm text-gray-300">Trusted by 10,000+ happy clients</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
