function Skills() {
  const skills = [
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MySQL",
    "Machine Learning",
    "Artificial Intelligence",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-8 py-20 max-w-6xl mx-auto"
    >
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl text-center hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer shadow-lg"
          >
            <h3 className="text-xl font-semibold">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;