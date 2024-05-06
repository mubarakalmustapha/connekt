import React from 'react';
import './Reviews.css';

const Reviews = () => {
    return (
        <section className="reviews-section section pt-5">
            <h1 className='review mt-5'>Reviews</h1>
            <h2 className='kind-words mt-5'>Kind Words From Our Customers</h2>

            <div className="review-wrapper mt-5">
                <div className="review-container">
                    <p className="review-text">It’s just incredible</p>
                    <p className="review-text">I have been a client of Connekt for several years. They provide an excellent service at an amazingly great price. I tell my friends about this great service.</p>
                    <hr />
                    <div className='user-review'>
                        <img className="customer-image" src={'../images/image 4.png'} alt="Customer" />
                        <div className='user-info'>
                            <span className='user-name'>Ginika Chikezie</span> <br />
                            <span className='from'>Spurhub</span>
                        </div>
                    </div>
                </div>

                
                <div className="review-container">
                    <p className="review-text">Satisfied Customer Here!</p>
                    <p className="review-text">I have had their service for over 1 year, completely trouble-free. Installers were a pleasure to deal with.</p>
                    <hr />
                    <div className='user-review'>
                        <img className="customer-image" src={'../images/image 5.png'} alt="Customer" />
                        <div className='user-info'>
                            <span className='user-name'>Nonso Diobi</span> <br />
                            <span className='from'>HOUSE OWNER</span>
                        </div>
                    </div>
                </div>

                
                <div className="review-container">
                    <p className="review-text">No doubt, Connekt is the best!</p>
                    <p className="review-text">We had a bad service for ages and were completely unhappy with it. We switched to Connekt and have never looked back. We are much happier.</p>
                    <hr />
                    <div className='user-review'>
                        <img className="customer-image" src={'../images/image 6.png'} alt="Customer" />
                        <div className='user-info'>
                            <span className='user-name'>Praise Martins</span> <br />
                            <span className='from'>234 Finance</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='rotate-icons'>
            <img src="../images/Button Prev.png" alt="" />
            <img src="../images/Button Next.png" alt="" />
        </div>
        </section>
    );
};

export default Reviews;
