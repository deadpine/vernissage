"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToTiers = () => {
    const tiersSection = document.getElementById("tiers-section")
    if (tiersSection) {
      tiersSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen bg-[#1a1a18] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Top navigation elements */}
      <div className="absolute top-8 left-8 text-sm font-serif tracking-wider text-gray-400">UN ARTISTA</div>
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-sm font-serif tracking-wider text-gray-400">
        UNA CASA
      </div>
      <div className="absolute top-8 right-8 text-sm font-serif tracking-wider text-gray-400">UN MISTERIO</div>

      {/* Buy tickets button */}
      <div className="absolute top-8 right-8 mt-8">
        <Button
          onClick={scrollToTiers}
          variant="outline"
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1a1a18] rounded-full px-6 py-2 text-sm font-serif transition-colors duration-300"
        >
          COMPRAR TICKETS
        </Button>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen px-8">
        <div className="text-center relative">
          {/* Main title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#d4af37] leading-none mb-8 tracking-wider">
            VERNISSAGE
          </h1>

          {/* Central image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src="/images/hero-hand-card.png"
                alt="Hand holding ornate invitation card"
                className="w-64 md:w-80 lg:w-96 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom elements */}
      <div className="absolute bottom-8 left-8 text-sm font-serif tracking-wider text-gray-400">NOVIEMBRE 2025</div>
      <div className="absolute bottom-8 right-8 text-sm font-serif tracking-wider text-gray-400">PUNTA DEL ESTE</div>
    </div>
  )
}
