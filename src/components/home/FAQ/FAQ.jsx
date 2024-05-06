import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './FAQ.css';

function FAQ() {
    const [isOpen, setIsOpen] = useState({});

    const toggleAccordion = (id) => {
        const isCurrentlyOpen = isOpen[id];

        const updatedOpenState = {};
        Object.keys(isOpen).forEach((itemId) => {
            if (itemId !== id) {
                updatedOpenState[itemId] = false;
            }
        });

        setIsOpen({
            ...updatedOpenState,
            [id]: !isCurrentlyOpen 
        });
    };

    return (
        <>
        <div className="d-flex justify-content-center align-items-center mt-5">
            <img src="../images/COVERAGE.png" alt="" />
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <img src="../images/Frame 1321316057.png" alt="" />
        </div>

        <section className="faq-section section">
            <h1 className='text-center py-5'>Frequently Asked Questions</h1>

            <div className="container">
                {faqData.map((faqItem, index) => (
                    <div
                        className={`collapse-container ${isOpen[faqItem.id] ? 'opened' : ''}`}
                        key={index}
                    >
                        <p
                            className="custom-link d-flex align-items-center mt-3 gap-2 ms-2"
                            onClick={() => toggleAccordion(faqItem.id)}
                        >
                            <FontAwesomeIcon icon={isOpen[faqItem.id] ? faMinus : faPlus} />
                            <span>{faqItem.question}</span>
                        </p>

                        <div
                            id={faqItem.id}
                            className={`ms-4 collapse custom-collapse ${isOpen[faqItem.id] ? 'show' : ''}`}
                        >
                            <p>{faqItem.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
        
    );
}

const faqData = [
    {
        id: 'faq1',
        question: 'What is the FAQ?',
        answer: `It takes 2-3 weeks to get your first blog post ready. 
        That includes in-depth research & creation of your 
        monthly content marketing strategy that we MUST do 
        before writing your first blog post.`
    },
    {
        id: 'faq2',
        question: 'Another FAQ question?',
        answer: 'Answer to FAQ 2...'
    },
    {
        id: 'faq3',
        question: 'One more FAQ?',
        answer: 'Answer to FAQ 3...'
    },
    {
        id: 'faq4',
        question: 'One more FAQ?',
        answer: 'Answer to FAQ 4...'
    },
    {
        id: 'faq5',
        question: 'One more FAQ?',
        answer: 'Answer to FAQ 5...'
    },
    {
        id: 'faq6',
        question: 'One more FAQ?',
        answer: 'Answer to FAQ 6...'
    }
];

export default FAQ;
