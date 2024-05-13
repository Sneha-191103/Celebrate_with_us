import React, { useEffect, useState } from 'react';
import '../../css/premium.css';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

export default function ReviewPage() {
  const [selectedItems, setSelectedItems] = useState(null);
  const [img, setImg] = useState('');
  const [packName, setPackName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    // Retrieve selected items from local storage when the component mounts
    const storedItems = localStorage.getItem('selectedItems');
    if (storedItems) {
      setSelectedItems(JSON.parse(storedItems));
    }

    // Set image based on selected package
    if (selectedItems && selectedItems.packages === "Premium") {
      setImg("https://images.pexels.com/photos/3171823/pexels-photo-3171823.jpeg");
      setPackName("Premium Package");
      setPrice("₹10,000 - ₹15,000")
    } else if (selectedItems && selectedItems.packages === "Golden") {
        setImg("https://images.pexels.com/photos/7826299/pexels-photo-7826299.jpeg?auto=compress&cs=tinysrgb&w=600");
        setPackName("Golden Package");
        setPrice("₹6,500 - ₹10,000")
    }
    else if (selectedItems && selectedItems.packages === "Silver") {
      setImg("https://images.pexels.com/photos/18149669/pexels-photo-18149669/free-photo-of-baby-girl-in-dress-sitting-with-birthday-decorations-around.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
      setPackName("Silver Package");
      setPrice("₹3,500 - ₹5,000")
  }
  }, [selectedItems]);

  return (
        <div>
          <div className='nav'><NavBar/></div>
          <div className="review-page-container" style={{padding:'60px 0 0 0'}}>
            <div className="content-container">
              <h1 style={{textAlign:'center'}}>{packName}</h1>
              <div className="review-container">
                <div className='pack-cont' style={{textAlign:'center'}}>
                  <div className='pac'>
                    <div>
                      {img && <img src={img} alt="Package"  width={'40%'} />}
                    </div>  
                    <div>
                      <div><strong>Selected Cake:</strong> {selectedItems ? selectedItems.selectedCake : ''}</div>
                      <div><strong>Selected Theme:</strong> {selectedItems ? selectedItems.selectedTheme : ''}</div>
                      <div><strong>Include DJ:</strong> {selectedItems ? (selectedItems.includeDJ ? 'Yes' : 'No') : ''}</div>
                    </div>
                  </div>
                  <div className='section food-section' >
                    <div className="section">
                      <h1>Food Menus</h1>
                      <ul>
                        {selectedItems && selectedItems.menus.map((menu, index) => (
                          <div key={index}>
                            {index === 0  ? (
                              <div>
                                <li className="menu-category main-course">Main Course:</li>
                                <ul className="menu-item">
                                  <li>{menu.foodName}</li>
                                </ul>
                              </div>
                            ) : index === 2  ? (
                              <div>
                                <li className="menu-category appetizers">Appetizers:</li>
                                <ul className="menu-item">
                                  <li>{menu.foodName}</li>
                                </ul>
                              </div>
                            ) : index === 4 ? (
                              <div>
                                <li className="menu-category desserts">Desserts:</li>
                                <ul className="menu-item">
                                  <li>{menu.foodName}</li>
                                </ul>
                              </div>
                            ) : (
                              <div>
                                <ul className="menu-item">
                                  <li>{menu.foodName}</li>
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </ul>
                    </div>
                  </div>
                    {packName === "Premium Package" && (
                        <section className="package-includes">
                        <h1 className="section-title">Premium Package Includes(Added premium features are highlighted)</h1>
                        <ul className="includes-list">
                            <li>Entrance</li>
                            <li>Stage Backdrop</li>
                            <li>Entance Decoration</li>
                            <li>Flower Booth</li>
                            <li>Passage</li>
                            <li>Home Decoration</li>
                            <li>Lawn Decoration</li>
                            <li>Flower Chaddar</li>
                            <span className='vip'>
                            <li>Luxury Transportation: Arrangement</li>
                            <li>Specialty Bar</li>
                            <li>Customized Birthday Cake</li>
                            </span>
                        </ul>
                        </section>
                    )}
                    {packName === "Golden Package" && (
                        <section className="package-includes">
                        <h1 className="section-title">Golden Package Includes(Added golden features are highlighted)</h1>
                        <ul className="includes-list">
                            <li>Entrance</li>
                            <li>Stage Backdrop</li>
                            <li>Home Decoration</li>
                            <li>Lawn Decoration</li>
                            <li>Flower Chaddar</li>
                            
                        </ul>
                        </section>
                    )}
                </div>
              </div>
            </div>
            <div className="amount-details">
              <h3>Amount Details</h3>
              <div>{price}</div>
            </div>
            <div className="book-option">
              <Link to="/registration"><button className='custom-button'>Book Now</button></Link>
            </div>
            <br></br>
          </div>
          <Footer/>
        </div>
      );
      
}
