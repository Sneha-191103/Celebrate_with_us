import React, { useState } from 'react';
import '../../css/faq.css';

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            <div className="question" onClick={toggleAnswer}>
                <span>{isOpen ? '-' : '+'}</span>
                <span>{question}</span>
            </div>
            {isOpen && <div className="answer">{answer}</div>}
        </div>
    );
}

export default FAQItem;
