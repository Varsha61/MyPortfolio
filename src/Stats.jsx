function Stats() {
  const stats = [
    { number: "7.28", label: "CGPA" },
    { number: "2+", label: "Major Projects" },
    { number: "3+", label: "Certifications" },
    { number: "5+", label: "Achievements" },
  ];

  return (
    <section className="py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 p-8 rounded-2xl text-center shadow-lg hover:scale-105 hover:bg-slate-700 transition duration-300"
          >
            <h2 className="text-4xl font-bold text-cyan-400">
              {item.number}
            </h2>

            <p className="mt-2 text-lg">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;