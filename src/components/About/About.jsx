import React from "react";
import './About.css';
import Contact from "../home/Contact/Contact";
import Footer from "../home/Footer/Footer";

function About(){
    return(
        <>
        <div className='about-page'>
        <img className="top-right-image img-fluid" src="../images/Ellipse 39.png" alt="" />
        {/* <img className="middle-right-image img-fluid" src="../images/Ellipse 38.png" alt="" /> */}
        <img className="top-left-image img-fluid" src="../images/Vector (1).png" alt="" />
        <img className="bottom-right-image img-fluid" src="../images/Vector.png" alt="" />        

        <div className="centered-text">
            <span>ABOUT US</span>
            <p className="mt-3 provider">No. 1 Internet Service Provider <br /> Company In The Country</p>
            <p>Connekt Broadband, Powered by Tech4mation, has been providing internet and telecom services for more than 30 years! We are committed to providing unlimited internet that is available anytime, everytime for home, business and office purposes. Stay constantly connekted to the people that matter, with Connekt.</p>
        </div>

        <div className='image'>
            <img src="../images/file (1) 1.png" alt="" />
        </div>
         </div>

         <div className="d-flex align-items-center justify-content-center m-5">
            <img src="../images/Frame 1321316070.png" alt="" />
         </div>

        <div className="vission-mission d-flex align-items-center justify-content-between mt-5">
            <div className="vission">
                <img className="mt-3" src="../images/Frame 1321316073.png" alt="" />
                <span>OUR VISION</span>
                <p>Our vision is to be the leading provider of internet and telecom solutions, recognised for our unwavering commitment to quality, accessibility, and technological advancement. By anticipating and exceeding the evolving needs of our customers, we aim to foster connectivity that enriches lives, drives progress, and transforms societies.</p>
                
            </div>
            <div className="mission">
                <img className="mt-3" src="../images/Frame 1321316073 (1).png" alt="" />
                <span>OUR MISSION</span>
                <p>At Connekt Broadband, powered by Tech4mation, our mission is to empower individuals, businesses, and communities by delivering reliable, high-speed internet and telecom services. With a commitment to innovation and customer satisfaction, we strive to connect people seamlessly, enabling them to thrive in the digital world</p>
            </div>


        </div>

        <Contact />
        <Footer />
        </>
        
    )
}

export default About;