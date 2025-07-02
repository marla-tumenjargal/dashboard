import { ArrowUpRight, Linkedin, FileText, Github } from "lucide-react"
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Left Section - Copyright */}
                    <div className="footer-left">
                        <span className="copyright">© 2025 - Marla Tumenjargal</span>
                    </div>

                    {/* Center Section - Links */}
                    <div className="footer-center">
                        <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <Linkedin className="footer-icon" />
                            LinkedIn
                        </a>
                        <a 
                            href="/cv.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <FileText className="footer-icon" />
                            CV
                        </a>
                        <a 
                            href="https://github.com/marlatumenjargal" 
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
                            href="mailto:hello@marla.com" 
                            className="footer-email"
                        >
                            hello@marla.com
                            <ArrowUpRight className="email-arrow" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}