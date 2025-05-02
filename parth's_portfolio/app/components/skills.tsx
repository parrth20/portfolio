"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["C/C++", "JavaScript", "TypeScript", "Solidity", "Rust", "Java", "Dart"],
    },
    {
      name: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Vue", "Angular", "HTML/CSS"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "Django", "Flask", "FastAPI"],
    },
    {
      name: "Blockchain",
      skills: ["Solana", "Ethereum", "Web3.js", "Smart Contracts", "DApps"],
    },
    {
      name: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Prisma", "Firebase"],
    },
    {
      name: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Docker", "AWS", "GCP"],
    },
  ]

  return (
    <section className="bg-zinc-800 py-20" id="skills">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center font-serif text-4xl font-bold tracking-tight sm:text-5xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-orange-500">Skills</span>
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-800 p-6 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
            >
              <h3 className="mb-4 text-xl font-serif font-semibold text-orange-400">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-800 border border-zinc-700 px-3 py-1 text-sm text-gray-300 font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
