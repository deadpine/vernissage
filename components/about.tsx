"use client"

import { Button } from "@/components/ui/button"

export function AboutSection() {
  const scrollToTiers = () => {
    const tiersSection = document.getElementById("tiers-section")
    if (tiersSection) {
      tiersSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-[#f5f3f0] border-b-4 border-gold">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">

        {/* Left side - Text content */}
        <div className="space-y-10 px-4 pt-24 pb-20 flex flex-col justify-center items-start md:min-h-[100vh] md:py-12 md:pr-11">

          <h2 className="text-7xl font-heading text-gray-900 leading-tight">VERNISSAGE</h2>

          <p className="text-2xl font-serif text-gray-800">
            Una experiencia íntima, sensorial y enigmática que combina arte visual, teatro de recorrido, gastronomía
            y elementos de escape room en una casona con una historia única.
          </p>

          <p className="text-lg font-serif text-gray-800 pb-4">
            Vernissage está pensada para un público que busca experiencias culturales diferentes, personales,
            exclusivas y memorables. No es únicamente una representación teatral. Es una invitación a habitar una
            historia, una experiencia.
          </p>
          
          <Button
            onClick={scrollToTiers}
            variant="outline"
            className="bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white rounded-full px-6 py-4 text-lg font-serif transition-colors duration-300"
          >
            COMPRAR TICKETS
          </Button>
        </div>

        {/* Right side - Image */}
        <div className="flex justify-center px-4 items-end md:min-h-[100vh]">
          <img
            src="/images/statue-ivy.png"
            alt="Classical statue surrounded by ivy"
            className="w-auto h-full object-cover max-h-[32rem] md:max-h-[660px]"
          />
        </div>

      </div>
    </div>
  )
}
