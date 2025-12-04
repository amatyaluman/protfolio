import { useState, useEffect } from "react";

export default function Portfolio() {
  // Typewriter effect states
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Computer Science Student",
    "QA Enthusiast",
    "ML & Automation Learner",
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 80;
    const pauseTime = isDeleting ? 40 : 1200;

    const timer = setTimeout(() => {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  // Gradient animation for name
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 p-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-32">
        {/* Header with animated name and typewriter */}
        <header className="text-center space-y-6 pt-12">
          <div className="relative">
            <h1
              className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, 
                  #8b5cf6 ${gradientPosition}%, 
                  #6366f1 ${Math.min(gradientPosition + 30, 100)}%, 
                  #8b5cf6 ${Math.min(gradientPosition + 60, 100)}%)`,
                backgroundSize: "200% 100%",
              }}
            >
              Luman Amatya
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full mt-4 opacity-80"></div>
          </div>

          <div className="h-20 flex items-center justify-center">
            <div className="text-xl md:text-2xl text-gray-700 font-light tracking-wide">
              <span className="inline-flex items-center bg-white/50 px-4 py-2 rounded-lg">
                <span className="font-mono">{displayText}</span>
                <span className="ml-2 w-[2px] h-6 bg-gradient-to-b from-purple-500 to-indigo-500 animate-pulse"></span>
              </span>
            </div>
          </div>

          {/* Role indicator dots */}
          <div className="flex justify-center space-x-3">
            {roles.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === roleIndex
                    ? "bg-gradient-to-r from-purple-500 to-indigo-500 scale-125"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-12 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              I am a computer science student exploring quality assurance,
              Python development, machine learning, and automation. I enjoy
              building practical projects like weather prediction systems,
              dashboards, and test documentation. I focus on learning
              step-by-step and creating meaningful, real-world tools.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Python Development",
                "QA Testing",
                "Machine Learning",
                "Automation",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100 hover:scale-105 transition-transform cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 group"
            >
              <span className="flex items-center space-x-2">
                <span>Get in Touch</span>
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </span>
            </a>
          </div>

          {/* Animated Tech Visualization */}
          <div className="relative h-80">
            <div className="absolute inset-0 bg-white rounded-2xl border border-gray-200 shadow-sm">
              {/* Animated floating elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl animate-float">
                <div className="absolute inset-0 flex items-center justify-center text-purple-600 font-bold">
                  ML
                </div>
              </div>

              <div
                className="absolute top-1/2 right-8 w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-indigo-600 font-bold">
                  QA
                </div>
              </div>

              <div
                className="absolute bottom-8 left-12 w-12 h-12 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-purple-500 font-bold">
                  AI
                </div>
              </div>

              <div
                className="absolute top-12 right-12 w-10 h-10 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-indigo-500 font-bold">
                  Py
                </div>
              </div>

              {/* Subtle connecting lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: -1 }}
              >
                <line
                  x1="20%"
                  y1="20%"
                  x2="50%"
                  y2="50%"
                  stroke="#ddd"
                  strokeWidth="1"
                  strokeDasharray="4"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="80%"
                  y2="30%"
                  stroke="#ddd"
                  strokeWidth="1"
                  strokeDasharray="4"
                />
                <line
                  x1="80%"
                  y1="30%"
                  x2="70%"
                  y2="70%"
                  stroke="#ddd"
                  strokeWidth="1"
                  strokeDasharray="4"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hands-on applications combining ML, QA, and automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Kathmandu Weather Prediction System",
                desc: "A Streamlit-based ML application predicting hourly and weekly weather conditions using Random Forest models and interactive charts.",
                tech: ["Python", "Streamlit", "Scikit-learn"],
              },
              {
                title: "Weather Dashboard (Dark Theme)",
                desc: "Historical and forecast insights using Altair visualizations, powered by a locally trained ML model.",
                tech: ["Python", "Altair", "Pandas"],
              },
              {
                title: "STLC Documentation",
                desc: "Complete software testing lifecycle documentation using Excel, including bug reporting, test cases, and requirements validation.",
                tech: ["Excel", "Jira", "QA"],
              },
              {
                title: "E‑commerce Test Case Generation",
                desc: "Created detailed test cases from bug lists and admin panel errors for an e-commerce application.",
                tech: ["Testing", "Documentation", "Automation"],
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl border border-gray-200 hover:border-purple-200 p-6 hover:bg-gradient-to-br hover:from-white hover:to-purple-50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900">
                    {project.title}
                  </h3>
                  <div className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-purple-500">
                    ↗
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-gray-600">
              Continuously expanding my technical toolkit
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { skill: "Python", level: 90 },
              { skill: "Streamlit", level: 85 },
              { skill: "Machine Learning", level: 80 },
              { skill: "Random Forest", level: 75 },
              { skill: "QA Testing", level: 85 },
              { skill: "STLC Docs", level: 90 },
              { skill: "Jira", level: 70 },
              { skill: "Selenium", level: 60 },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg border border-gray-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">
                    {item.skill}
                  </span>
                  <span className="text-sm font-bold text-gray-600">
                    {item.level}%
                  </span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"
                    style={{
                      width: `${item.level}%`,
                      animation: "progress 1s ease-out",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center space-y-6 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Interested in collaboration, projects, or just want to chat about
              tech? I'm always open to discussing new opportunities.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:luman@example.com"
                className="group px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span className="font-medium">Email Me</span>
                <span className="group-hover:translate-x-2 transition-transform">
                  ✉️
                </span>
              </a>

              <a
                href="#"
                className="group px-8 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-3 border border-gray-300"
              >
                <span className="font-medium">View Resume</span>
                <span className="group-hover:translate-x-2 transition-transform">
                  📄
                </span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <footer className="pt-12 border-t border-gray-200 mt-8">
            <p className="text-gray-600">
              Built with React & Tailwind CSS • © {new Date().getFullYear()}{" "}
              Luman Amatya
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              {["💻", "🔧", "🚀"].map((emoji, i) => (
                <span
                  key={i}
                  className="text-xl opacity-70 hover:opacity-100 hover:scale-110 transition-transform cursor-pointer"
                >
                  {emoji}
                </span>
              ))}
            </div>
          </footer>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Apply gradient animation to name */
        h1 {
          animation: gradientShift 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
}
