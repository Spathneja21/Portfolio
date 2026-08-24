import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import Skills from './Skills';
import profilePic from '../assets/shubham.png';
import works from '../data/worksData';
import './AboutPage.css';
import './Contact.css';
import Contact from './Contact';

const designWorks = works.filter((work) => work.category === 'graphic');
const DESIGN_BATCH_SIZE = 6;

const AboutPage = () => {
    const revealRefs = useRef([]);
    const designSentinelRef = useRef(null);
    const [visibleDesignCount, setVisibleDesignCount] = useState(DESIGN_BATCH_SIZE);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const elements = revealRefs.current.filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const addRevealRef = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    // Loads more design images only as the user scrolls near the bottom of the grid
    useEffect(() => {
        const sentinel = designSentinelRef.current;
        if (!sentinel) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleDesignCount((prev) => Math.min(prev + DESIGN_BATCH_SIZE, designWorks.length));
                }
            },
            { rootMargin: '300px' }
        );

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, [visibleDesignCount]);

    return (
        <div className="about-page">
            <Navbar />

            <div className="about-card reveal" ref={addRevealRef}>
                <div className="about-card-text">
                    <span className="about-greeting">नमस्ते again,</span>
                    <h1 className="about-name">My name is shubham</h1>

                    <p className="about-para">
                        Growing up in Haryana, India gave me a strong, grounded foundation—a kind of natural grit that they now channel into building tomorrow's tech.
                    </p>

                    <p className="about-para">
                        Persuing my career as a <em className="about-highlight">Robotics and AI engineer</em>, i am deeply focused on the intricate, analytical world of code and hardware, loving the challenge of making machines think and move. But I've never been someone who fits neatly into a single box. Driven by a lifelong love for art, I balance the precision of engineering with a highly creative streak in graphic design. For me, it's all about exploring different worlds, staying relentlessly curious, and finding that sweet spot where logical code meets human-centered, visual storytelling.
                    </p>

                    <span className="about-dot"></span>
                </div>

                <div className="about-card-image">
                    <img src={profilePic} alt="Shubham Pathneja" />
                </div>
            </div>

            <div className="about-focus reveal" ref={addRevealRef}>
                <p className="about-focus-intro">
                    I am focusing on crafting experience across interactive spaces and objects, with a particular interest in
                </p>

                <img
                    src="/elements/specialization.png"
                    alt="Mobile Robots, Edge Deployment and Computer Vision"
                    className="about-focus-image"
                />
            </div>

            

            
            <Skills />
            <div className="about-design reveal" ref={addRevealRef}>
                <h3 className="about-design-heading">Design & Art</h3>
                <p className="about-design-summary">
                    Beyond robotics and code, I also have a deep love for art and creativity. <br />Graphic design lets me explore a different, more expressive side of myself — here's a look at some of that work.
                </p>

                <p className="about-design-role">
                    I served as the <em className="about-highlight">Head of Designing</em> at the Fine Arts and Photography Society, TIET, where I led the creative direction for the society's visual identity — from event posters and social media content to mentoring a team of designers.
                </p>
                <div className="about-design-grid">
                    {designWorks.slice(0, visibleDesignCount).map((work) => (
                        <div key={work.id} className="about-design-item">
                            <img src={encodeURI(work.src)} alt={work.title} loading="lazy" />
                        </div>
                    ))}
                </div>
                {visibleDesignCount < designWorks.length && (
                    <div ref={designSentinelRef} className="about-design-sentinel" aria-hidden="true" />
                )}
            </div>

            <Contact />
            

            
        </div>
    );
};

export default AboutPage;
