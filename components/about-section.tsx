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
    <div className="bg-[#f5f3f0]">
      <div className="max-w-7xl mx-auto min-h-[calc(90vh-100px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight">VERNISSAGE</h1>

            <div className="space-y-6 text-lg text-gray-800 font-serif leading-relaxed">
              <p>
                Una experiencia íntima, sensorial y enigmática que combina arte visual, teatro de recorrido, gastronomía
                y elementos de escape room en una casona con una historia única.
              </p>

              <p>
                Vernissage está pensada para un público que busca experiencias culturales diferentes, personales,
                exclusivas y memorables. No es únicamente una representación teatral. Es una invitación a habitar una
                historia, una experiencia.
              </p>
            </div>

            <Button
              onClick={scrollToTiers}
              variant="outline"
              className="bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full px-8 py-3 text-lg font-serif transition-colors duration-300"
            >
              COMPRAR TICKETS
            </Button>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center">
            <img
              src="/images/statue-ivy.png"
              alt="Classical statue surrounded by ivy"
              className="w-auto h-full object-cover max-h-[700px]"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
