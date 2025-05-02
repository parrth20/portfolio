"use client"

import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com/in/parrth20" },
    { name: "GitHub", icon: <Github className="h-5 w-5" />, url: "https://github.com/parrth20" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com/parrth20" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, url: "https://x.com/parrth18" },
    { name: "Email", icon: <Mail className="h-5 w-5" />, url: "mailto:parthbandwal3@gmail.com" },
  ]

  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Parth Bandwal. All rights reserved.</p>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-zinc-800 p-2 text-gray-400 hover:bg-orange-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
