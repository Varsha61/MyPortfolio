function Education() {
  return (
    <section
      id="education"
      className="min-h-screen px-8 py-20 max-w-6xl mx-auto"
    >
      <h2 className="text-5xl font-bold text-cyan-400 mb-12">
        Education
      </h2>

      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-purple-400">
          B.Tech Information Technology
        </h3>

        <p className="mt-4 text-xl">
          Dr. N.G.P Institute of Technology
        </p>

        <p className="text-gray-400 mt-2">
          2023 - 2027
        </p>

        <p className="mt-2 text-cyan-400 font-semibold">
          CGPA: 7.28
        </p>

        <p className="mt-6 text-lg">
          Focus Areas: Artificial Intelligence, Machine Learning,
          Full Stack Development, Database Management Systems,
          Data Structures and Software Engineering.
        </p>
      </div>
    </section>
  );
}

export default Education;