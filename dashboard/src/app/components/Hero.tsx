'use client'

import "./hero.css";

export default function Hero() {
    return (
        <div className="hero-container">
            <p className="hero-text">
                Visual designer with over a decade of experience designing exceptional products for big companies, small businesses and individuals.
            </p>
            <div className="hero-images-container">
                <div className="hero-image-wrapper">
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
                        src="/uifolder.jpg"
                        alt="UI folder"
                        className="hero-sample-image original-image"
                    />
                    <img
                        src="/activeuifolder.jpg"
                        alt="active UI folder"
                        className="hero-sample-image active-image"
                    />
                </div>
                <div className="hero-image-wrapper">
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
    );
}