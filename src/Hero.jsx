import profile from "./assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="text-center">

        <img
          src={profile}
          alt="Varsha"
          className="w-56 h-56 rounded-full mx-auto border-4 border-cyan-400 shadow-lg"
        />

        <h1 className="text-7xl font-extrabold text-cyan-400 mt-6 glow">
          Varsha N
        </h1>

        <TypeAnimation
          sequence={[
            "Aspiring Agentic AI Developer",
            2000,
            "Full Stack Developer",
            2000,
            "Machine Learning Enthusiast",
            2000,
            "AI Innovation Builder",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="text-3xl text-purple-400 mt-4 font-semibold"
        />

        <p className="max-w-3xl mx-auto mt-6 text-xl">
          Passionate Information Technology student interested in
          Artificial Intelligence, Machine Learning,
          Full Stack Development and innovative real-world solutions.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <a
            href="https://github.com/Varsha61"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition duration-300"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/varsha-nagaraj-972316291"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl font-semibold transition duration-300"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition duration-300"
          >
            <FaDownload />
            Resume
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;