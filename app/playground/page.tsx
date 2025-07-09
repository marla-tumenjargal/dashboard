'use client';

import "./style.css";
import { ArrowUpRight } from "lucide-react";

export default function page() {
    return (
        <div className="hero-container">
            <div className="hero-header">
                <div className="headshot-wrapper">
                    <img src="/headshot1.JPG" alt="Marla headshot" className="headshot original-headshot" />
                    <img src="/headshot2.jpg" alt="Marla alt headshot" className="headshot hover-headshot" />
                </div>

                <p className="hero-name">marla tumenjargal</p>
                <p className="hero-location">✿ salt lake city // sf</p>

                <div className="hero-bio">
                    <p>
                        hi hi! i’m marla, an undergraduate @ uc berkeley studying <strong>computer science</strong>and (planned) minoring in business. interested in mitigating data bias with AI, computer vision, and democratizing tech for women [as well as UI/UX design & clean code]
                    </p>
                </div>
            </div>

            <div className="hero-columns">
                <div className="hero-column">
                    <div className="section">
                        <p className="section-title">currently i’m:</p>
                        <ul>
                            <li>building <strong>eikon</strong> (a whimsical, for-fun café game)</li>
                            <li>scaling AI/CS education for 3k girls @ stembridgeinc</li>
                            <li>penning my <a href="/writing" className="underline">thoughts</a></li>
                        </ul>
                    </div>

                    <div className="section">
                        <p className="section-title">previously, i was:</p>
                        <ul>
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/1w1xmkq_HoUAaS_-eGr8OWHLERXESeL-e/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="research-link"
                                >
                                    researching bcrypt for secure password storage
                                    <br />
                                    <span>
                                        force attacks <ArrowUpRight className="research-arrow" />
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.congressionalappchallenge.us/22-ut04/"
                                    className="research-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    building iOS tools for nomadic learners @ IntellectX{' '}
                                    <ArrowUpRight className="research-arrow" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://educationusa.state.gov/centers/educationusa-mongolia"
                                    className="research-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    marketing higher ed to 35k+ @ U.S. Embassy in Mongolia's EducationUSA
                                    <ArrowUpRight className="research-arrow" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/mission-math-utah/"
                                    className="research-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    raising $17k for competition math @ Mission Math Utah
                                    <ArrowUpRight className="research-arrow" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <div className="hero-column">
                    <div className="section">
                        <p className="section-title">awards & coverage:</p>
                        <ul>
                            <li>
                                <a
                                    href="https://www.congressionalappchallenge.us/22-ut04/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="research-link"
                                >
                                    <span>
                                        congressional app challenge <ArrowUpRight className="research-arrow" />
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.nationalcyberscholarship.org/ncsf-winners-2024"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="research-link"
                                >
                                    <span>
                                        2024 cyberstart scholar <ArrowUpRight className="research-arrow" />
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.aspirations.org/people/marla-t/1291564"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="research-link"
                                >
                                    <span>
                                        ncwit national honorable mention <ArrowUpRight className="research-arrow" />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    );
}