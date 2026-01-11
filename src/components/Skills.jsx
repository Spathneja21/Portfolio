import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2>Skills & <span className="script-text">E</span>xpertise_</h2>
                <div className="skills-grid">
                    <div className="skill-card">
                        <h3>AI Development</h3>
                        <ul>
                            <li>Scikit-learn</li>
                            <li>Seaborn</li>
                            <li>Artificial Neural Networks</li>
                            <li>Data Science</li>
                            <li>LSTMs</li>
                        </ul>
                    </div>
                    <div className="skill-card">
                        <h3>Graphic Design</h3>
                        <ul>
                            <li>Adobe Illustrator</li>
                            <li>Adobe Photoshop</li>
                            <li>Affinity</li>
                            <li>Procreate</li>
                        </ul>
                    </div>
                    <div className="skill-card">
                        <h3>Software Development</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>Vite</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
