"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, Mail, Lock, User, Phone, GraduationCap } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import SimpleFooter from "@/components/simple-footer"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />

      {/* Very Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-gray-100/20 to-gray-200/20 dark:from-slate-600/10 dark:to-slate-700/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-gray-200/15 to-gray-300/15 dark:from-slate-700/10 dark:to-slate-800/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-gray-50/20 to-gray-100/20 dark:from-slate-800/10 dark:to-slate-900/10 rounded-full blur-3xl animate-pulse delay-500" />
        
      </div>

      <div className="pt-20 min-h-screen flex items-center justify-center relative z-10" style={{backgroundColor:'beige'}}>
        <div className="container mx-auto px-4" style={{backgroundColor:'beige'}}>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-md mx-auto"
            
          >
            {/* Header Section */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 dark:from-slate-600 dark:to-slate-700 mb-6 shadow-2xl"
              >
                <GraduationCap className="h-10 w-10 text-white" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl font-black text-black dark:text-white mb-2"
                style={{color:'black'}}
              >
                Welcome Back
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-slate-700 dark:text-slate-400 text-lg"
                style={{color:'#494a4d'}}
              >
                Join your learning journey with us
              </motion.p>
            </div>

            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardContent className="p-8">
                  <Tabs defaultValue="login" className="w-full">
                    {/* White and Gray Sliding Bar */}
                    <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-slate-800 p-1 rounded-xl">
                      <TabsTrigger
                        value="login"
                        className="data-[state=active]:bg-white data-[state=active]:text-gray-800 dark:data-[state=active]:bg-gray-200 dark:data-[state=active]:text-gray-800 data-[state=active]:shadow-md rounded-lg font-semibold transition-all duration-300 text-gray-600 dark:text-gray-400"
                      >
                        Sign In
                      </TabsTrigger>
                      <TabsTrigger
                        value="register"
                        className="data-[state=active]:bg-white data-[state=active]:text-gray-800 dark:data-[state=active]:bg-gray-200 dark:data-[state=active]:text-gray-800 data-[state=active]:shadow-md rounded-lg font-semibold transition-all duration-300 text-gray-600 dark:text-gray-400"
                      >
                        Sign Up
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="space-y-6 mt-8">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="email" className="text-slate-800 dark:text-slate-300 font-semibold">
                          Email Address
                        </Label>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-500 dark:text-slate-400 group-focus-within:text-gray-700 dark:group-focus-within:text-slate-300 transition-colors" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="pl-12 h-12 bg-gray-50 dark:bg-slate-800 border-gray-300 dark:border-slate-600 text-black dark:text-white rounded-xl focus:ring-2 focus:ring-gray-300 dark:focus:ring-slate-500 focus:border-gray-400 dark:focus:border-slate-400 transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="password" className="text-slate-800 dark:text-slate-300 font-semibold">
                          Password
                        </Label>
                        <div className="relative group">
                          <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-500 dark:text-slate-400 group-focus-within:text-gray-700 dark:group-focus-within:text-slate-300 transition-colors" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="pl-12 pr-12 h-12 bg-gray-50 dark:bg-slate-800 border-gray-300 dark:border-slate-600 text-black dark:text-white rounded-xl focus:ring-2 focus:ring-gray-300 dark:focus:ring-slate-500 focus:border-gray-400 dark:focus:border-slate-400 transition-all duration-300"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-slate-300 transition-colors"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center justify-between"
                      >
                        <Link
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-300 font-medium"
                        >
                          Forgot password?
                        </Link>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <Button className="w-full h-12 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 dark:from-slate-600 dark:to-slate-700 dark:hover:from-slate-700 dark:hover:to-slate-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                          Sign In to Your Account
                        </Button>
                      </motion.div>
                    </TabsContent>

                    <TabsContent value="register" className="space-y-6 mt-8">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="fullName" className="text-slate-800 dark:text-slate-300 font-semibold">
                          Full Name
                        </Label>
                        <div className="relative group">
                          <User className="absolute left-4 top-4 h-5 w-5 text-gray-500 dark:text-slate-400 group-focus-within:text-gray-700 dark:group-focus-within:text-slate-300 transition-colors" />
                          <Input
                            id="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            className="pl-12 h-12 bg-gray-50 dark:bg-slate-800 border-gray-300 dark:border-slate-600 text-black dark:text-white rounded-xl focus:ring-2 focus:ring-gray-300 dark:focus:ring-slate-500 focus:border-gray-400 dark:focus:border-slate-400 transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="registerEmail" className="text-slate-800 dark:text-slate-300 font-semibold">
                          Email Address
                        </Label>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-500 dark:text-slate-400 group-focus-within:text-gray-700 dark:group-focus-within:text-slate-300 transition-colors" />
                          <Input
                            id="registerEmail"
                            type="email"
                            placeholder="Enter your email"
                            className="pl-12 h-12 bg-gray-50 dark:bg-slate-800 border-gray-300 dark:border-slate-600 text-black dark:text-white rounded-xl focus:ring-2 focus:ring-gray-300 dark:focus:ring-slate-500 focus:border-gray-400 dark:focus:border-slate-400 transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="phone" className="text-slate-800 dark:text-slate-300 font-semibold">
                          Phone Number
                        </Label>
                        <div className="relative group">
                          <Phone className="absolute left-4 top-4 h-5 w-5 text-gray-500 dark:text-slate-400 group-focus-within:text-gray-700 dark:group-focus-within:text-slate-300 transition-colors" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            className="pl-12 h-12 bg-gray-50 dark:bg-slate-800 border-gray-300 dark:border-slate-600 text-black dark:text-white rounded-xl focus:ring-2 focus:ring-gray-300 dark:focus:ring-slate-500 focus:border-gray-400 dark:focus:border-slate-400 transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="registerPassword" className="text-slate-800 dark:text-slate-300 font-semibold">
                          Password
                        </Label>
                        <div className="relative group">
                          <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-500 dark:text-slate-400 group-focus-within:text-gray-700 dark:group-focus-within:text-slate-300 transition-colors" />
                          <Input
                            id="registerPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            className="pl-12 pr-12 h-12 bg-gray-50 dark:bg-slate-800 border-gray-300 dark:border-slate-600 text-black dark:text-white rounded-xl focus:ring-2 focus:ring-gray-300 dark:focus:ring-slate-500 focus:border-gray-400 dark:focus:border-slate-400 transition-all duration-300"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-slate-300 transition-colors"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="confirmPassword" className="text-slate-800 dark:text-slate-300 font-semibold">
                          Confirm Password
                        </Label>
                        <div className="relative group">
                          <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-500 dark:text-slate-400 group-focus-within:text-gray-700 dark:group-focus-within:text-slate-300 transition-colors" />
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            className="pl-12 pr-12 h-12 bg-gray-50 dark:bg-slate-800 border-gray-300 dark:border-slate-600 text-black dark:text-white rounded-xl focus:ring-2 focus:ring-gray-300 dark:focus:ring-slate-500 focus:border-gray-400 dark:focus:border-slate-400 transition-all duration-300"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-slate-300 transition-colors"
                          >
                            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <Button className="w-full h-12 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 dark:from-slate-600 dark:to-slate-700 dark:hover:from-slate-700 dark:hover:to-slate-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                          Create Your Account
                        </Button>
                      </motion.div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-8"
            >
              <p className="text-slate-700 dark:text-slate-400" style={{color:'black'}}>
                By continuing, you agree to our{" "}
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-300 font-medium"
                  style={{color:'#494a4d'}}
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-300 font-medium"
                  style={{color:'#494a4d'}}
                >
                  Privacy Policy
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <SimpleFooter />
    </div>
  )
}
