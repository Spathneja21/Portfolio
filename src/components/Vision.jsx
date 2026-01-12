import React from 'react';
import './Vision.css';

const Vision = () => {
    return (
        <section id="vision" className="section vision">
            <div className="container vision-container">
                <div className="vision-content">
                    <h2>MY <span className="script-text">V </span><span className="script-text2">iSION_</span></h2>
                    <p className="vision-text">
                        My vision is to blur the lines between art and automation, creating digital environments where sophisticated AI and robust software are wrapped in a soulful design. I don’t just want to build tools; I want to craft experiences that feel natural to the user while pushing the boundaries of what's technically possible. By uniting the eye of a designer with the mind of a developer, I am dedicated to building a future where innovation is as human, accessible, and beautiful.
                    </p>
                </div>
                <div className="vision-decorative">
                    <div className="vision-circle"></div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
