'use client'

import "./hero.css";

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-header">
                <p className="hero-name">✿</p>
                <p className="hero-name">marla tumenjargal</p>
                <p className="hero-location">salt lake city // sf</p>
            </div>

            <div className="hero-columns">
                <div className="hero-column">
                    <div className="section">
                        <p className="section-title">building</p>
                        <ul>
                            <li>eikon (a for fun café journaling app :D)</li>
                        </ul>
                    </div>

                    <div className="section">
                        <p className="section-title">research</p>
                        <ul>
                            <li>(ongoing)</li>
                        </ul>
                    </div>

                    <div className="section">
                        <p className="section-title">thinking about</p>
                        <ul>
                            <li>interpretability in multimodal LLMs</li>
                            <li>techno-optimism (is AI a slippery slope?)</li>
                        </ul>
                    </div>
                </div>

                <div className="hero-column">
                    <div className="section">
                        <p className="section-title">currently</p>
                        <ul>
                            <li>tuning into the nyt's hard fork podcast & lex fridman</li>
                            <li>ux design(ing)</li>
                            <li>choreographing hip-hop (all yours by normani)</li>
                            <li>listening to ariana's 'eternal sunshine'</li>
                        </ul>
                    </div>

                    <div className="section">
                        <p className="section-title">reading</p>
                        <ul>
                            <li>the alignment problem (human values & machine learning) by brian christian</li>
                        </ul>
                    </div>
                </div>
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
