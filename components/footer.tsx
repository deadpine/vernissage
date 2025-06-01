export function Footer() {
  return (
    <footer className="bg-[#130102] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">VERNISSAGE</h3>
            <p className="text-gray-300 font-serif">Una experiencia teatral inmersiva</p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4">CONTACTO</h3>
            <p className="text-gray-300 font-serif">hola@vernissageteatro.com</p>
          </div>
        </div>
        <div className="border-t border-[#2E211F] mt-8 pt-8 text-center text-[#705243] font-serif flex justify-between">
          <p>© {new Date().getFullYear()} Vernissage. Todos los secretos reservados.</p>
          <p>Diseño por <a href="https://deadpine.xyz" target="_blank" rel="noopener noreferrer">deadpine.xyz</a></p>
        </div>
      </div>
    </footer>
  )
}
