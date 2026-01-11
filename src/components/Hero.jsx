import React from 'react';
import './Hero.css';

const Hero = () => {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="section hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1>
                        <span className="luxurious-char">C</span><span>REATIVE DEVELOPER</span> <span className="ampersand">&</span> <br />
                        <span className="luxurious-char">V</span><span>IS!ONARY DESiGNER</span>
                    </h1>
                    <p>Building digital experiences that blend aesthetic beauty with technical precision.</p>
                    <div className="hero-buttons">
                        <a href="#work" className="btn" onClick={(e) => handleScroll(e, 'work')}>View Work</a>
                        <a href="#contact" className="btn btn-outline" onClick={(e) => handleScroll(e, 'contact')}>Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
