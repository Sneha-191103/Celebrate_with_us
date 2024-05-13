import React, { useState } from 'react';
import '../../css/premium.css';
import Footer from './footer';
import NavBar from './navbar';
import theme from '../../assets/images/theme.jpeg';
import themes from '../../assets/images/themes.webp';
import food from '../../assets/images/food.jpeg';
import review from '../../assets/images/review.jpeg';
import dj from '../../assets/images/dj.jpeg';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import djVideo from '../../assets/videos/dj.mp4';

export default function PremiumPage() {
  const navigate = useNavigate(); 
  const [selectedCake, setSelectedCake] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [includeDJ, setIncludeDJ] = useState(false);
  const [packages,setPackage]=useState("Premium");
  const handleCakeSelect = (cake) => {
    setSelectedCake(cake);
  };

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  const handleToggleDJ = () => {
    setIncludeDJ(!includeDJ);
  };

  const [menus, setMenus] = useState([
    {
      mid: 1,
      hotelName: "Hotel ABC",
      foodName: "Chicken Biryani",
      foodImage: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.5,
    },
    {
      mid: 2,
      hotelName: "Hotel XYZ",
      foodName: "Vegetarian Pasta",
      foodImage: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.0,
    },
    {
      mid: 3,
      hotelName: "Hotel XYZ",
      foodName: "Paneer Tikka",
      foodImage: "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=600",
      rating: 4.3,
    },
    {
      mid: 4,
      hotelName: "Hotel XYZ",
      foodName: "Chicken spring rolls",
      foodImage: "https://images.pexels.com/photos/4105288/pexels-photo-4105288.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.3,
    },
    {
      mid: 5,
      hotelName: "Hotel XYZ",
      foodName: "Assorted pastries",
      foodImage: "https://images.pexels.com/photos/5112588/pexels-photo-5112588.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.7,
    },
    {
      mid: 6,
      hotelName: "Hotel XYZ",
      foodName: "Fruit platters",
      foodImage: "https://images.pexels.com/photos/6004713/pexels-photo-6004713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
    },
    

  ]);
  const handleReviewPurchase = () => {
// After setting the selected items in state
localStorage.setItem('selectedItems', JSON.stringify({
  packages,
  selectedCake,
  selectedTheme,
  includeDJ,
  menus
}));

    navigate('/review')
    //   state: {
    //     selectedCake,
    //     selectedTheme,
    //     includeDJ,
    //     selectedMenuItems
    //   }
    // });
  };

  return (
    <div className="premium-page">
      <div className='nav'><NavBar/></div>
      <div style={{padding:'60px 0 0 0', textAlign:'center'}}>
        <h1>Premium Birthday Party Package</h1>
        <div>
          <p>"Experience the ultimate celebration with our Premium Birthday Party Package. Indulge in delectable cake choices, from rich chocolate to creamy vanilla and vibrant strawberry. Set the mood with our professionally curated DJ party, keeping the dance floor alive with your favorite tunes. Delight your guests with a gourmet selection of food menus, featuring mouthwatering main courses, tantalizing appetizers, and irresistible desserts. Choose from a variety of themed decorations, including options for boys, girls, and adults, to add a personalized touch to your celebration. Elevate your birthday experience with our premium package and create memories that will last a lifetime."</p>
        </div>
        <div className='land-steps-prem' style={{padding:'20px 20px'}}>
          <div style={{display:'flex', flexDirection:'row', gap:'0%'}}>
            <div>
              <div><img src={themes} width={'35%'} height={'35%'} /></div>
              <div style={{fontSize:'15px'}}>Select birthday theme.</div>
            </div>
            <div className="horizontal-line"></div> 
            <div>
              <div><img src={theme} width={'35%'} height={'35%'} /></div>
              <div  style={{fontSize:'15px'}}>Select birthday cake.</div>
            </div>
            <div className="horizontal-line"></div> 
            <div>
              <div><img src={food} width={'35%'} height={'35%'}  /></div>
              <div style={{fontSize:'15px'}}>Catering Service</div>
            </div>
            <div className="horizontal-line"></div> 
            <div>
              <div><img src={dj} width={'35%'} height={'35%'} /></div>
              <div style={{fontSize:'15px'}}>Explore other services</div>
            </div>
            <div className="horizontal-line"></div> 
            <div>
              <div><img src={review} width={'35%'} height={'35%'} /></div>
              <div  style={{fontSize:'15px'}}>Review and Book</div>
            </div>
          </div>
        </div>

        <div className="section" style={{backgroundColor:'rgb(250, 238, 209)'}}>
          <h1>Theme Choices</h1>
          <div style={{padding:'0px 40px'}}>
            <p>Set the scene for an unforgettable celebration! Explore our diverse range of birthday themes to add a touch of magic to your special day. From charming themes for boys and girls to sophisticated options for adults, there's something for every style and preference. Let your imagination soar as you choose the perfect theme to transform your birthday bash into an unforgettable experience!</p>
          </div>
          <div className="theme-options">
            <div
              className={`theme-option ${selectedTheme === 'boy' ? 'selected' : ''}`}
              onClick={() => handleThemeSelect('boy')}
            >
              <img src="https://images.pexels.com/photos/16704561/pexels-photo-16704561/free-photo-of-baby-boy-on-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Boy Theme" />
              <span>Boy Theme</span>
            </div>
            <div
              className={`theme-option ${selectedTheme === 'girl' ? 'selected' : ''}`}
              onClick={() => handleThemeSelect('girl')}
            >
              <img src="https://images.pexels.com/photos/14525773/pexels-photo-14525773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Girl Theme" />
              <span>Girl Theme</span>
            </div>
            <div
              className={`theme-option ${selectedTheme === 'adult' ? 'selected' : ''}`}
              onClick={() => handleThemeSelect('adult')}
            >
              <img src="https://images.pexels.com/photos/4114739/pexels-photo-4114739.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Adult Theme" />
              <span>Adult Theme</span>
            </div>
          </div>
        </div>

        <div className="section" style={{backgroundColor:'#FDF7E4'}}>
          <h1>Cake Choices</h1>
          <div style={{padding:'0px 40px'}}>
            <p>Indulge in the sweetest part of your celebration! Choose from our delectable array of cakes to add the perfect touch to your birthday festivities. Whether you crave the rich taste of chocolate, the classic simplicity of vanilla, or the fruity delight of strawberry, your cake choice sets the tone for an unforgettable experience. Select your favorite flavor and let the sweetness begin!</p>
          </div>
          <div className="theme-options">
            <div
              className={`theme-option ${selectedCake === 'chocolate' ? 'selected' : ''}`}
              onClick={() => handleCakeSelect('chocolate')}
            >
              <img src="https://images.pexels.com/photos/1869342/pexels-photo-1869342.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Chocolate cake" />
              <span>Chocolate Cake</span>
            </div>
            <div
              className={`theme-option ${selectedCake === 'Vanilla' ? 'selected' : ''}`}
              onClick={() => handleCakeSelect('Vanilla')}
            >
              <img src="https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Vanilla Cake" />
              <span>Vanilla Cake</span>
            </div>
            <div
              className={`theme-option ${selectedCake === 'Strawberry' ? 'selected' : ''}`}
              onClick={() => handleCakeSelect('Strawberry')}
            >
              <img src="https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Strawberry Cake" />
              <span>Strawberry Cake</span>
            </div>
          </div>
        </div>

       
       
      <div className='section food-section' style={{backgroundColor:'rgb(222, 208, 182)'}}>
        <div className="section menu-card" >
        <h1>Food Menus</h1>
        <ul>
          <li className="menu-category main-course">Main Course:</li>
          <ul className="menu-item">
            <li>Chicken Briyani</li>
            <li>Vegetarian Pasta</li>
            {/* Add more main course options */}
          </ul>
          <li className="menu-category appetizers">Appetizers:</li>
          <ul className="menu-item">
            <li>Chicken Spring Rolls</li>
            <li>Paneer Tikka</li>
            {/* Add more appetizer options */}
          </ul>
          <li className="menu-category desserts">Desserts:</li>
          <ul className="menu-item">
            <li>Assorted Pastries</li>
            <li>Fruit Platter</li>
            {/* Add more dessert options */}
          </ul>
        </ul>
      </div>
      <div>
      <div className="theme-list">
                {menus.map((menu) => (
                  <div key={menu.mid}>
                    <div className="menu-items-card">
                      <div>
                        <img
                          src={menu.foodImage}
                          alt={menu.foodName}
                          className="foodImage-tag"
                          width="200px"
                          height="200px"
                        />
                      </div>
                      <div className="menu-card-items">
                        <div className="left">
                          <div className="hotel-name-card">
                            {/* <b>{menu.hotelName}</b> */}
                          </div>
                          <div className="food-item-card">
                            <b>{menu.foodName}</b>
                          </div>
                        </div>
                        <div className="right">
                          <div className="rating-hotel">
                            <FaStar style={{ width: "10px", height: "10px" }} />
                            {menu.rating}
                          </div>
                          {/* Add price if needed */}
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                ))}
              </div>
      </div>
      </div>

        <div className="section" style={{backgroundColor:'rgb(187, 171, 140)'}}>
          <h1>DJ Party</h1>
          <p>We provide professional DJs to keep the party going with the latest hits and your favorite tunes.</p>
          <p style={{padding:'0px 40px'}}>Get ready to dance the night away! Elevate your birthday party experience with our professional DJ services. Our talented DJs will curate the perfect playlist to keep the energy high and the dance floor packed all night long. Whether you're celebrating with friends, family, or both, a DJ party adds an extra layer of excitement and fun to your special day. Get ready to create memories that will last a lifetime with our top-notch DJ entertainment!</p>
          <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,flexWrap:'wrap' }}>
            <img className="i1-landing" src="https://images.pexels.com/photos/2078071/pexels-photo-2078071.jpeg?auto=compress&cs=tinysrgb&w=400"></img>
            <img className="i2-landing" src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=660&h=300&dpr=1"></img>
            <img className="i3-landing" src="https://images.pexels.com/photos/3122799/pexels-photo-3122799.jpeg?auto=compress&cs=tinysrgb&w=660&h=350&dpr=1"></img>
            {/* <video controls width="600" height="300" style={{ display: includeDJ ? 'block' : 'none' }}>
              <source src={djVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
          <div className="radio-container">
            <label className="radio-label">
              <input
                type="radio"
                className="radio-input"
                name="djOption"
                value="include"
                checked={includeDJ}
                onChange={() => setIncludeDJ(true)}
              />
              <span className="radio-custom"></span>
              Include DJ
            </label>
            <label className="radio-label">
              <input
                type="radio"
                className="radio-input"
                name="djOption"
                value="exclude"
                checked={!includeDJ}
                onChange={() => setIncludeDJ(false)}
              />
              <span className="radio-custom"></span>
              Exclude DJ
            </label>
          </div>
        </div>

        <div style={{ textAlign: 'center', margin: '20px' }}>
        <button className="custom-button" onClick={handleReviewPurchase}>Review and Purchase</button>
      </div>


        <div><Footer/></div>
      </div>
    </div>
  );
}
