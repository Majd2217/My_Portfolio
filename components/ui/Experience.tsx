"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Summer Intern",
    company: "Commonwealth of Pennsylvania - PennDOT",
    location: "Allentown, Pennsylvania",
    period: "May 2024 - August 2024",
    description: "Created Python scripts to automate data processing and generate reports, significantly reducing manual workload. Applied classroom knowledge of data structures, algorithms, and database management to streamline data collection and processing tasks. Contributed to the development of a web-based dashboard for real-time data visualization and monitoring.",
    skills: ["Python", "Data Processing", "Web Development", "Data Visualization", "Automation"]
  },
  {
    title: "Teaching Assistant for Computer Programming",
    company: "Salisbury High School",
    location: "Allentown, Pennsylvania",
    period: "August 2019 - May 2020",
    description: "Assisted students in mastering computer programming concepts through guided lessons and personalized support. Provided feedback on coding assignments and facilitated classroom discussions on software development practices.",
    skills: ["Teaching", "Computer Programming", "Mentoring", "Software Development"]
  }
]

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0)

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-lg mb-4 transition-all ${
                    selectedExperience === index
                      ? 'bg-blue-100 shadow-md'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedExperience(index)}
                >
                  <h3 className="font-semibold">{exp.title}</h3>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                </button>
              ))}
            </div>
            <div className="md:w-2/3">
              <Card>
                <CardHeader>
                  <CardTitle>{experiences[selectedExperience].title}</CardTitle>
                  <CardDescription>
                    {experiences[selectedExperience].company} • {experiences[selectedExperience].location}
                    <br />
                    {experiences[selectedExperience].period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.p
                    key={selectedExperience}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                  >
                    {experiences[selectedExperience].description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experiences[selectedExperience].skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience