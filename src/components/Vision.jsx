import React from 'react';
import './Vision.css';

const Vision = () => {
    return (
        <section id="vision" className="section vision">
            <div className="container vision-container">
                <div className="vision-image-container">
                    <img src="/elements/robot arm.png" alt="Robotic Arm" className="vision-robot-arm" />
                </div>
                <div className="vision-content">
                    <h2>MY <span className="script-text">V </span><span className="script-text2">iSION_</span></h2>
                    <p className="vision-text">
                        To blur the lines between art and automation,  Specializing in autonomous systems, robotics perception, and control loops, <b><i>I design and build intelligent machines that solve complex, real-world problems wrapped in a soulful design.</i></b> I don’t just want to build tools; I want to craft experiences that feel natural to the user while pushing the boundaries of what's technically possible. By uniting the eye of a designer with the mind of a developer, I am dedicated to building a future where innovation is as human, accessible, and beautiful.  <br /><b>I IMAGINE, I PLAN, I BUILD.</b>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Vision;
