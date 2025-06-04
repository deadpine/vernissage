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
    <div className="h-screen bg-[#180101] flex flex-col justify-center relative border-b-4 border-[#664D30]">
      
      {/* Hand image - Absolute positioned */}
      <div className="absolute bottom-0 left-0 right-0 h-[53vh] md:h-[54vh] flex items-center justify-center z-10 shadow-xl">
        <img
          src="/images/hand-card.png"
          alt="Hand holding ornate invitation card"
          className="h-full w-auto object-cover"
        />
      </div>

      <div className="h-screen max-w-6xl mx-auto flex flex-col justify-center px-3 md:px-0 md:pb-[15vh]">

        {/* Top navigation elements */}
        <div className="flex grow justify-between items-end py-6 md:py-8 relative">
          <p className="text-xs font-semibold font-sans tracking-widest text-gold">UN ARTISTA</p>
          <p className="text-xs font-semibold font-sans tracking-widest text-gold">UNA CASA</p>
          <p className="text-xs font-semibold font-sans tracking-widest text-gold">UN MISTERIO</p>
        </div>

        {/* Logo */}
        <img src="/images/logo.svg" alt="Vernissage logo" className="w-full blur-[0.5px] pb-[14vh] md:pb-0" />

        {/* Bottom elements */}
        <div className="flex grow justify-between items-end md:items-start py-3 md:py-8 relative">
          <p className="text-xs font-semibold font-sans tracking-widest text-gold">NOVIEMBRE 2025</p>
          <p className="text-xs font-semibold font-sans tracking-widest text-gold">PUNTA DEL ESTE</p>
        </div>
      </div>
    </div>
  )
}
