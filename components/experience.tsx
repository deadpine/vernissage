"use client"

import { Button } from "@/components/ui/button"

export function ExperienceSection() {
  const scrollToTickets = () => {
    const ticketsSection = document.getElementById("tickets-section")
    if (ticketsSection) {
      ticketsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-[#26221C] text-white border-b-4 border-gold">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 items-center md:min-h-[100vh]">
      
        {/* Left side - Text content */}
        <div className="space-y-10 px-4 py-16 md:pr-12">
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
                <p>Entre 30 y 40 personas.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <p className="font-bold">Cocktail y banquete incluidos</p>
                <p>Todas las funciones incluyen comida y bebida</p>
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
            onClick={scrollToTickets}
            variant="outline"
            className="bg-transparent border border-white/50 text-white hover:bg-white hover:text-[#1a1a18] rounded-full px-8 py-6 text-lg font-serif transition-colors duration-300"
          >
            COMPRAR TICKETS
          </Button>
        </div>

        {/* Right side - Quote */}
        <div className="flex justify-center px-4 pt-8 pb-24 items-center md:pl-8 md:py-10">
          <img
            src="/images/note.png"
            alt="Classical statue surrounded by ivy"
            className="w-auto h-full object-cover max-w-[22rem] md:max-w-[30rem]"
          />
        </div>
        
      </div>
    </div>
  )
}
