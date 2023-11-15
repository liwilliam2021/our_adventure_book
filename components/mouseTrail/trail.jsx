"use client"

import React, { useState, useRef, useEffect } from 'react';
import './trail.css';

const MouseTrail = ({ children, trailCount = 8, delayFactor = 150 }) => {
    const [trailPositions, setTrailPositions] = useState(Array(trailCount).fill({ x: 0, y: 0 }));
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Update each trail element with a delay
            for (let i = 0; i < trailCount; i++) {
                setTimeout(() => {
                    setTrailPositions((prevPositions) => {
                        const newPositions = [...prevPositions];
                        // Update position for this trail element
                        if (i === 0) {
                            newPositions[i] = { x: e.clientX, y: e.clientY };
                        } else {
                            newPositions[i] = newPositions[i - 1];
                        }
                        return newPositions;
                    });
                }, i * delayFactor);
            }
        };

        const container = containerRef.current;
        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, [trailCount, delayFactor]); // Add dependencies

    return (
        <div ref={containerRef}>
            {trailPositions.map((pos, index) => (
                <div 
                    key={index}
                    className="trail" 
                    style={{ left: `${pos.x}px`, top: `${pos.y}px` }} 
                />
            ))}
            {children}
        </div>
    );
};

export default MouseTrail;