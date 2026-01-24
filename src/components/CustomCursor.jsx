import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile/touch devices
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(pointer: coarse)').matches);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = target.closest('a, button, [role="button"], [data-cursor-hover]');
            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', updateCursorPosition);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <div
            className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
};

export default CustomCursor;
