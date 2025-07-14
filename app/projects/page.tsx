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
                                <h2 className="projects-title">intellect</h2>
                                <span className="projects-year">2023</span>
                            </div>
                            <p className="projects-description">
                            intellect delivers Al-powered learning, anywhere. We connect students to Al-powered coursework and lectures—all in one seamless platform. Built in collaboration for Mongolian national educators.
                            </p>
                            
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
                    </div>
                </div>
            </div>
        </div>
    );
}