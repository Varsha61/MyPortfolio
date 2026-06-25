function Achievements() {
  const achievements = [
    "Published and Presented 'Direct Market Access' at Rathinam College (2025)",
    "Presented 'App for Farmers' at Kongu Engineering College (Epoch'25)",
    "Participated in Symposium at Madras Institute of Technology",
    "Secured 2nd Place in Code Rush - Sri Sakthi Engineering College",
    "Secured 1st Place in Battle of Wits - Government College of Technology",
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen px-8 py-20 max-w-6xl mx-auto"
    >
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-12">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition duration-300 shadow-lg"
          >
            🏆 {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;