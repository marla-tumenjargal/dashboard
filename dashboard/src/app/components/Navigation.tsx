'use client'

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import "./header.css"

// Custom Switch component
const Switch = ({ checked, onCheckedChange, className }: { 
  checked: boolean; 
  onCheckedChange: (checked: boolean) => void; 
  className?: string 
}) => {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={`toggle-switch-button ${checked ? 'checked' : ''} ${className || ''}`}
    >
      <span className={`toggle-switch-thumb ${checked ? 'checked' : ''}`} />
    </button>
  )
}

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { name: "email", href: "/projects", disabled: false },
    { name: "linkedin", href: "/playground" },
    { name: "cv/resume", href: "/writing" },
    { name: "github", href: "/about" },
  ]

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Reset scroll state on pathname change
  useEffect(() => {
    const scrollTop = window.scrollY
    setIsScrolled(scrollTop > 100)
  }, [pathname])

  const handleToggle = (checked: boolean) => {
    if (checked) {
      router.push('/alternatehome')
    } else {
      router.push('/')
    }
  }

  const isToggled = pathname === '/alternatehome'

  // Helper function to check if a nav item is current
  const isCurrentPage = (href: string) => {
    return pathname === href
  }

  return (
    <nav className={`header ${isScrolled ? 'morphed' : ''}`}>
      <div className="nav-container">
        <div className={`glass-container ${isScrolled ? 'morphed' : ''}`}>
          <div className="nav-content">
            <div className="nav-inner">
              {/* Logo - always visible with smooth transition, clickable home link */}
              <Link 
                href="/" 
                className={`avatar-section ${isScrolled ? 'morphed' : ''}`}
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
              >
                <div className={`avatar-container ${isScrolled ? 'morphed' : ''}`}>
                  <img
                    src="/logo.png"
                    alt="Marla Avatar - Home"
                    className={`header-avatar-image ${isScrolled ? 'morphed' : ''} ${isLogoHovered ? 'spinning' : ''}`}
                  />
                </div>
                {!isScrolled && (
                  <div className="name-section">
                    <span className="name-primary">marla</span>
                  </div>
                )}
              </Link>

              {/* Navigation links */}
              {isScrolled ? (
                <div className="morphed-nav">
                  {navItems.map((item) => (
                    item.disabled ? (
                      <span 
                        key={item.name}
                        className="morphed-nav-link disabled"
                        aria-disabled="true"
                      >
                        {item.name}
                      </span>
                    ) : (
                      <Link 
                        key={item.name}
                        href={item.href} 
                        className={`morphed-nav-link ${isCurrentPage(item.href) ? 'current' : ''}`}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                  
                  <div className="morphed-toggle-section">
                    <div 
                      className="toggle-wrapper"
                      onMouseEnter={() => setIsHovering(true)} 
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <Switch 
                        checked={isToggled} 
                        onCheckedChange={handleToggle} 
                        className={`${isToggled ? 'toggle-switch' : ''}`}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* Original layout when at top */
                <>
                  <div className="desktop-nav">
                    {navItems.map((item) => (
                      item.disabled ? (
                        <span
                          key={item.name}
                          className={`nav-link disabled`}
                          aria-disabled="true"
                        >
                          {item.name}
                        </span>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`nav-link ${isCurrentPage(item.href) ? "current" : ""}`}
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </div>

                  {/* Right Section - Toggle Switch */}
                  <div className="right-section">
                    <div className="toggle-container">
                      <div 
                        className="toggle-wrapper"
                        onMouseEnter={() => setIsHovering(true)} 
                        onMouseLeave={() => setIsHovering(false)}
                      >
                        <Switch 
                          checked={isToggled} 
                          onCheckedChange={handleToggle} 
                          className={`${isToggled ? 'toggle-switch' : ''}`}
                        />
                      </div>
                      
                      <span
                        className={`toggle-label ${isHovering ? "visible" : "hidden"} ${isToggled ? "alternate" : ""}`}
                      >
                        {isToggled ? "back home" : "silly stuff"}
                      </span>
                    </div>

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
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {navItems.map((item) => (
                item.disabled ? (
                  <span
                    key={item.name}
                    className="mobile-nav-link disabled"
                    aria-disabled="true"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`mobile-nav-link ${isCurrentPage(item.href) ? 'current' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu on navigation
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <button className="mobile-cta-button">
                {"Let's chat →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}