"use client"

import { Heart, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function SimpleFooter() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Wish Catalyst</h3>
            <p className="text-slate-300 leading-relaxed">
              Your wish our motto. Quality education for all students with personalized learning experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Courses", href: "/courses" },
                { label: "Progress", href: "/progress" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <Link key={index} href={link.href} className="block text-slate-300 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">+91 9123644729</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-slate-300">wishcatalyst@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-slate-300">West Bengal, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-200 dark:text-slate-400 flex items-center justify-center space-x-2">
            <span>&copy; 2024 Wish Catalyst. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for education</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
