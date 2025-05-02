import "@/styles/globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Parth Bandwal | Blockchain Developer</title>
        <meta name="description" content="Full Stack Blockchain Developer & IIIT Lucknow Student" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
