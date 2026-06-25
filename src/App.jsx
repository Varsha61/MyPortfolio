import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Achievements from "./Achievements";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white min-h-screen">

      <Navbar />

      <Hero />

      <Stats />

      <About />

      <Education />

      <Skills />

      <Certifications />

      <Achievements />

      <Projects />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;