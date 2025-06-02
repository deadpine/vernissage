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
    <div className="py-16 px-8 bg-[#26221C] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 items-center  md:min-h-[100vh]">
      
        {/* Left side - Text content */}
        <div className="space-y-10">
          <h2 className="text-6xl font-heading leading-tight">LA EXPERIENCIA</h2>

          <p className="mb-10 text-lg font-serif">
            En esta obra no hay butacas, no hay escenario, podés ser simplemente un espectador y disfrutar... o
            dejarte atrapar por la historia. Vernissage es una experiencia para los cinco sentidos, donde el arte no
            se contempla, se atraviesa.
          </p>

          <ul className="space-y-6 text-lg font-serif pb-4">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <p className="font-bold">Duración</p>
                <p>De 90 a 120 minutos.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <p className="font-bold">Grupo por función</p>
                <p>Entre 20 y 40 personas.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <p className="font-bold">Cocktail y banquete incluidos</p>
                <p>Todas las funciones incluyen comida y bebida, sin costo adicional</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <p className="font-bold">Niveles de participación posibles:</p>
                <p>Desde un rol contemplativo hasta un rol activo de juego o indagación.</p>
              </div>
            </li>
          </ul>

          <Button
            onClick={scrollToTiers}
            variant="outline"
            className="bg-transparent border border-white text-white hover:bg-white hover:text-[#1a1a18] rounded-full px-6 py-4 text-lg font-serif transition-colors duration-300"
          >
            COMPRAR TICKETS
          </Button>
        </div>

        {/* Right side - Quote */}
        <div className="flex justify-center px-4 pt-24 pb-16 items-center md:min-h-[100vh] md:pl-16">
          <img
            src="/images/note.png"
            alt="Classical statue surrounded by ivy"
            className="w-auto h-full object-cover max-w-[20rem] md:max-w-[26rem]"
          />
        </div>
        
      </div>
    </div>
  )
}
