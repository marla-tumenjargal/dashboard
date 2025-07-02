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
                            <span className="copyright">© 2025 - marla (made with love </span>
                        </div>

                        {/* Center Section - Links (Desktop only) */}
                        <div className="footer-center">
                            <a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                <Linkedin className="footer-icon" />
                            </a>
                            <a 
                                href="/cv.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                <FileText className="footer-icon" />
                            </a>
                            <a 
                                href="https://github.com/marlatumenjargal" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                <Github className="footer-icon" />
                            </a>
                        </div>

                        {/* Right Section - Email */}
                        <div className="footer-right">
                            <a 
                                href="mailto:hello@marla.com" 
                                className="footer-email"
                            >
                                hello@marla.com
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
                            href="/cv.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mobile-footer-link"
                        >
                            <FileText className="footer-icon" />
                            CV
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