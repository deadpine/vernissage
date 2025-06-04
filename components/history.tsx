export function HistorySection() {
  return (
    <div className="bg-[#171614] text-white border-b-4 border-gold">
      
      <div className="bg-[url('/images/history-bg.png')] bg-cover md:bg-contain bg-center bg-no-repeat 
      min-h-[400px] py-[126px] md:py-[134px] md:px-12 relative">
        
        {/* papel */}
        <div className="flex flex-col items-center max-w-[calc(100%-1.5rem)] md:max-w-[450px] md:space-y-10 space-y-6 mx-auto text-center mb-1 px-6 py-8 md:p-9 border border-[#725337]/60 rotate-[-1deg] md:rotate-[-2deg] relative">
          <h2 className="text-4xl font-heading text-[#725337]">HISTORIA</h2>
          <div>
            <p className="text-[#4B3420] font-serif text-lg mb-6">
              Durante la restauración de una imponente mansión en Punta del Este, los nuevos propietarios descubren rastros de un artista que aparentemente vivió y creó en la casa. Óleos, esculturas, cartas, fotos y material fílmico. Una obra tan potente como desconocida. Y un enigma. ¿Quién era ese artista? ¿Por qué desapareció sin dejar rastro? ¿Qué intentaba decirnos con su obra?
            </p>
            <p className="text-[#4B3420] font-serif text-lg mb-2">
              Para compartir el hallazgo, organizan una vernissage íntima e inmersiva, inspirada en el universo onírico y excéntrico que rodeaba al artista. Un grupo selecto de invitados se sumergirá en una experiencia donde la casa cobra vida. Los espacios, los objetos y las obras parecen hablar, y cada visitante se convierte en parte del misterio.
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