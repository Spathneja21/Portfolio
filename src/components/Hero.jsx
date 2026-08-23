import React from 'react';
import { useLenis } from 'lenis/react';
import './Hero.css';
import profilePic from '../assets/shubham.png';

const Hero = () => {
    const lenis = useLenis();

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        if (lenis) {
            lenis.scrollTo(`#${targetId}`);
        } else {
            // Fallback if Lenis isn't ready
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="home" className="section hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-introduction">
                        <span className="hero-hello">नमस्ते,</span>
                        <h2 className="hero-name-intro">my name is Shubham</h2>
                        <span className="hero-i-am">I am a</span>
                    </div>
                    <h1>
                        <span className="luxurious-char">R</span><span>OBOTICS & AI</span>  <br />
                        <span className="luxurious-char">E</span><span>NGINEER</span>
                    </h1>
                    <p>I build intelligent systems that blend aesthetics with technical precision.</p>
                    <div className="hero-buttons">
                        <a href="#work" className="btn" onClick={(e) => handleScroll(e, 'work')}>View Work</a>
                        <a href="#contact" className="btn btn-outline" onClick={(e) => handleScroll(e, 'contact')}>Contact Me</a>
                        <a href="/elements/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">View Resume</a>
                    </div>
                </div>
                <div className="hero-image-container">
                    <img src={profilePic} alt="Profile" className="hero-profile-pic" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
