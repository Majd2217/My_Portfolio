"use client"
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Majd Haddad. All rights reserved.</p>
          <div className="mt-4">
            <a href="https://github.com/Majd2217" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">GitHub</a>
            <a href="https://linkedin.com/in/majd-haddad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
            <a href="mailto:majdhaddad0117@gmail.com" className="text-gray-400 hover:text-white mx-2">Email</a>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  