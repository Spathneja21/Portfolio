import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import './Preloader.css';

const Preloader = ({ finishLoading }) => {
    const [count, setCount] = useState(0);
    const preloaderRef = useRef(null);
    const contentRef = useRef(null);
    const taglines = ["IMAGINE", "DESIGN", "BUILD", "SCALE"];
    // Perfectly sync tagline with progress: 0-25 (IMAGINE), 25-50 (DESIGN), 50-75 (BUILD), 75-100 (SCALE)
    const taglineIndex = Math.min(Math.floor(count / 25), taglines.length - 1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 30); // 3 seconds total loading time

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (count === 100) {
            const tl = gsap.timeline();

            // Brief pause at 100% so users can see the last tagline
            tl.to({}, { duration: 0.4 })
                .to(contentRef.current, {
                    opacity: 0,
                    y: -20,
                    duration: 0.5,
                    ease: "power2.inOut"
                })
                .to(preloaderRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power4.inOut",
                    onComplete: finishLoading
                });
        }
    }, [count, finishLoading]);

    return (
        <div className="preloader" ref={preloaderRef}>
            <div className="preloader-bg-circles">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>

            <div className="loader-content" ref={contentRef}>
                <div className="logo-container">
                    <h1 className="loader-logo">S</h1>
                    {/* <div className="logo-glitch-layers">
                        <span>S</span>
                        <span>S</span>
                    </div> */}
                </div>

                <div className="loader-info">
                    <div className="tagline-container">
                        <p className="tagline" key={taglineIndex}>{taglines[taglineIndex]}</p>
                    </div>

                    <div className="progress-container">
                        <div className="progress-text-wrapper">
                            <span className="progress-number">{count}</span>
                            <span className="progress-percent">%</span>
                        </div>
                        <div className="progress-bar-wrapper">
                            <div className="progress-bar-fill" style={{ width: `${count}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
