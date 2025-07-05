"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, MapPin, BarChart, Handshake, CheckCircle, Clock, Target } from "lucide-react"


export default function ProgressPage() {
  const progressSteps = [
    {
      number: "01",
      title: "Pamphlet Making and Distribution",
      description:
        "Created and distributed informational pamphlets to raise awareness about our educational services across West Bengal communities",
      icon: FileText,
      status: "completed",
      image: "/g.jpeg?height=300&width=400",
      details: "Distributed 5,000+ pamphlets across 20+ locations",
    },
    {
      number: "02",
      title: "Collaborating with NGO",
      description:
        "Partnered with local NGOs to expand our reach and impact in underserved communities, focusing on educational equity",
      icon: Users,
      status: "completed",
      image: "/a.jpeg?height=300&width=400",
      details: "Partnership with 3 major NGOs established",
    },
    {
      number: "03",
      title: "Expanding Our Reach",
      description:
        "Providing home tuitions in different parts of West Bengal to make quality education accessible to all students",
      icon: MapPin,
      status: "in-progress",
      image: "/v.jpeg?height=300&width=400",
      details: "Currently serving 15+ areas with 200+ active students",
    },
    {
      number: "04",
      title: "Conducting Survey for Modifications",
      description:
        "Gathering comprehensive feedback through surveys to improve our services, methodology, and student satisfaction",
      icon: BarChart,
      status: "in-progress",
      image: "/s.jpeg?height=300&width=400",
      details: "500+ responses collected, analysis ongoing",
    },
    {
      number: "05",
      title: "Contacting Other Business Collaborators",
      description:
        "Building strategic partnerships with educational institutions, technology companies, and other businesses",
      icon: Handshake,
      status: "planned",
      image: "/f.jpeg?height=300&width=400",
      details: "Targeting 10+ strategic partnerships",
    },
  ]

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "completed":
        return {
          color: "bg-emerald-500 dark:bg-emerald-400",
          textColor: "text-emerald-700 dark:text-emerald-300",
          bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
          icon: CheckCircle,
          text: "Completed",
        }
      case "in-progress":
        return {
          color: "bg-indigo-500 dark:bg-purple-400",
          textColor: "text-indigo-700 dark:text-purple-300",
          bgColor: "bg-indigo-50 dark:bg-purple-900/20",
          icon: Clock,
          text: "In Progress",
        }
      case "planned":
        return {
          color: "bg-orange-500 dark:bg-orange-400",
          textColor: "text-orange-700 dark:text-orange-300",
          bgColor: "bg-orange-50 dark:bg-orange-900/20",
          icon: Target,
          text: "Planned",
        }
      default:
        return {
          color: "bg-gray-500",
          textColor: "text-gray-700",
          bgColor: "bg-gray-50",
          icon: Clock,
          text: "Unknown",
        }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #3b82f6 100%)'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl md:text-7xl font-black mb-6 text-white drop-shadow-lg">
                Progress Overview
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
                Track our journey as we work towards transforming education and creating opportunities for every student
              </p>
            </motion.div>
          </div>
        </section>

        {/* Progress Timeline */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-purple-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {progressSteps.map((step, index) => {
                const statusConfig = getStatusConfig(step.status)
                const StatusIcon = statusConfig.icon

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="relative mb-20 last:mb-0"
                  >
                    {/* Timeline Line */}
                    {index < progressSteps.length - 1 && (
                      <div className="absolute left-1/2 top-96 w-1 h-20 bg-gradient-to-b from-indigo-300 to-purple-300 dark:from-purple-400 dark:to-orange-400 transform -translate-x-1/2 hidden lg:block" />
                    )}

                    <div
                      className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    >
                      {/* Content Card */}
                      <div className="flex-1 w-full">
                        <Card
                          className={`${statusConfig.bgColor} border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105`}
                        >
                          <CardContent className="p-8">
                            <div className="flex items-center justify-between mb-6">
                              <Badge
                                className={`${statusConfig.color} text-white px-4 py-2 text-sm font-bold flex items-center gap-2`}
                              >
                                <StatusIcon className="w-4 h-4" />
                                {statusConfig.text}
                              </Badge>
                              <span className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-purple-400 dark:to-orange-400 bg-clip-text text-transparent">
                                {step.number}
                              </span>
                            </div>
                            <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-lg">{step.description}</p>
                            <div
                              className={`${statusConfig.textColor} font-semibold text-sm bg-white/50 dark:bg-slate-800/50 px-3 py-2 rounded-lg inline-block`}
                            >
                              {step.details}
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Image/Icon */}
                      <div className="flex-1 w-full">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-slate-800 dark:to-slate-700"
                        >
                          {step.image ? (
                            <div className="w-full h-64 relative">
                              <img
                                src={step.image}
                                alt={step.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                          ) : (
                            <div className="w-full h-64 flex items-center justify-center">
                              <div
                                className={`w-24 h-24 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-purple-500 dark:to-orange-500 flex items-center justify-center shadow-lg`}
                              >
                                <step.icon className="h-12 w-12 text-white" />
                              </div>
                            </div>
                          )}
                          <div className="absolute bottom-4 left-4">
                            <div className="text-white font-bold text-sm bg-black/50 px-3 py-1 rounded-lg">
                              Step {step.number}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Statistics Section - Updated Colors */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-black text-center mb-16 text-white"
            >
              Our Impact So Far
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Students Reached", icon: Users },
                { number: "50+", label: "Expert Tutors", icon: CheckCircle },
                { number: "15+", label: "Areas Covered", icon: MapPin },
                { number: "95%", label: "Success Rate", icon: Target },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center text-white"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all duration-300">
                    <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-90" />
                    <div className="text-5xl md:text-6xl font-black mb-2">{stat.number}</div>
                    <div className="text-xl font-bold opacity-90">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}