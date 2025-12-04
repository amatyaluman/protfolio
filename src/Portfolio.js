// src/Portfolio.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThreeScene from "./components/ThreeScene";

const Portfolio = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Quality Analyst",
    "Software QA Specialist",
    "Automation & Testing",
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 1500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const skills = [
    "Manual Testing",
    "Functional Testing",
    "Regression Testing",
    "Test Case Design",
    "Test Documentation",
    "Bug Reporting",
    "Jira",
    "Postman",
    "SQL",
    "Python",
    "Selenium",
    "Playwright",
  ];

  return (
    <>
      <ThreeScene />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 text-gray-900 overflow-x-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* HERO SECTION */}
          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center space-y-10 md:space-y-16 mb-20 md:mb-32"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
                  Luman Amatya
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="inline-flex items-center gap-3 px-6 py-4 sm:px-8 sm:py-5 bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-xl border border-purple-200/50"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-light text-gray-800 min-h-[2.5rem] flex items-center">
                {displayText || "\u00A0"}
              </span>
              <span className="inline-block w-0.5 sm:w-1 h-6 sm:h-10 bg-gradient-to-b from-purple-600 to-pink-600 animate-pulse" />
            </motion.div>
          </motion.header>

          {/* ABOUT SECTION */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-28 md:mb-40"
          >
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                I'm a passionate Junior Quality Analyst dedicated to delivering
                flawless user experiences through rigorous testing and process
                improvement. With strong foundations in manual testing, test
                automation (Python, Selenium, Playwright), and modern QA tools,
                I bridge the gap between development and quality excellence.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.1,
                      y: -3,
                      backgroundColor: "rgba(139, 92, 246, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white/70 backdrop-blur-sm text-purple-700 rounded-full font-medium shadow-sm border border-purple-200/50 hover:shadow-md transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center min-h-[400px] lg:min-h-[500px]">
              <div className="relative w-full max-w-md">
                <motion.div
                  initial={{ rotateY: 90, opacity: 0 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-2xl"
                >
                  <h3 className="text-2xl font-bold text-purple-700 mb-6">
                    QA Focus Areas
                  </h3>
                  <div className="space-y-6">
                    {[
                      { label: "Test Coverage", value: "95%" },
                      { label: "Bug Detection", value: "98%" },
                      { label: "Automation", value: "85%" },
                      { label: "Documentation", value: "100%" },
                    ].map((item, index) => (
                      <div key={item.label} className="space-y-2">
                        <div className="flex justify-between text-gray-700">
                          <span>{item.label}</span>
                          <span className="font-bold text-purple-600">
                            {item.value}
                          </span>
                        </div>
                        <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: item.value }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: index * 0.1 + 0.3,
                            }}
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* CONTACT SECTION */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center py-16 md:py-24"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Interested in collaborating or have a QA opportunity? Let's
                discuss how I can contribute to your team's success.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <motion.a
                href="mailto:lumanamatya@example.com"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 sm:px-12 sm:py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Send me an Email
              </motion.a>

              <motion.a
                href="/Luman_Amatya_Resume.pdf"
                download="Luman_Amatya_Resume.pdf"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 sm:px-12 sm:py-5 bg-white hover:bg-gray-50 text-purple-700 text-lg font-semibold rounded-full shadow-lg border-2 border-purple-300 hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Download Resume
              </motion.a>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center gap-8 text-3xl mb-20"
            >
              <motion.a
                href="https://linkedin.com/in/luman-amatya"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.2 }}
                className="text-[#0077b5] hover:text-[#006097] transition-colors duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.2 }}
                className="text-gray-800 hover:text-black transition-colors duration-300"
              >
                <i className="fab fa-github"></i>
              </motion.a>
            </motion.div>

            {/* Footer */}
            <motion.footer
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-600"
            >
              <p className="text-sm">
                © {new Date().getFullYear()} Luman Amatya — Crafted with passion
                and precision
              </p>
            </motion.footer>
          </motion.section>
        </div>

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </div>
    </>
  );
};

export default Portfolio;
