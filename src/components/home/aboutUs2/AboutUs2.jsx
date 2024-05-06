import React from 'react';
import './aboutUs2.css';

const AboutUs2 = () => {
    return (
        <section className="about-us section mt-5">
            <div className="d-flex align-items-center justify-content-center">
                <img src="../images/Frame-1321315998.png" alt="" />
            </div>
            
           <div className='description'>
            <img className='mt-5' src="../images/image.jpeg" alt="" />

            <div className="rigth-text mt-5">
                <span className="about-us mb-5">ABOUT US</span>
                <h1>No. 1 Internet Service Provider</h1>
                <h1 className='mb-4'>Company In The Country</h1>
                <p>Connekt Broadband, Powered by Tech4mation, has been providing internet and telecom services for more than 30 years! We are committed to providing unlimited internet that is available anytime, everytime for home, business and office purposes. Stay constantly connekted to the people that matter, with Connekt.</p>
                <button className='mt-3'>Learn More</button>
            </div>
           </div>
        </section>
    );
};

export default AboutUs2;
