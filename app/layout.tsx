import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Wish Catalyst - Personalized Learning, Real Results",
  description:
    "India's best online tuition platform. Quality home and online tuitions for all classes and competitive exams with personalized learning experiences.",
  keywords: "online tuition, home tuition, CBSE, ICSE, West Bengal, education, tutoring, personalized learning",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}
