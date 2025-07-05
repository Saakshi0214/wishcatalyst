"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import SimpleFooter from "@/components/simple-footer"
import Image from "next/image"
import { useState, ChangeEvent, FormEvent } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formDataToSubmit = new FormData()
    formDataToSubmit.append("access_key", "10add910-3e50-459d-9f94-75ab1ad31ffe")
    formDataToSubmit.append("name", `${formData.firstName} ${formData.lastName}`)
    formDataToSubmit.append("email", formData.email)
    formDataToSubmit.append("phone", formData.phone)
    formDataToSubmit.append("subject", formData.subject)
    formDataToSubmit.append("message", formData.message)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/contact-us.png"
              alt="Contact us - hand pointing to contact icons"
              fill
              className="object-cover image-blend"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/95 via-indigo-50/90 to-purple-50/95 dark:from-slate-800/90 dark:via-blue-900/85 dark:to-indigo-900/90" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 dark:from-blue-300 dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
                Get in touch with us to start your learning journey or for any inquiries
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white dark:bg-slate-700 border-blue-200 dark:border-blue-600 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-700 dark:text-blue-300">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              placeholder="Enter your first name"
                              className="bg-blue-50 dark:bg-slate-600 border-blue-300 dark:border-blue-500 text-foreground focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              placeholder="Enter your last name"
                              className="bg-blue-50 dark:bg-slate-600 border-blue-300 dark:border-blue-500 text-foreground focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="bg-blue-50 dark:bg-slate-600 border-blue-300 dark:border-blue-500 text-foreground focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            className="bg-blue-50 dark:bg-slate-600 border-blue-300 dark:border-blue-500 text-foreground focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Enter subject"
                            className="bg-blue-50 dark:bg-slate-600 border-blue-300 dark:border-blue-500 text-foreground focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Enter your message"
                            rows={5}
                            className="bg-blue-50 dark:bg-slate-600 border-blue-300 dark:border-blue-500 text-foreground focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>

                        {submitStatus === "success" && (
                          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                            <p className="text-green-700 dark:text-green-400 font-medium">
                              Thank you! Your message has been sent successfully.
                            </p>
                          </div>
                        )}

                        {submitStatus === "error" && (
                          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                            <p className="text-red-700 dark:text-red-400 font-medium">
                              Sorry, there was an error sending your message. Please try again.
                            </p>
                          </div>
                        )}

                        <Button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information with Collaboration Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Collaboration Image */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl mb-8">
                  <Image
                    src="/collaboration.png"
                    alt="Team collaboration and learning"
                    width={600}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">Get in Touch</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    We're here to help you with any questions about our courses, tutoring services, or educational
                    programs.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      content: "wishcatalyst@gmail.com",
                      description: "Send us an email anytime",
                      color: "bg-gradient-to-r from-red-500 to-pink-500",
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      content: "+91 9123644729",
                      description: "Call us during business hours",
                      color: "bg-gradient-to-r from-green-500 to-emerald-500",
                    },
                    {
                      icon: MapPin,
                      title: "Location",
                      content: "West Bengal, India",
                      description: "Serving across West Bengal",
                      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      content: "Mon - Sat: 9AM - 8PM",
                      description: "Sunday: 10AM - 6PM",
                      color: "bg-gradient-to-r from-purple-500 to-indigo-500",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className={`${item.color} p-3 rounded-lg shadow-lg`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{item.content}</p>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Survey Link */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-600 dark:to-blue-800 p-6 rounded-lg border border-blue-200 dark:border-blue-500 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">Help Us Improve</h3>
                  <p className="text-muted-foreground mb-4">
                    Your feedback is valuable to us. Please take a moment to fill out our survey.
                  </p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:scale-105 shadow-lg"
                  >
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSc4hkNeJzYmlSuC5ppSeQlDf4Cqkf4ojLNtsm23adUxIB9TqA/viewform?usp=dialog"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Take Survey
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <SimpleFooter />
    </div>
  )
}