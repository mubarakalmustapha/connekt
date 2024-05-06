import React from 'react';
import './homePage.css';

function HomePage() {
    return (
        <div className='HomePage-page'>
            <img className="top-right-image img-fluid" src="../images/Ellipse-13.png" alt="" />
            <img className="bottom-left-image img-fluid" src="../images/Ellipse-12.png" alt="" />

            <div className="centered-text">
                <h1>Fast Unlimited Internet</h1>
                <h1>That Works Every Time</h1>
                <p>Stream, work and play without any lags or buffering</p>
                <button>Get Started</button>
            </div>

            <div className='image'>
                <img src="../images/file 1.png" alt="" />
            </div>
        </div>
    );
}

export default HomePage;
