"use client"
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-[#2E3238] shadow-md sticky top-0 z-20">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-6">
          <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
          <li><Link href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</Link></li>
          <li><Link href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
          <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

