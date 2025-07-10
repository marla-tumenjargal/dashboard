'use client';

import "./courses.css";

export default function courses() {

  return (
    <div className="courses-container">
      <div className="courses-header">
        <div className="courses-row">
        </div>
        
      </div>
      
      <div className="courses-columns">
        {/* Column 1 */}
        <div className="courses-column">
          <div className="section">
            <p className="courses-name">fall 2025:</p>
            <ul>
              <li><strong>CS61A</strong> — Structure and Interpretation of Computer Programs</li>
              <li><strong>R&C B</strong> — Reading & Composition B</li>
              <li><strong>Math 54</strong> — Linear Algebra and Differential Equations</li>
              <li><strong>ESPM 50AC</strong> — Intro to Culture and Natural Resource Management (AC + Breadth)</li>
            </ul>
          </div>
        </div>
      </div>


      
    </div>
  );
}