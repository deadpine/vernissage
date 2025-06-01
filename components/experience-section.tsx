"use client"

import { Button } from "@/components/ui/button"

export function ExperienceSection() {
  const scrollToTiers = () => {
    const tiersSection = document.getElementById("tiers-section")
    if (tiersSection) {
      tiersSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="py-16 px-8 bg-[#1a1a18] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">LA EXPERIENCIA</h2>

            <div className="text-lg text-gray-200 font-serif leading-relaxed">
              <p className="mb-8">
                En esta obra no hay butacas, no hay escenario, podés ser simplemente un espectador y disfrutar... o
                dejarte atrapar por la historia. Vernissage es una experiencia para los cinco sentidos, donde el arte no
                se contempla, se atraviesa.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <div>
                    <p className="font-semibold">Duración</p>
                    <p>De 90 a 120 minutos.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <div>
                    <p className="font-semibold">Grupo por función</p>
                    <p>Entre 20 y 40 personas.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <div>
                    <p className="font-semibold">Cocktail y banquete incluidos</p>
                    <p>Todas las funciones incluyen comida y bebida, sin costo adicional</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <div>
                    <p className="font-semibold">Niveles de participación posibles:</p>
                    <p>Desde un rol contemplativo hasta un rol activo de juego o indagación.</p>
                  </div>
                </li>
              </ul>
            </div>

            <Button
              onClick={scrollToTiers}
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1a1a18] rounded-full px-8 py-3 text-lg font-serif transition-colors duration-300"
            >
              COMPRAR TICKETS
            </Button>
          </div>

          {/* Right side - Quote */}
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-md text-right">
              <p className="text-2xl md:text-3xl font-serif leading-relaxed">
                Vernissage es una <em className="italic">performance</em> teatral, una curaduría gastronómica integrada
                al relato, pistas ocultas que invitan descubrir una historia con muchas capas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
