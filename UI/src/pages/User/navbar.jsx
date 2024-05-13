import React, { useRef, useState } from 'react';
import Login from './login';
import '../../css/navbar.css';
import { Link } from 'react-router-dom';
import { MdOutlinePerson, MdOutlinePersonPin } from "react-icons/md";
import { FaBars } from 'react-icons/fa';

export default function NavBar() {
    const navRef=useRef();
    const showNavBar=()=>{
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userEmail, setUserEmail] = useState(localStorage.getItem('xuserEmail') || '');
    const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }
    
    const closeModal = () => {
        setIsModalOpen(false);
    }

    const submitLogout = () => {
        // Your logout logic here
        // Clear userEmail from localStorage
        localStorage.removeItem('xuserEmail');
        setUserEmail('');
    }

    return (
        
            <header>
            <nav ref={navRef}>
            <div className='nav1'><Link to="/">Home</Link></div>
            <div className='nav1'><Link to="/event">Packages</Link></div>
            <div className='nav1'><Link to="/contact">Contact Us</Link></div>
            {/* <div className='nav1'><Link to="/">About us</Link></div> */}
            <div className='nav1'><Link to="/gallery">Gallery</Link></div>
            <div className='nav1'><Link to="/faq">FAQ</Link></div>
            <div className='nav1'>
                <div
                    onMouseEnter={() => setShowLogoutDropdown(true)}
                    onMouseLeave={() => setShowLogoutDropdown(false)}
                >
                    {userEmail !== '' ? (
                      <div className='prof-navbar'>
                        <div><MdOutlinePerson style={{fontSize:'25px'}}/></div><div>{truncateEmail(userEmail)}</div>
                      </div>
                    ) : (
                        <div >
                          
                            <Link onClick={openModal} className='login-open'>Login</Link>
                        </div>
                    )}
                    {showLogoutDropdown && userEmail && (
                        <div className="logout-dropdown">
                            <div onClick={submitLogout}>Logout</div>
                        </div>
                    )}
                </div>
                {isModalOpen && <Login onClose={closeModal} />}
            </div>
            </nav>
            <button className='nav-btn' onClick={showNavBar}><FaBars/></button>
            </header>
    );
}
function truncateEmail(email) {
  const maxLength = 7; // Set your desired length
  return email.length > maxLength ? email.substring(0, maxLength) + '...' : email;
}