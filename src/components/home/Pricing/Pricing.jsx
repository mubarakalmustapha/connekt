import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <section className="pricing-section section mb-5">
            <h2 className="pricing-heading">PRICING</h2>
            <h1 className='text-center'>Select a Package</h1>
            <p className='text-center'>Download, surf, and stream with confidence <br /> with Connekt Broadband</p>

            <div className="pricing-cards">
                <div className="pricing-card">
                    <div className='option-one d-flex align-items-center justify-content-center'>
                        <span className="types-of-options">Residential Standard</span>
                        <span className='ms-1 popular'>Popular</span>
                    </div>
                    <img className='speed' src="../images/Frame 1321316010.png" alt="" />
                    <img className='monthly' src="../images/Frame-1321316011.png" alt="" />
                    <ul className="features-list">
                        <li>
                            <img src="../images/tick-circle.png" alt="" />
                            <p>Unlimited 24/7/365 Data</p>
                        </li>
                        <li>
                            <img src="../images/tick-circle.png" alt="" />
                            <p>VOIP Telephony Service</p>
                        </li>
                        <li>
                            <img src="../images/tick-circle.png" alt="" />
                            <p>24/7 Support</p>
                        </li>
                        <li>
                            <img src="../images/tick-circle.png" alt="" />
                            <p>Suitable for Personal Use</p>
                        </li>
                    </ul>
                    <button>Order Now</button>
                </div>

                <div className="pricing-card high">
                    <div className='d-flex align-items-center justify-content-center'>
                        <span className="types-of-options">Residential Premium</span>
                    </div>
                    <img className='speed' src="../images/Frame-1321316012.png" alt="" />
                    <img className='monthly' src="../images/Frame 1321316012.png" alt="" />
                    <ul className="features-list">
                        <li>
                            <img src="../images/tick-circle.png" alt="" />
                            <p>Unlimited 24/7/365 Data</p>
                        </li>
                        <li>
                            <img src="../images/tick-circle.png" alt="" />
                            <p>Free PBX Telephony</p>
                        </li>
                        <li>
                            <img src="../images/tick-circle.png" alt="" />
                            <p>Online TV Streaming</p>
                        </li>
                        <li>
                            <img src="../images/tick-circle.png" alt="" />
                            <p>24/7 Support</p>
                        </li>
                        <li>
                            <img src="../images/tick-circle.png" alt="" />
                            <p>Suitable for Home Use</p>
                        </li>
                    </ul>
                    <button>Order Now</button>
                </div>

                <div className="pricing-card high">
                    <div className='d-flex align-items-center justify-content-center'>
                        <span className="types-of-options">Corporate Premium</span>
                    </div>
                    <img className='speed' src="../images/Frame-1321316012.png" alt="" />
                    <img className='monthly' src="../images/Frame 1321316012 (1).png" alt="" />
                    <ul className="features-list">
                        <li>
                            <img src="../images/tick-circle.png" alt="" />
                            <p>Unlimited 24/7/365 Data</p>
                        </li>
                        <li>
                            <img src="../images/tick-circle.png" alt="" />
                            <p>Free PBX Telephony</p>
                        </li>
                        <li>
                            <img src="../images/tick-circle.png" alt="" />
                            <p>Online TV Streaming</p>
                        </li>
                        <li>
                            <img src="../images/tick-circle.png" alt="" />
                            <p>24/7 Support</p>
                        </li>
                        <li>
                            <img src="../images/tick-circle.png" alt="" />
                            <p>Suitable for Home Use</p>
                        </li>
                    </ul>
                    <button>Order Now</button>
                </div>

            </div>
        </section>
    );
};
export default Pricing;
