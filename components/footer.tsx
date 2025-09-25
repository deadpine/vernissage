export function Footer() {
  return (
    <footer className="bg-[#130102] text-white pt-4 pb-8 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between md:items-start">
        <img src="/images/logo.svg" alt="Vernissage logo" className="h-16 my-16" />
        <div className="w-full border-t border-[#3f2d16] pt-8 text-center text-[#6c5131] text-lg font-serif flex flex-col md:flex-row justify-between">
          <a href="mailto:marudifonzo@gmail.com" className="hover:text-[#A17345]">marudifonzo@gmail.com</a>
          <p>© {new Date().getFullYear()} Vernissage. Todos los secretos reservados.</p>
          <p><a href="https://deadpine.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[#A17345]">diseño por <span className="italic">deadpine.xyz</span></a></p>
        </div>
      </div>
    </footer>
  )
}
