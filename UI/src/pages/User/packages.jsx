import React from 'react';
import '../../css/package.css'
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

export default function Packages() {
  const packages = [
    {
      name: 'Premium Package',
      link:'/premium',
      image: 'https://images.pexels.com/photos/3171823/pexels-photo-3171823.jpeg', 
    },
    {
        name: 'Golden Package',
        link:'/gold',
        image: 'https://images.pexels.com/photos/7826299/pexels-photo-7826299.jpeg?auto=compress&cs=tinysrgb&w=600', 
      },
    {
      name: 'Silver Package',
      link:'/silver',
      image: 'https://images.pexels.com/photos/18149669/pexels-photo-18149669/free-photo-of-baby-girl-in-dress-sitting-with-birthday-decorations-around.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
    // {
    //   name: 'Bronze Package',
    //   link:'/bronze',
    //   image: 'https://images.pexels.com/photos/7159848/pexels-photo-7159848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // },
  ];

  return (
    <div>
        <div className='nav'><NavBar/></div>
        <div style={{padding:'40px 0' }}>
            <h1 class="title-word title-word-5" style={{fontSize:'50px',textAlign:'center'}}>Packages</h1>
    <div className="packages-container"> 
      {packages.map((packages, index) => (
        <div key={index} className="package-card">
          <img src={packages.image} alt={packages.name} />
          <h1>{packages.name}</h1>
         <Link to={packages.link}><button className="view-details-button">View Details</button></Link> 

        </div>
      ))}
    </div>

    </div>
    <div><Footer/></div>
    </div>
  );
}

