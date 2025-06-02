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
      
      {/* Hand image - Absolute positioned */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] md:h-[54vh] flex items-center justify-center z-10 shadow-xl">
        <img
          src="/images/hand-card.png"
          alt="Hand holding ornate invitation card"
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Top navigation elements */}
      <div className="flex justify-between items-center py-4 px-3 md:p-6 relative">
        <p className="text-xs font-semibold font-sans tracking-widest text-gold">UN ARTISTA</p>
        <p className="text-xs font-semibold font-sans tracking-widest text-gold">UNA CASA</p>
        <p className="text-xs font-semibold font-sans tracking-widest text-gold">UN MISTERIO</p>
      </div>

      {/* Logo */}
      <div className="text-center pb-[3vh] md:pb-[12vh]">
        <svg className="w-full h-auto" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="vernissageGradient" cx="50%" cy="100%" r="100%" fx="50%" fy="100%">
              <stop offset="0%" stopColor="#4A361C" />
              <stop offset="100%" stopColor="#8F693D" />
            </radialGradient>
          </defs>
          <text 
            x="50%" 
            y="50%" 
            dominantBaseline="middle" 
            textAnchor="middle"
            className="text-[19rem] md:text-[11rem] font-heading blur-[0.2px]"
            style={{ fill: "url(#vernissageGradient)" }}
          >
            VERNISSAGE
          </text>
        </svg>
      </div>

      {/* Bottom elements */}
      <div className="flex justify-between items-center py-4 px-3 md:p-6 relative">
        <p className="text-xs font-semibold font-sans tracking-widest text-gold">NOVIEMBRE 2025</p>
        <p className="text-xs font-semibold font-sans tracking-widest text-gold">PUNTA DEL ESTE</p>
      </div>
    </div>
  )
}
