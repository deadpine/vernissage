export function Footer() {
  return (
    <footer className="bg-[#1a1a18] text-white py-12 px-8">
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
          <div>
            <h3 className="text-xl font-serif mb-4">SÍGUENOS</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-serif">
          <p>© {new Date().getFullYear()} Vernissage. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
