"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Code, GraduationCap, MapPin } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative py-20 bg-zinc-800" id="about">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center font-serif text-4xl font-bold tracking-tight sm:text-5xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-orange-500">Me</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg font-light leading-relaxed">
              I'm a passionate blockchain developer and tech enthusiast currently pursuing B.Tech at IIIT Lucknow. My
              journey in tech has led me to explore the fascinating world of decentralized applications, where I blend
              creativity with technical expertise to build innovative solutions.
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-orange-600/20 p-2">
                  <GraduationCap className="h-5 w-5 text-orange-500" />
                </div>
                <span className="font-light">B.Tech in Information Technology, IIIT Lucknow</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-orange-600/20 p-2">
                  <MapPin className="h-5 w-5 text-orange-500" />
                </div>
                <span className="font-light">Nagda, Madhya Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-orange-600/20 p-2">
                  <Code className="h-5 w-5 text-orange-500" />
                </div>
                <span className="font-light">Working on Jam UI for JoinMarket & learning Solana</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gradient-to-br from-orange-600/20 to-orange-600/5 p-5 backdrop-blur-sm">
                <h3 className="font-serif text-xl mb-2">Coding</h3>
                <p className="text-sm text-gray-400">
                  1400+ rating on Codeforces, 1600+ on CodeChef with 400+ problems solved
                </p>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-orange-600/20 to-orange-600/5 p-5 backdrop-blur-sm">
                <h3 className="font-serif text-xl mb-2">Blockchain</h3>
                <p className="text-sm text-gray-400">Qualified for Summer of Bitcoin, building on Solana & Ethereum</p>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-orange-600/20 to-orange-600/5 p-5 backdrop-blur-sm">
                <h3 className="font-serif text-xl mb-2">Projects</h3>
                <p className="text-sm text-gray-400">Built QrifyMe, SolVerse, and collaborative whiteboard apps</p>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-orange-600/20 to-orange-600/5 p-5 backdrop-blur-sm">
                <h3 className="font-serif text-xl mb-2">Interests</h3>
                <p className="text-sm text-gray-400">Table tennis enthusiast, exploring Web3 innovations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
