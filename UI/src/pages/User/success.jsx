// SuccessPage.js
import React from 'react';
import NavBar from './navbar';
import Footer from './footer';

const SuccessPage = () => {
    return (
        <div>
            <div className='nav'><NavBar/></div>
            <div style={{padding:'60px'}}>

            <h1>Success!</h1>
            <p>Payment successful.</p>
            <img src="https://i.pinimg.com/564x/72/b7/70/72b7700ef006e9048bf2be159d44e4f7.jpg"/>
            {/* You can add more content or components here */}
            </div>
            <div><Footer/></div>
        </div>
    );
}

export default SuccessPage;
