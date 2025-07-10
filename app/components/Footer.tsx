import { ArrowUpRight, Linkedin, FileText, Github } from "lucide-react"
import "./footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-inner">
                        {/* Left Section - Copyright */}
                        <div className="footer-left">
                            <span className="copyright">© 2025 - Marla Tumenjargal </span>
                        </div>

                        {/* Center Section - Links */}
                        <div className="footer-center">
                            <a 
                                href="https://www.linkedin.com/in/marla-tumenjargal?original_referer=https%3A%2F%2Fwww.google.com%2F" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                <Linkedin className="footer-icon" />
                                LinkedIn
                            </a>
                            <a 
                                href="https://github.com/marla-tumenjargal" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                <Github className="footer-icon" />
                                Github
                            </a>
                        </div>

                        {/* Right Section - Email */}
                        <div className="footer-right">
                            <a 
                                href="mailto:tumearla@gmail.com" 
                                className="footer-email"
                            >
                                tumearla@gmail.com
                                <ArrowUpRight className="email-arrow" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile Footer Menu - Similar to header mobile menu */}
                <div className="mobile-footer-menu">
                    <div className="mobile-footer-content">
                        <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mobile-footer-link"
                        >
                            <Linkedin className="footer-icon" />
                            LinkedIn
                        </a>
                        <a 
                            href="https://github.com/marlatumenjargal" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mobile-footer-link"
                        >
                            <Github className="footer-icon" />
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}