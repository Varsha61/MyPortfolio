import {
  FaGithub,
  FaBrain,
  FaSeedling,
} from "react-icons/fa";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-8 py-20 max-w-7xl mx-auto"
    >
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-14">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Farmer Project */}
        <div className="bg-slate-800/70 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">

          <img
            src="/farmer-home.png"
            alt="Farmer Marketplace"
            className="w-full h-64 object-cover"
          />

          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <FaSeedling className="text-green-400 text-3xl" />
              <h3 className="text-2xl font-bold text-green-400">
                Farmer Consumer Marketplace
              </h3>
            </div>

            <p className="text-gray-300 leading-7">
              A full-stack agriculture platform that directly connects
              farmers and consumers. Includes product listing,
              equipment rental, order management, secure payment,
              and price suggestion modules.
            </p>

            <ul className="mt-5 space-y-2 text-gray-300">
              <li>✓ Product Listing Module</li>
              <li>✓ Order Management System</li>
              <li>✓ Equipment Rental Platform</li>
              <li>✓ Secure Transactions</li>
              <li>✓ Price Suggestion System</li>
            </ul>

            <p className="mt-5 text-cyan-400 font-semibold">
              React • Node.js • MySQL • JavaScript • HTML • CSS
            </p>

            <div className="mt-6">
              <a
                href="https://github.com/Varsha61"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl font-semibold transition"
              >
                <FaGithub />
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Stroke Detection */}
        <div className="bg-slate-800/70 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">

          <img
            src="/stroke-project.png"
            alt="Stroke Detection"
            className="w-full h-64 object-cover"
          />

          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <FaBrain className="text-pink-400 text-3xl" />
              <h3 className="text-2xl font-bold text-pink-400">
                Stroke Detection Using CT/MRI Scans
              </h3>
            </div>

            <p className="text-gray-300 leading-7">
              AI-powered healthcare application that predicts and
              detects stroke from CT/MRI brain scans using Deep
              Learning models including VGG19 and EfficientNetB4.
            </p>

            <ul className="mt-5 space-y-2 text-gray-300">
              <li>✓ CT Scan Analysis</li>
              <li>✓ MRI Scan Analysis</li>
              <li>✓ Deep Learning Prediction</li>
              <li>✓ Confidence Score</li>
              <li>✓ Medical Recommendation System</li>
            </ul>

            <p className="mt-5 text-cyan-400 font-semibold">
              Python • TensorFlow • Keras • OpenCV • Scikit-learn •
              Gradio
            </p>

            <div className="mt-6">
              <a
                href="https://github.com/Varsha61"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl font-semibold transition"
              >
                <FaGithub />
                View Code
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;