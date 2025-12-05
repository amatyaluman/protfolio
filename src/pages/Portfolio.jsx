// Portfolio.jsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const roles = [
    "QA Automation Engineer",
    "Software Tester",
    "Quality Analyst",
    "Test Automation Specialist",
  ];

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;
    const pause = 1800;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < current.length) {
        setDisplayText(current.slice(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === current.length) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(current.slice(0, displayText.length - 1));
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Stats data
  const stats = [
    { value: "200+", label: "Bugs Identified" },
    { value: "85%", label: "Automation Coverage" },
    { value: "98%", label: "API Test Coverage" },
    { value: "300+", label: "Test Cases" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-950">
      {/* Simplified Background Pattern */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_var(--tw-gradient-stops))] from-cyan-900 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-indigo-900 via-transparent to-transparent"></div>
      </div>

      {/* Navigation - PERFECTLY CENTERED */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 w-full flex justify-center z-50 px-4"
      >
        <div className="backdrop-blur-2xl bg-black/70 border border-white/20 rounded-3xl px-4 py-2 shadow-2xl shadow-purple-900/30">
          <ul className="flex gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-semibold px-3 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 shadow-lg shadow-purple-500/40"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 px-6 py-3 rounded-full border border-cyan-400/50 mb-6 backdrop-blur-sm">
              <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-cyan-300 font-medium text-sm sm:text-base">
                Available for Opportunities
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400">
                Luman Amatya
              </span>
            </h1>

            <div className="h-20 flex items-center justify-center mb-8 px-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white bg-black/70 backdrop-blur-xl px-6 py-4 sm:px-10 sm:py-5 rounded-3xl border border-white/10 shadow-2xl">
                {displayText}
                <span className="ml-2 w-1 h-8 sm:h-12 bg-gradient-to-b from-cyan-400 to-purple-400 inline-block animate-pulse"></span>
              </div>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed px-4">
              Delivering flawless digital experiences through precision testing,
              intelligent automation, and quality-first engineering.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white rounded-full flex items-center gap-3 text-base sm:text-lg font-bold shadow-2xl hover:shadow-cyan-500/50 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Get In Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Luman_Amatya_Resume.pdf"
                download
                className="px-8 py-4 sm:px-10 sm:py-5 bg-black/60 backdrop-blur-xl border border-white/20 text-white rounded-full flex items-center gap-3 text-base sm:text-lg font-bold hover:bg-black/80 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </motion.a>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto px-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-cyan-300 tracking-wider">
                ABOUT ME
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Passionate About
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Quality Engineering
              </span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed text-justify">
                I'm a dedicated QA Automation Engineer specializing in Selenium,
                Playwright, API testing, and CI/CD pipelines. With a strong
                foundation in software testing methodologies, I help teams build
                quality into every stage of development.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed text-justify">
                My approach combines technical expertise with strategic thinking
                to create scalable automation frameworks that accelerate
                delivery while ensuring exceptional software quality.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Test Strategy", desc: "End-to-end testing plans" },
                { title: "Automation", desc: "Selenium/Playwright frameworks" },
                { title: "API Testing", desc: "REST/GraphQL validation" },
                { title: "CI/CD", desc: "Pipeline integration" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-2xl p-4 hover:bg-white/10 transition-all"
                >
                  <h4 className="text-cyan-300 font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto bg-gradient-to-b from-transparent to-black/20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
              <span className="text-sm font-medium text-purple-300 tracking-wider">
                TECHNICAL EXPERTISE
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Skills & Tools
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Modern testing tools and automation frameworks I work with
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: "Selenium", category: "Automation" },
              { name: "Playwright", category: "Automation" },
              { name: "Python", category: "Programming" },
              { name: "Pytest", category: "Testing" },
              { name: "Postman", category: "API Testing" },
              { name: "JIRA", category: "Management" },
              { name: "Git", category: "Version Control" },
              { name: "Jenkins", category: "CI/CD" },
              { name: "SQL", category: "Database" },
              { name: "Appium", category: "Mobile" },
              { name: "Cypress", category: "Automation" },
              { name: "Docker", category: "DevOps" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:border-cyan-500/30 transition-all"
              >
                <div className="text-lg sm:text-xl font-bold text-white mb-2">
                  {skill.name}
                </div>
                <div className="text-xs text-cyan-300 font-medium">
                  {skill.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-cyan-300 tracking-wider">
                PORTFOLIO
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real-world applications of my testing and automation expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "E-commerce Automation Suite",
                tags: ["Selenium", "Python", "Pytest", "CI/CD"],
                desc: "Comprehensive automation framework covering 300+ test cases with 85% coverage for major e-commerce platform.",
                metrics: "300+ Test Cases",
              },
              {
                title: "API Testing Framework",
                tags: ["Postman", "Python", "REST", "Automation"],
                desc: "Complete API testing solution with automated validation, performance testing, and 98% endpoint coverage.",
                metrics: "98% Coverage",
              },
              {
                title: "Weather Prediction Application",
                tags: ["Python", "Streamlit", "Machine Learning", "Data"],
                desc: "ML-powered weather forecasting system achieving 94% prediction accuracy with interactive dashboard.",
                metrics: "94% Accuracy",
              },
              {
                title: "Mobile QA Strategy",
                tags: ["Appium", "Cross-platform", "Performance", "Security"],
                desc: "End-to-end mobile testing strategy ensuring zero critical bugs in production across iOS and Android.",
                metrics: "Zero Critical Bugs",
              },
            ].map((proj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {proj.title}
                  </h3>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">
                    {proj.metrics}
                  </span>
                </div>
                <p className="text-gray-300 mb-6 text-justify leading-relaxed">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            <span className="text-sm font-medium text-purple-300 tracking-wider">
              CONTACT
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed text-justify sm:text-center">
            Ready to improve your software quality? Whether you need automation
            solutions, testing strategy, or quality consultation, I'm here to
            help.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:luman.amatya@example.com"
              className="px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white rounded-full flex items-center justify-center gap-3 text-base sm:text-lg font-bold shadow-2xl hover:shadow-cyan-500/50 transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Email
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Luman_Amatya_Resume.pdf"
              download
              className="px-8 py-4 sm:px-10 sm:py-5 bg-black/60 backdrop-blur-xl border border-white/20 text-white rounded-full flex items-center justify-center gap-3 text-base sm:text-lg font-bold hover:bg-black/80 transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </motion.a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h4 className="font-bold text-white mb-3">Location</h4>
              <p className="text-gray-300">Kathmandu, Nepal</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h4 className="font-bold text-white mb-3">Availability</h4>
              <p className="text-cyan-300">Open to Opportunities</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h4 className="font-bold text-white mb-3">Response Time</h4>
              <p className="text-gray-300">Within 24 hours</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  Luman Amatya
                </span>
                <span className="w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
                <span className="text-sm text-gray-400">QA Specialist</span>
              </div>
              <p className="text-sm text-gray-400">
                Crafting quality through precise testing and automation
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Built with</span>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300">
                  React
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300">
                  Tailwind
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300">
                  Framer Motion
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Luman Amatya. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
