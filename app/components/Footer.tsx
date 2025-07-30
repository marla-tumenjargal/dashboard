import { ArrowUpRight, Linkedin, FileText, Github } from "lucide-react"
import Image from "next/image"
import "./footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-inner">
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
                    
                    {/* Signature below the line */}
                    <div className="footer-signature">
                        <Image
                            src="/signature3.png"
                            alt="Marla Tumenjargal signature - 2025 (C)"
                            width={200}
                            height={50}
                            className="object-contain"
                        />
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