export function Footer() {
  return (
    <footer className="bg-[#130102] text-white pt-4 pb-8 px-8">
      <div className="max-w-7xl mx-auto">
        <img src="/images/vernissage-logo.png" alt="Vernissage logo" className="h-16 my-16" />
        <div className="border-t border-[#2E211F] pt-8 text-center text-[#53402D] text-lg font-serif flex flex-col md:flex-row justify-between">
          <a href="mailto:hola@vernissageteatro.com" className="hover:text-[#A17345]">hola@vernissageteatro.com</a>
          <p>© {new Date().getFullYear()} Vernissage. Todos los secretos reservados.</p>
          <p>diseño por <a href="https://deadpine.xyz" target="_blank" rel="noopener noreferrer" className="italic hover:text-[#A17345]">deadpine.xyz</a></p>
        </div>
      </div>
    </footer>
  )
}
