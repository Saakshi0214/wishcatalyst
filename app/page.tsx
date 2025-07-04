"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Users, Award, MapPin, Star, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import SimpleFooter from "@/components/simple-footer"
import { Poppins } from "next/font/google"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/study-materials.png"
            alt="Students studying with materials and books"
            fill
            className="object-cover hero-image"
            priority
          />
          <div className="absolute inset-0 bg-white/70 dark:bg-slate-900/80" />
          <div className="absolute inset-0 hero-pattern" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black mb-6 text-black dark:text-white tracking-tight"
            // style={{color:'beige'}}
          >
            WISH CATALYST
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-2xl md:text-3xl mb-4 text-primary font-bold"
            // style={{fontFamily:'seasons'}}
          >
            <h3 style={{fontFamily:'seasons'}}>YOUR WISH OUR MOTTO</h3>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-xl mb-12 max-w-3xl mx-auto text-slate-800 dark:text-slate-300 font-medium"
            
          >
            <h3 style={{fontFamily:'unset'}}>Bridging the gap between education and employment through quality home and online tuitions</h3>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="gradient-primary hover:scale-105 text-white font-bold px-8 py-4 text-lg shadow-xl"
              style={{background:'#e6b1df', color:'black'}}
            >
              <Link href="/courses">
                Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white backdrop-blur-sm px-8 py-4 text-lg font-semibold bg-transparent"
              style={{borderColor:'#e6b1df', color:"white"}}
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-black dark:text-white">
              Why Choose Wish Catalyst?
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-400 max-w-2xl mx-auto">
              Experience the perfect blend of traditional teaching excellence and modern educational innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "All Subjects",
                description: "Classes 1-12th covering CBSE, ICSE, ISC, WB and other boards",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Users,
                title: "Expert Tutors",
                description: "Experienced and qualified faculty both male and female",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                icon: Award,
                title: "Quality Education",
                description: "Step-by-step tutoring methodology for all ages",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: MapPin,
                title: "Home & Online",
                description: "Flexible learning at your home or online platform",
                color: "from-cyan-500 to-cyan-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card className="bg-white dark:bg-slate-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{feature.title}</h3>
                    <p className="text-slate-700 dark:text-slate-400 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-primary"  style={{backgroundColor:'#e6b1df'}}>
        <div className="container mx-auto px-4"  style={{backgroundColor:'#e6b1df'}}>
          <div className="grid md:grid-cols-4 gap-8 text-center"  style={{backgroundColor:'#e6b1df'}}>
            {[
              { number: "500+", label: "Happy Students", icon: Users },
              { number: "50+", label: "Expert Tutors", icon: Award },
              { number: "15+", label: "Areas Covered", icon: MapPin },
              { number: "95%", label: "Success Rate", icon: TrendingUp },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="text-white"
                style={{backgroundColor:'#e6b1df'}}
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-90" style={{color:'black'}}/>
                <div className="text-5xl md:text-6xl font-black mb-2">{stat.number}</div>
                <div className="text-xl font-semibold opacity-95">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <Star className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-black dark:text-white">
              Ready to Start Learning?
            </h2>
            <p className="text-xl mb-12 text-slate-700 dark:text-slate-400 max-w-2xl mx-auto">
              Join thousands of students who have transformed their academic journey with us
            </p>
            <Button
              asChild
              size="lg"
              className="gradient-primary hover:scale-105 text-white font-bold px-12 py-6 text-xl shadow-xl"
              style={{backgroundColor:'#facaf4', color:'black', fontFamily:'the seasons'}}
            >
              <Link href="/login">
                Get Started Today <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <SimpleFooter />
    </div>
  )
}
