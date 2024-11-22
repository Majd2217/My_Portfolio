import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Majd Haddad - Full Stack Developer',
  description: 'Full Stack Developer & Junior at Penn State University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#3E424B] text-white`}>{children}</body>
    </html>
  )
}

