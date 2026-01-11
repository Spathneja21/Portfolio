import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ finishLoading }) => {
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(finishLoading, 500); // Wait a bit before finishing
                    return 100;
                }
                return prev + 1; // Adjust speed here
            });
        }, 20);

        return () => clearInterval(interval);
    }, [finishLoading]);

    return (
        <div className="preloader">
            <div className="loader-content">
                <h1 className="loader-logo">S</h1>
                <div className="loading-bar-container">
                    <div className="loading-bar" style={{ width: `${count}%` }}></div>
                </div>
                <p className="loading-text">{count}%</p>
            </div>
        </div>
    );
};

export default Preloader;
