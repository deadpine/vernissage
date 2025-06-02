export function Footer() {
  return (
    <footer className="bg-[#130102] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img src="/images/vernissage-logo.png" alt="Vernissage" className="h-16 my-8" />
        </div>
        <div className="border-t border-[#2E211F] mt-8 pt-8 text-center text-[#53402D] text-lg font-serif flex flex-col md:flex-row justify-between">
          <p>hola@vernissageteatro.com</p>
          <p>© {new Date().getFullYear()} Vernissage. Todos los secretos reservados.</p>
          <p>diseño por <a href="https://deadpine.xyz" target="_blank" rel="noopener noreferrer" className="italic hover:text-[#A17345]">deadpine.xyz</a></p>
        </div>
      </div>
    </footer>
  )
}
