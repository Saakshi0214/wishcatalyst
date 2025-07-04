"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sun, Moon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "./theme-provider"
import { 
  SignedOut, 
  SignUpButton, 
  SignInButton, 
  UserButton, 
  SignedIn 
} from "@clerk/nextjs"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/progress", label: "Progress" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-border shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/about" className="flex items-center space-x-3 group">
            <Image
              src="/logo.png"
              alt="Wish Catalyst"
              width={50}
              height={50}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xl font-black text-black dark:text-white" style={{fontFamily:'Allura'}}>Wish Catalyst</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-800 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 font-semibold relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-slate-800 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <SignedOut>
              <SignInButton>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold hover:scale-105 shadow-lg">
                  Login
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button className="gradient-primary text-white font-bold hover:scale-105 shadow-lg">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: {
                      width: "40px",
                      height: "40px"
                    }
                  }
                }}
              />
            </SignedIn>
          </div>
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-black dark:text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-slate-800 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 font-semibold text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="text-slate-800 dark:text-slate-300 hover:text-primary dark:hover:text-primary self-start"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <SignedOut>
                  <SignInButton>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold shadow-lg" onClick={() => setIsOpen(false)}>
                      Login
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button className="gradient-primary text-white font-bold shadow-lg" onClick={() => setIsOpen(false)}>
                      Sign Up
                    </Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: {
                          width: "40px",
                          height: "40px"
                        }
                      }
                    }}
                  />
                </SignedIn>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}