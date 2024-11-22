"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("majdhaddad0117@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="max-w-md mx-auto bg-gray-900">
            <CardHeader>
              <CardTitle className="text-white">Majd Haddad</CardTitle>
              <CardDescription className="text-gray-400">Full Stack Developer</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="email" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="email">Email</TabsTrigger>
                  <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
                  <TabsTrigger value="github">GitHub</TabsTrigger>
                </TabsList>
                <TabsContent value="email" className="mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Mail className="mr-2 text-gray-400" />
                      <span className="text-gray-300">majdhaddad0117@gmail.com</span>
                    </div>
                    <Button onClick={copyEmail}>
                      {copied ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="linkedin" className="mt-4">
                  <a 
                    href="https://www.linkedin.com/in/majd-haddad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:underline"
                  >
                    <Linkedin className="mr-2" />
                    linkedin.com/in/majd-haddad
                  </a>
                </TabsContent>
                <TabsContent value="github" className="mt-4">
                  <a 
                    href="https://github.com/Majd2217" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:underline"
                  >
                    <Github className="mr-2" />
                    github.com/Majd2217
                  </a>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

