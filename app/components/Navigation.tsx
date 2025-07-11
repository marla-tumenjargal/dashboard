'use client'

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import styles from "./header.module.css"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)


  const pathname = usePathname()

  const navItems = [
    { name: "linkedin", url: "https://www.linkedin.com/in/marla-tumenjargal?original_referer=https%3A%2F%2Fwww.google.com%2F", disabled: false },
    { name: "github", url: "https://github.com/marla-tumenjargal" },
    { name: "email", url: "mailto:tumearla@gmail.com" },
  ]

  // Scroll detection - but we won't use it to change the layout
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Removed the pathname-dependent useEffect that was resetting scroll state
  // This ensures header styling remains consistent across tab changes

  // Helper function to check if a nav item is current
  const isCurrentPage = (url: string) => {
    // Since these are external links, we don't have "current" pages
    return false
  }

  return (
    <nav className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.glassContainer}>
          <div className={styles.navContent}>
            <div className={styles.navInner}>
              {/* Logo - always visible with name section, clickable home link */}
              <Link 
                href="/" 
                className={styles.avatarSection}
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
              >
                <div className={styles.avatarContainer}>
                  <img
                    src="/logo.png"
                    alt="Marla Avatar - Home"
                    className={`${styles.headerAvatarImage} ${isLogoHovered ? styles.spinning : ''}`}
                  />
                </div>
                <div className={styles.nameSection}>
                  <span className={styles.namePrimary}></span>
                </div>
              </Link>

              {/* Desktop Navigation links - always the same */}
              <div className={styles.desktopNav}>
                {navItems.map((item) => (
                  item.disabled ? (
                    <span
                      key={item.name}
                      className={`${styles.navLink} ${styles.disabled}`}
                      aria-disabled="true"
                    >
                      {item.name}
                    </span>
                  ) : (
                    <button
                      key={item.name}
                      className={styles.navLink}
                      onClick={() => window.open(item.url, '_blank', 'noopener,noreferrer')}
                    >
                      {item.name}
                    </button>
                  )
                ))}
              </div>

              {/* Right Section - Mobile menu button */}
              <div className={styles.rightSection}>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={styles.mobileMenuButton}
                >
                  {isMobileMenuOpen ? (
                    <X className={styles.mobileMenuIcon} />
                  ) : (
                    <Menu className={styles.mobileMenuIcon} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuContent}>
              {navItems.map((item) => (
                item.disabled ? (
                  <span
                    key={item.name}
                    className={`${styles.mobileNavLink} ${styles.disabled}`}
                    aria-disabled="true"
                  >
                    {item.name}
                  </span>
                ) : (
                  <button
                    key={item.name}
                    className={styles.mobileNavLink}
                    onClick={() => {
                      window.open(item.url, '_blank', 'noopener,noreferrer')
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </button>
                )
              ))}
              <button className={styles.mobileCtaButton}>
                {"Let's chat →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}