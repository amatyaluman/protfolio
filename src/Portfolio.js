import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThreeScene from "./components/ThreeScene";

export default function Portfolio() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Computer Science Student",
    "QA Enthusiast",
    "ML & Automation Learner",
  ];

  // Typing effect
  useEffect(() => {
    const current = roles[roleIndex];
    const timer = setTimeout(
      () => {
        if (!isDeleting && displayText !== current) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else if (isDeleting && displayText !== "") {
          setDisplayText(current.slice(0, displayText.length - 1));
        } else if (!isDeleting && displayText === current) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else if (isDeleting && displayText === "") {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      },
      isDeleting ? 60 : 120
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 text-gray-900 overflow-x-hidden">
      {/* Background particles */}
      <div className="fixed inset-0 -z-10 opacity-40 pointer-events-none">
        <ThreeScene />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* HERO */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center space-y-12 mb-32"
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Luman Amatya
          </motion.h1>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 80 }}
            className="inline-flex items-center gap-4 px-10 py-6 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-200/50"
          >
            <span className="text-2xl md:text-3xl font-light text-gray-800">
              {displayText}
            </span>
            <span className="w-1 h-10 bg-gradient-to-b from-purple-600 to-pink-600 animate-pulse" />
          </motion.div>
        </motion.header>

        {/* ABOUT */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid md:grid-cols-2 gap-16 items-center mb-40"
        >
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              I'm a passionate Computer Science student exploring Quality
              Assurance, Machine Learning, and Automation with Python and modern
              tools.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                "Python",
                "QA Testing",
                "Machine Learning",
                "Automation",
                "Streamlit",
                "React",
                "Selenium",
                "Playwright",
              ].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full font-semibold shadow-md"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            <ThreeScene />
          </motion.div>
        </motion.section>

        {/* PROJECTS, SKILLS, CONTACT — same as before */}
        {/* ... (you can keep the ones I gave you earlier) */}

        {/* CONTACT (final correct closing) */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <motion.a
              href="mailto:luman@example.com"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-full shadow-2xl"
            >
              Send me an Email
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-purple-700 text-xl font-bold rounded-full border-2 border-purple-300 shadow-lg"
            >
              Download Resume
            </motion.a>
          </div>

          <footer className="mt-20 text-gray-600">
            <p className="text-lg">
              Built with React 19 • Tailwind • Framer Motion • Three.js
            </p>
            <p className="mt-4">
              © {new Date().getFullYear()} Luman Amatya – Made with passion
            </p>
          </footer>
        </motion.section>
      </div>
    </div>
  );
}
