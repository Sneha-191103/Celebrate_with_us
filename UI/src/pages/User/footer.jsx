import React from 'react';
import '../../css/footer.css';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle,AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* <div className="footer-section-about">
                    <h3>About Us</h3>
                    <p>We are dedicated to making your birthday celebrations memorable.
                    Whether you’re throwing a surprise birthday party for a cherished loved one or for your Prince Or Your Lill Princess and Might be possible that  you’ve been put in charge of hosting your holiday get-together at work, we’ll do our best to make sure you have a stress-free experience. 
                    </p>
                </div> */}
                <div className="footer-section-contact-form">
                    <h4 className='link'><Link to="/contact" > Contact Us</Link></h4>
                    <h4 className='link'><Link to="/privacy" > Privacy Policy</Link></h4>
                    <h4 className='link'><Link to="/terms" > Terms and conditions</Link></h4>
                    {/* <h4 className='link'><Link to="/contact" > Feedback</Link></h4> */}
                </div>
                <div className='social-media'>
                    <div><h3>Social Links</h3></div>
                    
                    <div>
                    <FaFacebook />
                    <AiFillTwitterCircle />
                    <AiFillInstagram />
                    </div>
                    
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Birthday Event Manager | Designed by Sneha Ramachandran
            </div>
        </footer>
    );
}

export default Footer;
