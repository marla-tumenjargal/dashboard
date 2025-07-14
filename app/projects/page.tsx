'use client'
import { useRouter } from 'next/navigation';
import './projects.css'; // Import the completely separate CSS file

export default function ProjectsPage() {
    const router = useRouter();

    const handleBackClick = () => {
        router.push('/');
    };

    return (
        <div className="projects-page">
            <button onClick={handleBackClick} className="projects-back-button">
                ← Back
            </button>
            <div className="projects-main-container">
                <div className="projects-item">
                    <div className="projects-item-layout">
                        <img src="/intellect.jpg" alt="IntellectX Project" className="projects-image" />
                        <div className="projects-content">
                            <div className="projects-header">
                                <h2 className="projects-title">IntellectX</h2>
                                <span className="projects-year">2022-2023</span>
                            </div>
                            <p className="projects-description">
                                The IntellectX app embodies a balance between comfort and elegance through its
                                clean, seamless lines. A soft, inviting user design on a sophisticated base offering
                                a casual appearance that also effectively harnesses the flexibility to perform well 
                                for contemporary nomadic learners. Designed for contemporary homes
                                and professional spaces, it creates a productive environment that is both functional and
                                aesthetically refined.
                            </p>
                        </div>
                    </div>
                    <div className="projects-details">
                        <div className="projects-detail-section">
                            <h3 className="projects-detail-title">Technologies</h3>
                            <div className="projects-tags">
                                <span className="projects-tag">Swift</span>
                                <span className="projects-tag">iOS</span>
                                <span className="projects-tag">Firebase</span>
                            </div>
                        </div>
                        <div className="projects-detail-section">
                            <h3 className="projects-detail-title">Dimensions</h3>
                            <p className="projects-detail-content">
                                Length: 12 months<br />
                                Width: Cross-platform<br />
                                Height: 50k+ downloads<br />
                                Weight: 45 MB
                            </p>
                        </div>
                        <div className="projects-detail-section">
                            <h3 className="projects-detail-title">Links</h3>
                            <div className="projects-links">
                                <a href="#" className="projects-link">View Live Project</a>
                                <a href="#" className="projects-link">GitHub Repository</a>
                                <a href="#" className="projects-link">Case Study</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-item">
                    <div className="projects-item-layout">
                        <img src="/intellect.jpg" alt="Another Project" className="projects-image" />
                        <div className="projects-content">
                            <div className="projects-header">
                                <h2 className="projects-title">Eikon Café Game</h2>
                                <span className="projects-year">2024</span>
                            </div>
                            <p className="projects-description">
                                A whimsical café management game that combines cozy aesthetics with engaging gameplay mechanics.
                                Players manage their own virtual café, serving customers, designing interiors, and building
                                relationships in a charming pixel art world.
                            </p>
                        </div>
                    </div>
                    <div className="projects-details">
                        <div className="projects-detail-section">
                            <h3 className="projects-detail-title">Technologies</h3>
                            <div className="projects-tags">
                                <span className="projects-tag">Unity</span>
                                <span className="projects-tag">C#</span>
                                <span className="projects-tag">Pixel Art</span>
                            </div>
                        </div>
                        <div className="projects-detail-section">
                            <h3 className="projects-detail-title">Details</h3>
                            <p className="projects-detail-content">
                                Status: In Development<br />
                                Platform: PC/Mobile<br />
                                Genre: Simulation<br />
                                Team Size: Solo Project
                            </p>
                        </div>
                        <div className="projects-detail-section">
                            <h3 className="projects-detail-title">Links</h3>
                            <div className="projects-links">
                                <a href="#" className="projects-link">Development Blog</a>
                                <a href="#" className="projects-link">Prototype Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}