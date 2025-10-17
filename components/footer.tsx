export function Footer() {
  return (
    <footer className="bg-[#130102] text-white pt-4 pb-8 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between md:items-start">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <img src="/images/logo.svg" alt="Vernissage logo" className="h-16 my-16" />
          <div className="flex flex-row items-center justify-center gap-8 mt-2mb-16">
            <a href="https://ocio-wine.myshopify.com/" target="_blank" rel="noopener noreferrer">
              <img src="/images/ocio.png" alt="Ocio" className="h-10 hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://www.boletera.com.ar/" target="_blank" rel="noopener noreferrer">
              <img src="/images/boletera.svg" alt="Boletera" className="h-10 hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://www.instagram.com/alison.cakes.cafe/" target="_blank" rel="noopener noreferrer">
              <img src="/images/allison.png" alt="Allison" className="h-10 hover:opacity-80 transition-opacity" />
            </a>
          </div>
        </div>
        
        <div className="w-full border-t border-[#3f2d16] pt-8 text-center text-[#6c5131] text-lg font-serif flex flex-col md:flex-row justify-between">
          <a href="mailto:hola@vernissageteatro.com" className="hover:text-[#A17345]">hola@vernissageteatro.com</a>
          <p>© {new Date().getFullYear()} Vernissage. Todos los secretos reservados.</p>
          <p><a href="https://deadpine.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[#A17345]">diseño por <span className="italic">deadpine.xyz</span></a></p>
        </div>
      </div>
    </footer>
  )
}
