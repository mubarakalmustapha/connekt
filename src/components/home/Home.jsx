import React from 'react';
import Reviews from './Reviews/Reviews';
import Features from './features/Features';
import Pricing from './Pricing/Pricing';
import Process from './process/Process';
import AboutUs2 from './aboutUs2/AboutUs2';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import HomePage from './homePage/HomePage';
import FAQ from './FAQ/FAQ';
import './home.css';

function Home() {
    return (
        <div className='home-page'>
            <HomePage/>
            <AboutUs2 />
            <Features />
            <Process />
            <Pricing />
            <Reviews />
            <FAQ/>
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
