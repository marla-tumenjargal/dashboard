'use client';

import "./hero.css";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-header">

                <p className="hero-name">✿ </p>
                <p className="hero-name">marla tumenjargal</p>
                <p className="hero-location">salt lake city // sf</p>
                <p className="hero-secondary">designer, developer, and an undergraduate @ uc berkeley studying <strong>computer science</strong></p>

            </div>

            <div className="hero-images-container">
                <div className="hero-image-wrapper">
                    <img src="/projectsfolder.jpg" alt="projects folder" className="hero-sample-image original-image" />
                    <img src="/activeprojectsfolder.jpg" alt="active projects folder" className="hero-sample-image active-image" />
                </div>
                <div className="hero-image-wrapper">
                    <img src="/uifolder.jpg" alt="UI folder" className="hero-sample-image original-image" />
                    <img src="/activeuifolder.jpg" alt="active UI folder" className="hero-sample-image active-image" />
                </div>
                <div className="hero-image-wrapper">
                    <img src="/writingfolder.jpg" alt="writing folder" className="hero-sample-image original-image" />
                    <img src="/activewritingfolder.jpg" alt="active writing folder" className="hero-sample-image active-image" />
                </div>
            </div>
        </div>
    );
}