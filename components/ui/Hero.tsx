"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10">
        <motion.h1 
          className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Majd Haddad
        </motion.h1>
        <motion.p 
          className="text-xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full Stack Developer | Penn State Soccer Club President
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            asChild
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

