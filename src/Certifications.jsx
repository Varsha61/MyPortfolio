function Certifications() {
  const certificates = [
    "NPTEL - Human Computer Interaction (86%)",
    "NPTEL - Industry 4.0 and Industrial Internet of Things (60%)",
    "Foundation of Cyber Security - Skill Development Program",
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen px-8 py-20 max-w-6xl mx-auto"
    >
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-12">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 hover:scale-105 transition duration-300 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white">
              {cert}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Certifications;