"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Clock, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Image from "next/image"
import SimpleFooter from "@/components/simple-footer"

export default function CoursesPage() {
  const courses = [
    {
      title: "Primary Education (Classes 1-5)",
      description: "Foundation building with focus on basic concepts in all subjects",
      price: "₹2,500",
      duration: "Monthly",
      features: [
        "All subjects covered",
        "Interactive learning",
        "Regular assessments",
        "Parent-teacher meetings",
        "Study materials included",
      ],
      popular: false,
    },
    {
      title: "Middle School (Classes 6-8)",
      description: "Comprehensive curriculum covering CBSE, ICSE, and State boards",
      price: "₹3,500",
      duration: "Monthly",
      features: [
        "Subject-wise expert teachers",
        "Concept clarity sessions",
        "Regular practice tests",
        "Doubt clearing sessions",
        "Progress tracking",
      ],
      popular: true,
    },
    {
      title: "Secondary Education (Classes 9-10)",
      description: "Board exam preparation with intensive coaching",
      price: "₹4,500",
      duration: "Monthly",
      features: [
        "Board exam focused curriculum",
        "Previous year papers",
        "Mock tests",
        "Individual attention",
        "Career guidance",
      ],
      popular: false,
    },
    {
      title: "Higher Secondary (Classes 11-12)",
      description: "Advanced learning for Science, Commerce, and Arts streams",
      price: "₹5,500",
      duration: "Monthly",
      features: [
        "Stream-specific coaching",
        "Competitive exam preparation",
        "College admission guidance",
        "Practical sessions",
        "Industry exposure",
      ],
      popular: false,
    },
    {
      title: "Competitive Exam Preparation",
      description: "JEE, NEET, and other competitive exam coaching",
      price: "₹7,500",
      duration: "Monthly",
      features: [
        "Expert faculty",
        "Comprehensive study material",
        "Regular mock tests",
        "Performance analysis",
        "Scholarship opportunities",
      ],
      popular: true,
    },
    {
      title: "Skill Development Program",
      description: "Technical and soft skills training for employment readiness",
      price: "₹4,000",
      duration: "Monthly",
      features: [
        "Industry-relevant skills",
        "Hands-on training",
        "Certification courses",
        "Job placement assistance",
        "Internship opportunities",
      ],
      popular: false,
    },
  ]
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/students-learning.png"
              alt="Students learning together with laptops"
              fill
              className="object-cover hero-image"
            />
            <div className="absolute inset-0 bg-white/85 dark:bg-slate-900/90" />
            <div className="absolute inset-0 hero-pattern" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
              
            >
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">
                OUR COURSES
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Choose from our comprehensive range of courses designed to excel in academics and beyond
              </p>
            </motion.div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  {course.popular && (
                    <Badge className="absolute -top-2 left-4 z-10 bg-primary text-white shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                  <Card
                    className={`bg-white dark:bg-slate-900 border-0 hover:border-primary/50 transition-all duration-300 h-full shadow-lg hover:shadow-2xl ${course.popular ? "ring-2 ring-primary/20" : ""}`}
                  >
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-900 dark:text-white mb-2">{course.title}</CardTitle>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{course.description}</p>
                      <div className="flex items-center justify-between mt-4">
                        <div>
                          <span className="text-3xl font-black text-primary">{course.price}</span>
                          <span className="text-slate-500 dark:text-slate-400 ml-2">/{course.duration}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-slate-700 dark:text-slate-300">
                            <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full gradient-primary text-white font-bold hover:scale-105">
                        Enroll Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-black text-center mb-16 text-slate-900 dark:text-white"
            >
              Why Choose Our Courses?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Flexible Timing",
                  description: "Choose your preferred time slots that fit your schedule",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Users,
                  title: "Expert Faculty",
                  description: "Learn from experienced and qualified teachers",
                  color: "from-indigo-500 to-indigo-600",
                },
                {
                  icon: Star,
                  title: "Proven Results",
                  description: "Track record of excellent academic performance",
                  color: "from-purple-500 to-purple-600",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  className="text-center"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <SimpleFooter />
    </div>
  )
}
