"use client"
import Image from 'next/image'
import { Github } from 'lucide-react'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section id="projects" className="py-20"> 
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-900 rounded-lg shadow-md overflow-hidden h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
      <div className="relative aspect-video w-full">
  <Image
    src="/your-soccer-game-image.png"
    alt="Interactive Soccer Game"
    fill
    className="object-contain"
    sizes="(max-width: 768px) 100vw, 50vw"
    priority
  />
</div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white">Interactive Soccer Game</h3>
                <a
                  href="#about"
                  className="flex items-center gap-2 text-blue-400 hover:underline"
                >
                  View Demo
                </a>
              </div>
              <p className="text-gray-400 mb-6">
                An interactive soccer game built with React and HTML5 Canvas. This project demonstrates my skills in front-end development, game logic implementation, and creating engaging user experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-900 text-blue-200 px-4 py-2 rounded-full text-sm">React</span>
                <span className="bg-blue-900 text-blue-200 px-4 py-2 rounded-full text-sm">HTML5 Canvas</span>
                <span className="bg-blue-900 text-blue-200 px-4 py-2 rounded-full text-sm">JavaScript</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-900 rounded-lg shadow-md overflow-hidden h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
       <div className="relative aspect-video w-full">
  <Image
    src="/lionlink-image.png"
    alt="LionLink Project"
    fill
    className="object-contain"
    sizes="(max-width: 768px) 100vw, 50vw"
    priority
  />
</div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white">LionLink</h3>
                <a
                  href="https://github.com/Majd2217/LionLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              </div>
              <p className="text-gray-400 mb-6">
                A project developed during Hackathon 2024 using JavaScript. LionLink is designed to help students connect and collaborate on projects.
</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-900 text-blue-200 px-4 py-2 rounded-full text-sm">JavaScript</span>
                <span className="bg-blue-900 text-blue-200 px-4 py-2 rounded-full text-sm">React</span>
                <span className="bg-blue-900 text-blue-200 px-4 py-2 rounded-full text-sm">Node.js</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects