function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-cyan-400">
          Varsha N
        </h1>

        <div className="flex gap-6 text-lg">

          <a href="#about" className="hover:text-cyan-400">
            About
          </a>

          <a href="#education" className="hover:text-cyan-400">
            Education
          </a>

          <a href="#skills" className="hover:text-cyan-400">
            Skills
          </a>

          <a href="#certifications" className="hover:text-cyan-400">
            Certifications
          </a>

          <a href="#achievements" className="hover:text-cyan-400">
            Achievements
          </a>

          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;