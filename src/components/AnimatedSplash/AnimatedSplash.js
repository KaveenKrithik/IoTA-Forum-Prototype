import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AnimatedSplash.css';

const AnimatedSplash = () => {
    const [loading, setLoading] = useState(true);
    const [showText, setShowText] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setShowText(true);
        }, 2000);
        
        return () => clearTimeout(timer);
    }, []);

    const handleGetStarted = () => {
        setLoading(true);
        navigate('/home');
    };

    return (
        <div className="splash-container">
            {loading ? (
                <div className="loading-spinner"></div>
            ) : (
                <>
                    <h1 className={`app-name ${showText ? 'fade-in' : ''}`}>IoTAlliance</h1>
                    <button className={`get-started ${showText ? 'fade-in' : ''}`} onClick={handleGetStarted}>Get Started</button>
                </>
            )}
        </div>
    );
};

export default AnimatedSplash;



