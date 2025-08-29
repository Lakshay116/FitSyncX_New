import React, { useEffect, useState } from 'react';
import '../css/LoadingScreen.css';

const LoadingScreen = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <div className="loading-dumbbell-container">
                    <div className="loading-bar"></div>
                    <div className="dumbbell-spinner">
                        <div className="plate left"></div>
                        <div className="handle"></div>
                        <div className="plate right"></div>
                    </div>
                </div>
            ) : (
                children
            )}
        </>
    );
};

export default LoadingScreen;
