import React from 'react';
import '../../css/gallery.css';
import img1 from '../../assets/images/image1.jpeg';
import img2 from '../../assets/images/image2.jpeg';
import img4 from '../../assets/images/image4.jpeg';
import img6 from '../../assets/images/image6.jpeg';
import img3 from '../../assets/images/theme.jpeg';
import img5 from '../../assets/images/img5.webp';
import img7 from '../../assets/images/image7.webp';
import img8 from '../../assets/images/img8.jpeg';
import Footer from './footer';
import NavBar from './navbar';

function GalleryPage() {
    const images = [
        { id: 1, src: img1, caption: 'Birthday Party 1' },
        { id: 2, src:img2, caption: 'Birthday Party 2' },
        { id: 3, src:img3, caption: 'Birthday Party 3' },
        { id: 4, src:img4, caption: 'Birthday Party 4' },
        { id: 5, src:img5, caption: 'Birthday Party 5' },
        { id: 6, src:img6, caption: 'Birthday Party 6' },
        { id: 7, src:img7, caption: 'Birthday Party 7' },
        { id: 8, src:img8, caption: 'Birthday Party 8' },
    ];

    return (
        <div className="gallery-page">
            <div className='nav'><NavBar/></div>
            <div style={{padding:'20px 0'}}>
            <h1 class="title-word title-word-5" style={{fontSize:'50px'}}>Gallery</h1>
            <div className="image-grid">
                {images.map(image => (
                    <div key={image.id} className="image-container">
                        <img src={image.src} alt={image.caption} />
                       
                    </div>
                ))}
            </div>
            </div>
            <div><Footer/></div>
        </div>
    );
}

export default GalleryPage;
