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
                        className="hero-sample-image"
                        data-hover-src="/activeprojectsfolder.jpg"
                        onMouseEnter={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.src = img.dataset.hoverSrc || "/activeprojectsfolder.jpg";
                        }}
                        onMouseLeave={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.src = "/projectsfolder.jpg";
                        }}
                    />
                </div>
                <div className="hero-image-wrapper">
                    <img
                        src="/uifolder.jpg"
                        alt="UI folder"
                        className="hero-sample-image"
                        data-hover-src="/activeuifolder.jpg"
                        onMouseEnter={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.src = img.dataset.hoverSrc || "/activeuifolder.jpg";
                        }}
                        onMouseLeave={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.src = "/uifolder.jpg";
                        }}
                    />
                </div>
                <div className="hero-image-wrapper">
                    <img
                        src="/writingfolder.jpg"
                        alt="writing folder"
                        className="hero-sample-image"
                        data-hover-src="/activewritingfolder.jpg"
                        onMouseEnter={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.src = img.dataset.hoverSrc || "/activewritingfolder.jpg";
                        }}
                        onMouseLeave={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.src = "/writingfolder.jpg";
                        }}
                    />
                </div>
            </div>
        </div>
    );
}