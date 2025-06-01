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
    <div className="h-screen bg-[#180101] flex flex-col justify-between relative border-b-4 border-[#664D30]">
      {/* Central image - Absolute positioned */}
      <div className="absolute bottom-0 left-0 right-0 h-[53vh] flex items-center justify-center z-10">
        <img
          src="/images/hand-card.png"
          alt="Hand holding ornate invitation card"
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Top navigation elements */}
      <div className="flex justify-between items-center p-4 md:p-6 relative">
        <p className="text-xs font-medium font-sans tracking-widest text-[#624E3C]">UN ARTISTA</p>
        <p className="text-xs font-medium font-sans tracking-widest text-[#624E3C]">UNA CASA</p>
        <p className="text-xs font-medium font-sans tracking-widest text-[#624E3C]">UN MISTERIO</p>
      </div>

      {/* Logo */}
      <div className="relative flex justify-center items-center mb-20 px-4">
        <img
          src="/images/vernissage-logo.svg"
          alt="Vernissage logo"
          className="max-w-[720px] h-auto"
        />
      </div>

      {/* Bottom elements */}
      <div className="flex justify-between items-center p-4 md:p-6 relative">
        <p className="text-xs font-medium font-sans tracking-widest text-[#624E3C]">NOVIEMBRE 2025</p>
        <p className="text-xs font-medium font-sans tracking-widest text-[#624E3C]">PUNTA DEL ESTE</p>
      </div>
    </div>
  )
}
