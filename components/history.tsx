export function HistorySection() {
  return (
    <div className="bg-[#171614] text-white border-b-4 border-gold">
      
      <div className="bg-[url('/images/history-bg.png')] bg-cover md:bg-contain bg-center bg-no-repeat min-h-[400px] py-[138px] md:py-[134px] relative">
        
        {/* papel */}
        <div className="max-w-[calc(100%-2rem)] md:max-w-[476px] space-y-6 mx-auto text-center px-7 py-8 md:p-9 border border-[#725337] rotate-[-1deg] md:rotate-[-2deg] relative z-10">
          <h2 className="text-4xl font-heading text-[#725337] mb-8">HISTORIA</h2>
          <p className="text-[#392818] font-serif text-lg mb-4">
            Durante la restauración de una imponente mansión en Punta del Este, los nuevos propietarios encuentran escondidos los rastros de un artista que aparentemente vivió y creó dentro de la casa: óleos, esculturas, cartas, fotos con otros íconos artísticos de la época, maquetas, audios y material fílmico. Una obra tan potente como desconocida hasta el día de hoy. Y un enigma. ¿Quién era este artista? ¿Por qué desapareció sin dejar rastro? ¿Qué intentaba decirnos con su obra?
          </p>
          <p className="text-[#392818] font-serif text-lg">
            Para compartir el hallazgo, los nuevos dueños de la propiedad organizan una Vernissage inspirada en el mundo bohemio y extravagante en el que vivió este artista en los años 60. 
            Un grupo reducido y selecto de invitados se sumergirá en una experiencia donde las obras, los espacios y hasta los objetos parecen hablar. Las habitaciones se transforman en escenarios vivos. La casa revela secretos, y la sola presencia de cada visitante activa piezas de una narrativa que no termina de explicarse del todo.
          </p>
        </div>

        <img src="/images/history-left.png" alt="History" className="absolute left-0 top-0 h-full w-auto object-contain hidden lg:block" />
        <img src="/images/history-right.png" alt="History" className="absolute right-0 top-0 h-full w-auto object-contain hidden lg:block" />

      </div>
    </div>
  )
} 