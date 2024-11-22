"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const skills = [
 { name: 'JavaScript', color: '#F7DF1E' },
 { name: 'TypeScript', color: '#3178C6' },
 { name: 'React', color: '#61DAFB' },
 { name: 'Node.js', color: '#339933' },
 { name: 'Express', color: '#000000' },
 { name: 'MongoDB', color: '#47A248' },
 { name: 'SQL', color: '#4479A1' },
 { name: 'HTML5', color: '#E34F26' },
 { name: 'CSS3', color: '#1572B6' },
 { name: 'Tailwind CSS', color: '#38B2AC' },
 { name: 'Git', color: '#F05032' },
 { name: 'RESTful APIs', color: '#FF6C37' },
 { name: 'GraphQL', color: '#E10098' },
 { name: 'AWS', color: '#232F3E' },
 { name: 'Docker', color: '#2496ED' },
]

const InteractiveSkills: React.FC = () => {
 const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

 return (
   <div className="py-20">
     <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">Skills</h2>
     <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
       {skills.map((skill) => (
         <motion.div
           key={skill.name}
           className="relative"
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           whileHover={{ scale: 1.1 }}
           onHoverStart={() => setHoveredSkill(skill.name)}
           onHoverEnd={() => setHoveredSkill(null)}
         >
           <div
             className="w-24 h-24 rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer shadow-lg"
             style={{ backgroundColor: skill.color, color: skill.color === '#F7DF1E' ? 'black' : 'white' }}
           >
             {skill.name}
           </div>
           {hoveredSkill === skill.name && (
             <motion.div
               className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 rounded shadow-md"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
             >
               {skill.name}
             </motion.div>
           )}
         </motion.div>
       ))}
     </div>
   </div>
 )
}

export default InteractiveSkills

