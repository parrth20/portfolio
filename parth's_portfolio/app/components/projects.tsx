"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "blockchain", "web", "fullstack"]

  const projects = [
    {
      id: 1,
      title: "QrifyMe",
      category: "fullstack",
      description:
        "Digital menu platform transforming traditional menus into modern QR codes, addressing needs of 20+ crore street vendors.",
      tech: "React, Node.js, Express.js, MongoDB, Python, Django, Tailwind CSS",
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/parrth20/QrifyMe",
      year: "2024",
    },
    {
      id: 2,
      title: "SolVerse",
      category: "blockchain",
      description:
        "A sleek Solana-based Web3 dashboard with smooth animations and a modern UI. Integrated Solana Wallet Adapter for secure authentication and transactions.",
      tech: "TypeScript, Next.js, Tailwind, Framer Motion, Solana Web3, Wallet Adapter",
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/parrth20/SolVerse",
      year: "2023",
    },
    {
      id: 3,
      title: "Excalidraw",
      category: "web",
      description:
        "An interactive virtual whiteboard with a natural, hand-drawn sketching experience, adopted by over 300 beta users.",
      tech: "React, TypeScript, Tailwind CSS, WebSocket, Node.js",
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/parrth20/Excalidraw",
      year: "2024",
    },
  ]

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "all" ? true : project.category === selectedCategory,
  )

  return (
    <section className="bg-zinc-900 py-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center font-serif text-4xl font-bold tracking-tight sm:text-5xl">
          My <span className="text-orange-500">Projects</span>
        </h2>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm capitalize ${
                selectedCategory === category ? "bg-orange-600 hover:bg-orange-700" : ""
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden bg-zinc-800 border-zinc-700 h-full flex flex-col hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
                  <CardContent className="p-0 flex-1 flex flex-col">
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-xl font-serif font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 flex-1 font-light">{project.description}</p>

                      <div className="mt-auto">
                        <div className="mb-4">
                          <h4 className="text-xs uppercase text-gray-500 mb-1 tracking-wider">Technologies</h4>
                          <p className="text-xs text-orange-400 font-light">{project.tech}</p>
                        </div>

                        <div className="flex gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm bg-zinc-700 hover:bg-zinc-600 px-3 py-1 rounded-full transition-colors"
                          >
                            <Github className="h-4 w-4" />
                            <span>GitHub</span>
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-1 text-sm bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded-full transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>Demo</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
