import React from 'react';
import './Process.css';

const Process = () => {
    return (
        <section className="process-section section">
            <h2 className="process-heading text-center">Process</h2>
            <h1 className='text-center'>Fast Unlimited Internet <br /> in 3 Steps</h1>

            <div className="process-cards">
                <div className="process-card">
                    <div className="process-circle">
                        <img src="../images/icon.png" alt="" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                    <span>Inspect</span>
                        </div>
                    <p className='text-center'>Our support installer inspects your premises prior to installation</p>
                </div>

                <div className="process-card middle">
                    <div className="process-circle middle">
                        <img src="../images/Group.png" alt="" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                    <span>Install</span>
                    </div>
                    <p className='text-center'>Your antenna is fine-tuned and set to ensure the strongest signal</p>
                </div>

                <div className="process-card">
                    <div className="process-circle">
                    <img src="../images/material-symbols_frame-inspect.png" alt="" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                    <span>Connect</span>
                    </div>
                    <p className='text-center'>Connect all your devices to your wifi gateway and you are ready to go</p>
                </div>
            </div>
        </section>
    );
};

export default Process;
