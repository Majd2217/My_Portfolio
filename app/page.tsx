import Header from '@/components/ui/Header'
import Hero from '@/components/ui/Hero'
import About from '@/components/ui/About'
import InteractiveSkills from '@/components/ui/InteractiveSkills'
import Experience from '@/components/ui/Experience'
import Projects from '@/components/ui/Projects'
import Contact from '@/components/ui/Contact'
import Footer from '@/components/ui/Footer'
import MovingBackground from '@/components/ui/MovingBackground'

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[#3E424B] text-white">
      <MovingBackground />
      <div className="relative z-10">
        <Header />
        <main className="flex flex-col">
          <Hero />
          <About />
          <InteractiveSkills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

