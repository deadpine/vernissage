export function HistorySection() {
  return (
    <div className="bg-[#171614] text-white border-b-4 border-gold">
      
      <div className="bg-[url('/images/history-bg.png')] bg-cover md:bg-contain bg-center bg-no-repeat 
      min-h-[400px] py-[126px] md:py-[134px] md:px-12 relative">
        
        {/* papel */}
        <div className="flex flex-col items-center max-w-[calc(100%-1.5rem)] md:max-w-[480px] md:space-y-10 space-y-6 mx-auto text-center mb-1 px-6 py-8 md:p-9 border border-[#725337]/60 rotate-[-1deg] md:rotate-[-2deg] relative">
          <h2 className="text-4xl font-heading text-[#725337]">HISTORIA</h2>
          <div>
            <p className="text-[#4B3420] font-serif text-lg mb-6">
              Durante la restauración de la mítica Residencia Sazsh, una mansión frente al mar en Punta del Este, Inés —sobrina y heredera del artista Bernardo Sazsh, emblema del arte uruguayo de los 80 y principios de los 90— descubre un cuarto cerrado desde hace décadas. Allí se encuentran obras y objetos que se creían perdidos tras el incendio que destruyó el atelier del artista.
            </p>
            <p className="text-[#4B3420] font-serif text-lg mb-6">
              Para celebrar el hallazgo, organiza una vernissage que revive las míticas Veladas Sazsh: noches de arte, delicias, música y secretos.
              Pero la casa parece guardar su propia memoria… y los recuerdos comienzan a cobrar vida.
            </p>
            <p className="text-[#4B3420] font-serif text-lg mb-2">
            Vernissage es una experiencia teatral inmersiva en la que los invitados —un grupo reducido y selecto de espectadores— atraviesan una casa que respira, escucha y habla.
            </p>
          </div>
          <img src="/images/cerradura.png" alt="" className="hidden md:block" />
        </div>

        <img src="/images/history-left.png" alt="History" className="absolute left-0 top-0 h-full w-auto object-contain hidden lg:block z-10" />
        <img src="/images/history-right.png" alt="History" className="absolute right-0 top-0 h-full w-auto object-contain hidden lg:block z-10" />

      </div>
    </div>
  )
} 