"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Home, Info, Mail, Star } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Sobre", href: "#about", icon: Info },
  { name: "Consultoria", href: "#services", icon: Star },
  { name: "Preços", href: "#contact", icon: Mail },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      {/* Top navigation for larger screens */}
      <div className="h-0 sm:h-auto hidden sm:block border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-2xl font-bold" onClick={(e) => handleClick(e, "#home")}>
              Logo
            </a>
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation for mobile */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 border-t bg-background">
        <div className="grid grid-cols-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`flex flex-col items-center justify-center h-16 ${
                activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

