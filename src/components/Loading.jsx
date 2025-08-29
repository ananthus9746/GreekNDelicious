import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-screen">
            <div className="loading-content">
                <img src="/logo.jpg" alt="Logo" className="loading-logo" />
            </div>
        </div>
    );
};

export default Loading;
