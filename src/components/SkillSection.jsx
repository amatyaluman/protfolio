import { motion } from "framer-motion";
export default function SkillSection() {
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
    <div className="flex flex-wrap gap-3">
      {skills.map((s, i) => (
        <motion.span
          key={s}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.03 }}
          whileHover={{ scale: 1.06, y: -3 }}
          className="px-3 py-2 bg-white/70 backdrop-blur rounded-full text-purple-700 font-medium border border-purple-100/40 shadow-sm"
        >
          {s}
        </motion.span>
      ))}
    </div>
  );
}
