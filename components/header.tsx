"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Phone, Mail, ChevronDown, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    {
      label: "Home",
      href: "/",
      hasDropdown: false,
    },
    {
      label: "Tuitions",
      href: "/courses",
      hasDropdown: true,
      dropdownItems: [
        { label: "School Tuitions (1-12)", href: "/courses" },
        { label: "Competitive Exams", href: "/courses" },
        { label: "Home Tuitions", href: "/courses" },
      ],
    },
    {
      label: "Tech Courses",
      href: "/courses",
      hasDropdown: true,
      badge: "New",
      dropdownItems: [
        { label: "Coding Classes", href: "/courses" },
        { label: "Web Development", href: "/courses" },
        { label: "App Development", href: "/courses" },
      ],
    },
    {
      label: "Curricular Activities",
      href: "/progress",
      hasDropdown: true,
      badge: "New",
      dropdownItems: [
        { label: "Art & Craft", href: "/progress" },
        { label: "Music Classes", href: "/progress" },
        { label: "Dance Classes", href: "/progress" },
      ],
    },
    {
      label: "Language",
      href: "/courses",
      hasDropdown: true,
      badge: "New",
      dropdownItems: [
        { label: "English Speaking", href: "/courses" },
        { label: "Hindi Classes", href: "/courses" },
        { label: "Bengali Classes", href: "/courses" },
      ],
    },
    {
      label: "Crack Exam",
      href: "/courses",
      hasDropdown: true,
      badge: "New",
      dropdownItems: [
        { label: "JEE Preparation", href: "/courses" },
        { label: "NEET Preparation", href: "/courses" },
        { label: "Board Exams", href: "/courses" },
      ],
    },
    {
      label: "Teachers",
      href: "/about",
      hasDropdown: false,
    },
    {
      label: "More",
      href: "/contact",
      hasDropdown: true,
      dropdownItems: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Progress", href: "/progress" },
      ],
    },
  ]

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Contact Bar */}
      <div className="bg-gray-50 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="font-medium">Talk with us</span>
                <span className="text-blue-600 font-semibold">+91 9311653688</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4 text-red-500" />
                <span className="font-medium">Mail us</span>
                <span className="text-blue-600 font-semibold">education@e-tuitions.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-gray-500" />
              <Link href="/login" className="text-gray-600 hover:text-blue-600 font-medium">
                Student Registration | Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Wish Catalyst" width={120} height={40} className="h-10 w-auto"/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative">
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors relative">
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                        <DropdownMenuItem key={dropdownIndex} asChild>
                          <Link href={dropdownItem.href} className="w-full">
                            {dropdownItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors relative"
                  >
                    {item.label}
                    {item.badge && (
                      <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">{item.badge}</span>
                      )}
                    </Link>
                    {item.hasDropdown && item.dropdownItems && (
                      <div className="ml-4 space-y-2">
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
