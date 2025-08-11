'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { ArrowUpRight } from "lucide-react";
import ScrapbookMoment from './ScrapbookMoment';
import './home.css';

export default function HomePage() {
  const [showScrapbook, setShowScrapbook] = useState<boolean>(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleScrapbookComplete = (): void => {
    setShowScrapbook(false);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleProjectsClick = useCallback(() => {
    window.location.href = '/projects';
  }, []);

  const handleWritingClick = useCallback(() => {
    window.location.href = '/writing';
  }, []);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  if (showScrapbook) {
    return <ScrapbookMoment onComplete={handleScrapbookComplete} />;
  }

  return (
    <>
      {isHovering && (
        <div 
          className="custom-cursor"
          style={{
            left: mousePos.x + 10,
            top: mousePos.y - 10,
          }}
        >
          view &gt;
        </div>
      )}

      <div className="background-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          <source src="/flowers.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="text-sm leading-relaxed space-y-4 pl-4 pt-10 font-footer max-w-[650px] mx-auto">
        <p className="text-xs font-light tracking-wide text-gray-500" style={{paddingLeft: 2, marginBottom: 5}}>
          salt lake city // san francisco
        </p>

        <p className="hero-name">
          Marla Tumenjargal
        </p>

        <p>
          hello there! i'm a developer and undergraduate @ uc berkeley studying <strong>computer science</strong> and
          (planned) minor in data science or business (we'll see!). interested in human-centered computing
          & ux design, entrepreneurship, computer vision, and mitigating data bias with AI.
        </p>

        <div>
          <p><strong>currently, i'm:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-0">
            <li>
              taking CS 61A (Structure & Interpretation of Computer Programs),
              Data 94 (Computational Thinking & Social Dynamics), Math 54 (Linear Algebra & Differential Equations), and
              Comparative Literature R1B
            </li>
            <li>working on thoughtpieces (writing) on design, tech, and society</li>
          </ul>
        </div>

        <div>
          <p className="font-medium"><strong>previously, i was:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-0">
          <li>
              <a
                href="https://educationusa.state.gov/centers/educationusa-mongolia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline-link"
              >
                digital marketing analyst for 35k+ @ U.S. Embassy in Mongolia's EducationUSA&nbsp;
                <ArrowUpRight className="email-arrow" />
              </a>
            </li>
            <li>
              <a href="/research_publication.pdf" className="hover-underline-link">
                researching bcrypt for secure password storage&nbsp;
                <ArrowUpRight className="email-arrow" />
              </a>
            </li>
            <li>
              <a href="/projects" className="hover-underline-link">
                building iOS tools for nomadic learners @ IntellectX&nbsp;
                <ArrowUpRight className="email-arrow" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/mission-math-utah/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline-link"
              >
                raising $17k for competition math @ Mission Math Utah&nbsp;
                <ArrowUpRight className="email-arrow" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/stembridge.inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline-link"
              >
                scaling AI/CS education for 3k+ girls @ stembridgeinc&nbsp;
                <ArrowUpRight className="email-arrow" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section className="hero-container mt-20 px-6">
        <div className="hero-row">
          <p>✿ </p>
          <p>&nbsp; view my work ↓</p>
        </div>

        <div className="hero-section">
          <div className="hero-images-container">
            <div
              className="hero-image-wrapper"
              onClick={handleProjectsClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="/projectsfolder.png"
                alt="projects folder"
                className="hero-sample-image original-image"
              />
              <img
                src="/activeprojectsfolder.png"
                alt="active projects folder"
                className="hero-sample-image active-image"
              />
            </div>
            <div 
              className="hero-image-wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="/uifolder.png"
                alt="UI folder"
                className="hero-sample-image original-image"
              />
              <img
                src="/activeuifolder.png"
                alt="active UI folder"
                className="hero-sample-image active-image"
              />
            </div>
            <div
              className="hero-image-wrapper"
              onClick={handleWritingClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="/writingfolder.png"
                alt="writing folder"
                className="hero-sample-image original-image"
              />
              <img
                src="/activewritingfolder.png"
                alt="active writing folder"
                className="hero-sample-image active-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}