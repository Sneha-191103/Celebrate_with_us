import React from 'react';
import FAQItem from './faqItems';
import NavBar from './navbar';
import Footer from './footer';
import '../../css/faq.css'

function FAQPage() {
    return (
        <div className="faq-page">
             <div className='nav'><NavBar/></div>
             <div className='faqpag'>
            <h1 class="title-word title-word-5">Frequently Asked Questions</h1>
            <FAQItem
                question="How do I book an event?"
                answer="You can book an event by filling out our online booking form or by contacting our customer service team directly."
            />
            <FAQItem
                question="What payment methods do you accept?"
                answer="We accept all major credit cards, PayPal, and bank transfers for payment."
            />
            <FAQItem
                question="Can I customize my event?"
                answer="Yes, absolutely! We offer a range of customization options including themes, decorations, and activities to suit your preferences."
            />
            <FAQItem
                question="How far in advance should I start planning my birthday event?"
                answer="We recommend starting your planning process at least 2-3 months before your desired event date. This allows ample time to secure a venue, book vendors, and finalize all the details to ensure a smooth and successful celebration."
            />
            <FAQItem
                question="Can I customize my birthday event according to a specific theme or color scheme?"
                answer="Absolutely! Our birthday event management services are fully customizable to suit your preferences. Whether you have a specific theme or color scheme in mind or need inspiration, our team will work with you to bring your vision to life."
            />
            <FAQItem
                question="What services do you offer for birthday events?"
                answer="We offer a comprehensive range of services to make your birthday celebration extraordinary. This includes venue selection, catering, entertainment, decoration, photography, and much more. Whatever your needs may be, we have you covered."
            />
            <FAQItem
                question="Can I request special dietary accommodations for my guests?"
                answer="Yes, we understand the importance of accommodating dietary restrictions and preferences. We work closely with our catering partners to provide a variety of menu options, including vegetarian, vegan, gluten-free, and allergen-friendly choices."
            />
            <FAQItem
                question="How do I handle RSVPs and guest management for my birthday event?"
                answer="Our online platform makes it easy to manage your guest list and RSVPs. You can send out invitations digitally, track responses in real-time, and communicate with your guests directly through our platform."
            />
            <FAQItem
                question="What safety measures are in place for birthday events in light of COVID-19?"
                answer="The health and safety of our clients and guests are our top priority. We adhere to all local health guidelines and regulations regarding COVID-19 precautions. This may include capacity limits, social distancing measures, mask requirements, and enhanced cleaning protocols."
            />
            <FAQItem
                question="Can I schedule a consultation to discuss my birthday event vision in detail?"
                answer="Absolutely! We offer complimentary consultations to all clients to discuss their event vision, preferences, and budget. Contact us today to schedule a consultation and let's start planning your dream birthday celebration!"
            />
            <FAQItem
                question="What payment options are available for your services?"
                answer="We accept various payment methods, including credit/debit cards, bank transfers, and online payment platforms. Our goal is to make the payment process convenient and secure for our clients."
            />
            <FAQItem
                question="Do you offer any special packages or discounts for birthday events?"
                answer="Yes, we periodically offer special packages and discounts for birthday events. Be sure to check our website or contact our team for current promotions and offers."
            />
            <FAQItem
                question="How can I get in touch with your team for further assistance?"
                answer="For further assistance or inquiries, please feel free to reach out to our team via email at [email address], phone at [phone number], or through the contact form on our website. We're here to help make your birthday event a memorable success!"
            />
            </div>
            <div><Footer/></div>
        </div>
    );
}

export default FAQPage;
