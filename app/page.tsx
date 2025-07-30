"use client";

import { useCallback } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  const handleProjectsClick = useCallback(() => {
    window.location.href = '/projects';
  }, []);

  const handleWritingClick = useCallback(() => {
    window.location.href = '/writing';
  }, []);

  return (
    <>
      {/* Bio tex  container */}
      <div className="text-sm leading-relaxed space-y-4 pl-4 pt-10 font-footer max-w-[650px] mx-auto">
        <p className="text-xs font-light tracking-wide text-gray-600">
          salt lake city // san francisco
        </p>

        <p className="font-medium text-base">
          Marla Tumenjargal
        </p>

        <p>
          developer and undergraduate @ uc berkeley studying computer science and
          (planned) minor in data science. interested in human-centered computing
          & design, computer vision, and mitigating data bias with AI.
        </p>

        <div>
          <p className="font-medium">currently, i’m:</p>
          <ul className="list-disc list-inside space-y-1 ml-0">
            <li>
              taking CS 61A (Structure & Interpretation of Computer Programs),
              Data 94 (Computational Thinking & Social Dynamics), Math 54, and
              Comparative Literature R1B
            </li>
            <li>working on [some sort of data and machine learning related project]</li>
            <li>penning my thoughts on tech, design, and society</li>
            <li>looking for opportunities at cal</li>
          </ul>
        </div>

        <div>
          <p className="font-medium">previously, i was:</p>
          <ul className="list-disc list-inside space-y-1 ml-0">
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
                href="https://educationusa.state.gov/centers/educationusa-mongolia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline-link"
              >
                marketing intern for 35k+ @ U.S. Embassy in Mongolia&apos;s EducationUSA&nbsp;
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
          </ul>
        </div>
      </div>

      {/* Separate hero section container */}
      <section className="hero-container mt-20 px-6">

        <div className="hero-row">
          <p>✿ </p>
          <p> view my work ↓</p>
        </div>

        <div className="hero-section">
            
          <div className="hero-images-container">
            <div
              className="hero-image-wrapper"
              onClick={handleProjectsClick}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="/projectsfolder.jpg"
                alt="projects folder"
                className="hero-sample-image original-image"
              />
              <img
                src="/activeprojectsfolder.jpg"
                alt="active projects folder"
                className="hero-sample-image active-image"
              />
            </div>
            <div className="hero-image-wrapper">
              <img
                src="/uifolder.png"
                alt="UI folder"
                className="hero-sample-image original-image"
              />
              <img
                src="/activeuifolder.jpg"
                alt="active UI folder"
                className="hero-sample-image active-image"
              />
            </div>
            <div
              className="hero-image-wrapper"
              onClick={handleWritingClick}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="/writingfolder.jpg"
                alt="writing folder"
                className="hero-sample-image original-image"
              />
              <img
                src="/activewritingfolder.jpg"
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


// // app/page.js
// import { redirect } from 'next/navigation';

// export default function HomePage() {
//   redirect('/bio');
// }