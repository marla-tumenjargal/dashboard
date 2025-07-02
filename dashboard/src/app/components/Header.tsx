'use client'

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import "./header.css"
import logo from '@/public/starfish.png'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { name: "projects", href: "#", disabled: true },
    { name: "garden", href: "#" },
    { name: "connect", href: "#" },
    { name: "about", href: "#" },
  ]

  const handleToggle = () => {
    if (pathname === '/alternatehome') {
      router.push('/')
    } else {
      router.push('/alternatehome')
    }
  }

  return (
    <header className="header">
      <nav className="nav-container">
        {/* Glass morphism container */}
        <div className="nav-content">
          <div className="nav-inner">
            {/* Left Section - Avatar and Name */}
            <div className="avatar-section">
              <div className="avatar-container">
                <img
                  src="/starfish.png"
                  alt="Marla Avatar"
                  className="avatar-image"
                />
              </div>
              <div className="name-section">
                <span className="name-primary">marla</span>
              </div>
            </div>

            <div className="desktop-nav">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${item.name === "garden" ? "current" : ""} ${item.disabled ? "disabled" : ""}`}
                  {...(item.disabled && { "aria-disabled": "true" })}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right Section - CTA + Toggle Button */}
            <div className="right-section">
              <button className="silly-toggle-button" onClick={handleToggle}>
                silly stuff
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="mobile-menu-button"
              >
                {isMobileMenuOpen ? (
                  <X className="mobile-menu-icon" />
                ) : (
                  <Menu className="mobile-menu-icon" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`mobile-nav-link ${item.disabled ? "disabled" : ""}`}
                  {...(item.disabled && { "aria-disabled": "true" })}
                >
                  {item.name}
                </a>
              ))}
              <button className="mobile-cta-button">
                {"Let's chat →"}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
