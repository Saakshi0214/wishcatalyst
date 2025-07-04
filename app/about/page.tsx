"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, BookOpen } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import SimpleFooter from "@/components/simple-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section with About Us Image */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/about-us-hero.png"
              alt="About Us - Modern workspace with geometric patterns"
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
                ABOUT US
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Transforming education through innovative online and home tutoring solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Area of Concern */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/concerns.png"
                  alt="Business concerns illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-4xl font-black mb-8 text-slate-900 dark:text-white">Area of Concern</h2>
                <Card className="bg-slate-50 dark:bg-slate-800 border-0 shadow-xl">
                  <CardContent className="p-8">
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      The challenge in education, employment, and skill development is creating a system that prepares
                      people for the workforce. This means fixing problems like outdated career guidance and mismatched
                      skills. There are also unequal opportunities due to limited access to quality education and
                      training.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-4xl font-black mb-8 text-slate-900 dark:text-white">Our Mission</h2>
                <Card className="bg-white dark:bg-slate-900 border-0 shadow-xl">
                  <CardContent className="p-8">
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                      Create an inclusive system that bridges the gap between education and employment, providing
                      everyone with equal access to quality education, practical skills, and career opportunities to
                      ensure readiness for the workforce.
                    </p>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      Enable skill loans for poor students. "Earn While You Learn" scheme in various universities allow
                      poor students to support themselves.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="order-1 lg:order-2"
              >
                <Image
                  src="/mission.png"
                  alt="Our mission illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/solution.png"
                  alt="Finding the right solution"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-4xl font-black mb-8 text-slate-900 dark:text-white">Our Solution</h2>
                <Card className="bg-slate-50 dark:bg-slate-800 border-0 shadow-xl">
                  <CardContent className="p-8">
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      We are conducting surveys through Google forms to understand problems and develop solutions
                      through our business idea. We focus on upgrading education to meet industry needs and promoting
                      equal access through online platforms and community hubs. Our approach enhances job readiness with
                      both technical and soft skills, bridges the digital divide, and supports lifelong learning. We
                      encourage diversity in hiring and continuous skill development, with data-driven monitoring to
                      ensure effectiveness.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-black text-center mb-16 text-slate-900 dark:text-white"
            >
              Our Values
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "Excellence",
                  description: "Committed to delivering the highest quality education",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Eye,
                  title: "Innovation",
                  description: "Embracing new technologies and teaching methodologies",
                  color: "from-indigo-500 to-indigo-600",
                },
                {
                  icon: Users,
                  title: "Inclusivity",
                  description: "Equal opportunities for all students regardless of background",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: BookOpen,
                  title: "Accessibility",
                  description: "Making quality education available to everyone",
                  color: "from-cyan-500 to-cyan-600",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-white dark:bg-slate-900 border-0 hover:border-primary/50 transition-all duration-300 h-full shadow-lg hover:shadow-2xl">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center`}
                      >
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{value.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
                    </CardContent>
                  </Card>
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
