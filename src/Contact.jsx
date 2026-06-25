function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-8"
    >
      <h2 className="text-5xl font-bold text-cyan-400 mb-12">
        Contact Me
      </h2>

      <div className="bg-slate-800 p-10 rounded-2xl shadow-lg w-full max-w-2xl">

        <div className="space-y-6">

          <div>
            <h3 className="text-xl font-semibold text-purple-400">
              Email
            </h3>
            <p className="text-lg mt-2">
              nvarsh403@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-400">
              Phone
            </h3>
            <p className="text-lg mt-2">
              +91 86109 95133
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-400">
              LinkedIn
            </h3>

            <a
              href="https://www.linkedin.com/in/varsha-nagaraj-972316291"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 underline hover:text-purple-400 transition"
            >
              View LinkedIn Profile
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-400">
              GitHub
            </h3>

            <a
              href="https://github.com/Varsha61"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 underline hover:text-purple-400 transition"
            >
              View GitHub Profile
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;