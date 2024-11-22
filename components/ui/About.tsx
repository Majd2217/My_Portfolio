"use client"
import { motion } from 'framer-motion'
import InteractiveSoccerField from './InteractiveSoccerField'

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Majd Haddad, a passionate full stack developer and a junior at The Pennsylvania State University. 
              When I'm not coding, you'll find me leading the Penn State Soccer Club. 
              I love creating responsive and user-friendly web applications, solving complex problems, and bringing 
              the same teamwork and strategic thinking from soccer into my development projects.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              My love for soccer isn't just a hobby - it's a source of inspiration for my coding projects. 
              The interactive soccer game you see here, created using React and HTML5 Canvas, 
              showcases my skills in front-end development and game logic implementation.
            </p>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <InteractiveSoccerField />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

