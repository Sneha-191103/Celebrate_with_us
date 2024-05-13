import React from 'react';
import '../../css/contact.css';
import NavBar from './navbar';
import Footer from './footer';

function ContactPage() {
    return (
        <div>
        <div className='nav'><NavBar/></div>
        <div className="contact-page">
            <div className="contact-info">
                <h1>Contact Us</h1>
                <p>If you have any questions or inquiries, feel free to reach out to us using the contact information below:</p>
                <ul>
                    <li>Email: celebratewithus@gmail.com</li>
                    <li>Phone: +1234567890</li>
                    <li>Address: 123 Main St, City, Country</li>
                </ul>
            </div>
            <div className="contact-form">
                <h1>Send us a message</h1>
                <form>
                    <div className="form-group">
                        <label className='cont-lab' htmlFor="name">Name</label>
                        <input className='cont-inp' type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label className='cont-lab' htmlFor="email">Email</label>
                        <input className='cont-inp' type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label className='cont-lab' htmlFor="message">Message</label>
                        <textarea className='cont-inp' id="message" name="message" rows="4"></textarea>
                    </div>
                    <button type="submit" className="log-button">Send Message</button>
                </form>
            </div>
        </div>
         <div><Footer/></div>
        </div>
    );
}

export default ContactPage;
