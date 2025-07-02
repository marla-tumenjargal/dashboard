'use client'

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

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

import "./header.css"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { name: "projects", href: "#", disabled: true },
    { name: "garden", href: "#" },
    { name: "writing", href: "#" },
    { name: "about", href: "#" },
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

  const handleToggle = (checked: boolean) => {
    if (checked) {
      router.push('/alternatehome')
    } else {
      router.push('/')
    }
  }

  const isToggled = pathname === '/alternatehome'

  return (
    <header className={`header ${isScrolled ? 'morphed' : ''}`}>
      <nav className="nav-container">
        <div className={`glass-container ${isScrolled ? 'morphed' : ''}`}>
          <div className="nav-content">
            <div className="nav-inner">
              {/* Morphed layout when scrolled */}
              {isScrolled ? (
                <div className="morphed-nav">
                  <a href="#" className="morphed-nav-link disabled">projects</a>
                  <a href="#" className="morphed-nav-link">garden</a>
                  <div className="morphed-avatar-container">
                    <img
                      src="/starfish.png"
                      alt="Marla Avatar"
                      className="morphed-avatar-image"
                    />
                  </div>
                  <a href="#" className="morphed-nav-link">writing</a>
                  <a href="#" className="morphed-nav-link">about</a>
                  
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
                  {/* Left Section - Avatar and Name */}
                  <div className="avatar-section">
                    <div className="avatar-container">
                      <img
                        src="/starfish.png"
                        alt="Marla Avatar"
                        className="header-avatar-image"
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

// 'use client'

// import { useState } from "react"
// import { usePathname, useRouter } from "next/navigation"
// import { Menu, X } from "lucide-react"
// // Custom Switch component since UI library isn't available
// const Switch = ({ checked, onCheckedChange, className }: { 
//   checked: boolean; 
//   onCheckedChange: (checked: boolean) => void; 
//   className?: string 
// }) => {
//   return (
//     <button
//       role="switch"
//       aria-checked={checked}
//       onClick={() => onCheckedChange(!checked)}
//       className={`toggle-switch-button ${checked ? 'checked' : ''} ${className || ''}`}
//     >
//       <span className={`toggle-switch-thumb ${checked ? 'checked' : ''}`} />
//     </button>
//   )
// }
// import "./header.css"

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [isHovering, setIsHovering] = useState(false)

//   const router = useRouter()
//   const pathname = usePathname()

//   const navItems = [
//     { name: "projects", href: "#", disabled: true },
//     { name: "garden", href: "#" },
//     { name: "writing", href: "#" },
//     { name: "about", href: "#" },
//   ]

//   const handleToggle = (checked: boolean) => {
//     if (checked) {
//       router.push('/alternatehome')
//     } else {
//       router.push('/')
//     }
//   }

//   const isToggled = pathname === '/alternatehome'

//   return (
//     <header className="header">
//       <nav className="nav-container">
//         {/* Glass morphism container */}
//         <div className="nav-content">
//           <div className="nav-inner">
//             {/* Left Section - Avatar and Name */}
//             <div className="avatar-section">
//               <div className="avatar-container">
//                 <img
//                   src="/starfish.png"
//                   alt="Marla Avatar"
//                   className="avatar-image"
//                 />
//               </div>
//               <div className="name-section">
//                 <span className="name-primary">marla</span>
//               </div>
//             </div>

//             <div className="desktop-nav">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className={`nav-link ${item.name === "garden" ? "current" : ""} ${item.disabled ? "disabled" : ""}`}
//                   {...(item.disabled && { "aria-disabled": "true" })}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>

//             {/* Right Section - Toggle Switch */}
//             <div className="right-section">
//               <div className="toggle-container">
//                 <div 
//                   className="toggle-wrapper"
//                   onMouseEnter={() => setIsHovering(true)} 
//                   onMouseLeave={() => setIsHovering(false)}
//                 >
//                   <Switch 
//                     checked={isToggled} 
//                     onCheckedChange={handleToggle} 
//                     className={`${isToggled ? 'toggle-switch' : ''}`}
//                   />
//                 </div>
                
//                 <span
//                   className={`toggle-label ${isHovering ? "visible" : "hidden"} ${isToggled ? "alternate" : ""}`}
//                 >
//                   {isToggled ? "back home" : "silly stuff"}
//                 </span>
//               </div>

//               {/* Mobile menu button */}
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="mobile-menu-button"
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="mobile-menu-icon" />
//                 ) : (
//                   <Menu className="mobile-menu-icon" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMobileMenuOpen && (
//           <div className="mobile-menu">
//             <div className="mobile-menu-content">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className={`mobile-nav-link ${item.disabled ? "disabled" : ""}`}
//                   {...(item.disabled && { "aria-disabled": "true" })}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//               <button className="mobile-cta-button">
//                 {"Let's chat →"}
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   )
// }