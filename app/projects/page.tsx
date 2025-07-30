'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import './projects.css';

export default function ProjectsPage() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/intellect.jpg', '/intellect2.jpg'];

  const handleBackClick = () => {
    router.push('/');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="projects-page">

      <div className="projects-main-container">
        <div className="projects-item">
          <div className="projects-content">
            <div className="projects-header">
              <img src="/intellect-logo.jpg" alt="Intellect Logo" className="projects-logo" />
              <h2 className="projects-title">intellect</h2>
              <span className="projects-year">2023 [closed]</span>
            </div>

            <div className="projects-main-content">
              <div className="projects-left-content">
                <p className="projects-description">
                  intellect delivers AI-powered learning, anywhere. We connect students to AI-powered coursework and
                  lectures—all in one seamless platform. Built in collaboration for Mongolian national educators.
                </p>
              </div>

              <div className="projects-details-grid">
                <div className="projects-detail-section">
                  <h3 className="projects-detail-title">dimensions</h3>
                  <p className="projects-detail-content">
                    Width: iOS<br />
                    Height: 1k+ downloads<br />
                    Awards: 2022 Congressional App Challenge
                    ∙ Yeti Educational Academy (Ulaanbaatar)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-image-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="IntellectX Project"
                className={`projects-image ${index === currentImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}