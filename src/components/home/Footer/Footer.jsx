import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock, faEnvelope, faStar, faMoneyBillAlt, faQuestionCircle, faLocationArrow, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer my-5 p-3">
            <div className="left-section">
                <div className="footer-logo">
                    <img className='footer-img m-3' src="../images/connekt-logo-1.png" alt="Connekt Logo" />
                    <p>Welcome to the largest broadband and Internet <br />
                     services provider where you can choose the best  <br />
                      plan ever. We guarantee customer support <br />
                       service with high-speed connection.</p>
                       <div className='social-media'>
                            <FontAwesomeIcon size='2x' icon={faXTwitter} />
                            <FontAwesomeIcon size='2x' icon={faFacebook} />
                            <FontAwesomeIcon size='2x' icon={faInstagram} />
                            <FontAwesomeIcon size='2x' icon={faLinkedin} />
                       </div>
                </div>
            </div>
         
            <div>
                <ul className="footer-list">
                    <li><h4>CONTACT US</h4></li>
                    <li><FontAwesomeIcon icon={faPhone} /> +234 818 392 4525</li>
                    <li><FontAwesomeIcon icon={faEnvelope} /> Info@connekt.me</li>
                    <li><FontAwesomeIcon icon={faClock} /> 08:00 Hrs - 17:00Hrs</li>
                    <li> <FontAwesomeIcon icon={faLocationArrow} /> Ikate Elegushi, Lagos,</li>
                    <li>Nigeria</li>
                </ul>
            </div>

            <div className="right-section">
                <ul className="footer-list">
                    <li><h3>Links</h3></li>
                    <li><FontAwesomeIcon icon={faStar} /> Features</li>
                    <li><FontAwesomeIcon icon={faMoneyBillAlt} /> Pricing</li>
                    <li><FontAwesomeIcon icon={faQuestionCircle} /> FAQ’s</li>
                    <li><FontAwesomeIcon icon={faWifi} /> Connekt Now</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
