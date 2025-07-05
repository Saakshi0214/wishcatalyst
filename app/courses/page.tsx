"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Clock, Users } from "lucide-react"

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.2),transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-6 text-slate-900 dark:text-white tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              OUR COURSES
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Choose from our comprehensive range of courses designed to excel in academics and beyond
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group"
              >
                {course.popular && (
                  <Badge className="absolute -top-2 left-4 z-10 bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg border-0">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                <Card
                  className={`bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-0 transition-all duration-300 h-full shadow-lg hover:shadow-2xl group-hover:shadow-purple-500/20 ${
                    course.popular ? "ring-2 ring-purple-500/30" : ""
                  }`}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-slate-900 dark:text-white mb-2 font-bold">
                      {course.title}
                    </CardTitle>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <span className="text-3xl font-black" style={{color: 'beige'}}>
                          {course.price}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 ml-2 text-sm">
                          /{course.duration}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {course.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                          className="flex items-center text-slate-700 dark:text-slate-300 text-sm"
                        >
                          <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{background:'#e6b1df', color:'black'}}
                    >
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
      <section className="py-20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
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
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
  
}