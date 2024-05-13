import React, { useState } from 'react';
import Login from './login';
import '../../css/landing.css';

import NavBar from './navbar';
import img from '../../assets/images/front-img.jpg';
import img2 from '../../assets/images/secnd-img1.jpg';
import theme from '../../assets/images/theme.jpeg';
import themes from '../../assets/images/themes.webp';
import food from '../../assets/images/food.jpeg';
import review from '../../assets/images/review.jpeg';
import dj from '../../assets/images/dj.jpeg';
import Footer from './footer';
import About from './about';

function LandingPage() {
    
    return (
        <div >
            <div className='nav'><NavBar/></div>
            <div className='landingpage'>
                <div>
                    {/* <div><img src={img} width={'100%'} height={'1000px'}/></div> */}
                    <div><img src={img2} width={'100%'}/></div>
                </div>
                <br></br>
                <div className='font-land'>
                <h3 class="title">
                    <span class="title-word title-word-1">Celebrate </span>
                    <span class="title-word title-word-2"> your </span>
                    <span class="title-word title-word-3"> loved </span>
                    <span class="title-word title-word-4"> ones </span>
                    <span class="title-word title-word-5"> birthday </span>
                    <span class="title-word title-word-2"> with </span>
                    <span class="title-word title-word-1">us</span>
                </h3>
                </div>
                <br></br>
                    <div className='land-steps'>
                        <div className='topic-land'><div className='topic' style={{color:'red'}}>How it works?</div>
                            <div className='topic-img'>
                            <div>
                                <div><img src={themes} width={'70%'} height={'70%'}  className='step-img'/></div>
                                <div className='step-text'>Select birthday theme.</div>
                            </div>
                            <div>
                                <div><img src={theme} width={'70%'} height={'70%'}   className='step-img'/></div>
                                <div className='step-text'>Select birthday cake.</div>
                            </div>
                            <div>
                                <div><img src={food} width={'70%'} height={'70%'}  className='step-img'/></div>
                                <div className='step-text'>Catering Service</div>
                            </div>
                            <div>
                                <div><img src={dj} width={'70%'} height={'70%'}  className='step-img'/></div>
                                <div className='step-text'>Explore other services</div>
                            </div>
                            <div>
                                <div><img src={review} width={'70%'} height={'70%'}   className='step-img'/></div>
                                <div className='step-text'>Review and Book</div>
                            </div>
                            </div>
                    </div>
                </div>
                <div className='para-land'>
                    <p>Welcome to our Birthday Event Website! Dive into a world where birthday dreams come true with our intuitive platform designed to make planning your special day a breeze. From personalized party themes to expert guidance from seasoned professionals, we're here to ensure that every detail is perfect. Keep track of your guest list, manage RSVPs, and book vendors seamlessly, all in one convenient location. With captivating memories waiting to be made and unforgettable experiences in store, let's make your birthday celebration an event to remember. Join us on this journey and let's create magic together!
                    </p>
                </div>
                <About/>  
                <br></br> 
            </div>
            <div><Footer/></div>
        </div>
    );
}

export default LandingPage;
