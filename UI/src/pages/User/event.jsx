import React, { useState } from 'react';
import NavBar from './navbar';
import '../../css/theme.css';
import Footer from './footer';
import { FaStar } from 'react-icons/fa';

const Themes = ({ onSelect, selectedTheme, setSelectedTheme }) => {
  const themes = [
    { tid:1,name: 'Boy Theme', description: 'Theme for boy birthday party', imageUrl: 'https://images.pexels.com/photos/16704561/pexels-photo-16704561/free-photo-of-baby-boy-on-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { tid:2,name: 'Girl Theme', description: 'Theme for girl birthday party', imageUrl: 'https://images.pexels.com/photos/14525773/pexels-photo-14525773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { tid:3,name: 'Adult Theme', description: 'Theme for adult birthday party', imageUrl: 'https://images.pexels.com/photos/4114739/pexels-photo-4114739.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { tid:4,name: 'Batman Theme', description: 'Batman themed birthday party', imageUrl: 'https://wallpapercave.com/uwp/uwp4222760.jpeg' },
  ];
  const handleThemeClick = (theme) => {
    console.log("Clicked Theme:", theme);
    if (selectedTheme === theme) {
      setSelectedTheme(null); // Deselect the theme if it's already selected
    } else {
      setSelectedTheme(theme);
    }
  };

  return (
    <div className="theme-list">
      {themes.map((theme, index) => (
       <div
       key={index}
       onClick={() => onSelect(theme)}
       className={`menu-items-card ${selectedTheme === theme ? 'selected-theme' : ''}`}
     >
         <div className="theme-image">
            <img src={theme.imageUrl} alt={theme.name}  width={'200px'} height={'200px'}/>
        </div>
        <div className="theme-details">
            <h3>{theme.name}</h3>
            <p>{theme.description}</p>
        </div>
        </div>
      ))}
    </div>
  );
};

const Cakes = ({ onSelect }) => {
  const cakes = [
    { cid:1,name: 'Chocolate Cake', description: 'Delicious chocolate cake with rich chocolate frosting.', imageUrl: 'https://images.pexels.com/photos/1682474/pexels-photo-1682474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { cid:2,name: 'Strawberry Cake', description: 'Fresh strawberry cake with whipped cream topping.', imageUrl: 'https://images.pexels.com/photos/1889651/pexels-photo-1889651.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Cotton Candy Cake', description: 'Fresh cotton candy cake with whipped cream topping.', imageUrl: 'https://images.pexels.com/photos/4959709/pexels-photo-4959709.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Vanilla Cake', description: 'Fresh vanilla cake with whipped cream topping.', imageUrl: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  return (
    <div className="theme-list">
      {cakes.map((cake, index) => (
        <div key={index} onClick={() => onSelect(cake)} className="menu-items-card">
         <div className="theme-image">
            <img src={cake.imageUrl} alt={cake.name} width={'200px'} height={'200px'} />
        </div>
        <div className="theme-details">
            <h3>{cake.name}</h3>
            <p>{cake.description}</p>
        </div>
        </div>
      ))}
    </div>
  );
};

function Event() {
   const [menus, setMenus] = useState([
        {
          mid: 1,
          hotelName: "Hotel ABC",
          foodName: "Paneer Tikka",
          foodImage: "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=600",
          rating: 4.5,
        },
        {
          mid: 2,
          hotelName: "Hotel XYZ",
          foodName: "Chicken Biryani",
          foodImage: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          rating: 4.0,
        },
        {
          mid: 3,
          hotelName: "Hotel XYZ",
          foodName: "Chicken Pasta",
          foodImage: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
          rating: 4.3,
        },
        {
          mid: 4,
          hotelName: "Hotel XYZ",
          foodName: "Pizza",
          foodImage: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600",
          rating: 4.3,
        },
      ]);
      const [step, setStep] = useState(1);
      const [selectedTheme, setSelectedTheme] = useState(null);
      const [selectedCake, setSelectedCake] = useState(null);
      const [selectedFoods, setSelectedFoods] = useState([]);
    
      const handleThemeSelect = (theme) => {
        setSelectedTheme(theme);
      };
    
      const handleCakeSelect = (cake) => {
        setSelectedCake(cake);
      };
    
      const handleFoodSelect = (menu) => {
        // Check if the selected food already exists in selectedFoods
        const existingFoodIndex = selectedFoods.findIndex((food) => food.mid === menu.mid);
      
        if (existingFoodIndex !== -1) {
          // If the food already exists, update its count
          const updatedFoods = [...selectedFoods];
          updatedFoods[existingFoodIndex].count += 1;
          setSelectedFoods(updatedFoods);
        } else {
          // If the food does not exist, add it to selectedFoods
          setSelectedFoods([...selectedFoods, { ...menu, count: 1 }]);
        }
      };
      
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here, e.g., sending data to server
        console.log("Selected Theme:", selectedTheme);
        console.log("Selected Cake:", selectedCake);
        console.log("Selected Foods:", selectedFoods);
        // Reset selected data after submission if needed
      };
    
      const handleNext = () => {
        setStep(step + 1);
      };
    
      const handlePrevious = () => {
        setStep(step - 1);
      };
      const selectedCardStyle = {
        backgroundColor: 'lightgreen',
      };
    
      return (

        <div>
            <div className='nav'><NavBar/></div>
      <div style={{ margin: '0px' }}>
        <div className='apptheme'>
          <div className='para-land' style={{ backgroundColor: 'pink', padding: '40px', marginTop: '40px' }}>
            Now that you have the perfect theme in mind, it’s time to get to planning! Remember to consider the time of day you’ll be hosting the party, as well as weather, food choices and guest count. Last but not least, don’t forget a remarkable gift that the birthday guest will cherish for years to come. Check our our birthday bestsellers to find something perfect. Happy celebrating!
          </div>
          </div>
          </div>
          {/* Display steps based on the current step state */}
          {step === 1 && (
            <div className='apptheme'>
              <h1 className="title-word title-word-5" style={{ fontSize: '50px', textAlign: 'center' }}>Select Theme</h1>
              <Themes onSelect={handleThemeSelect} selectedTheme={selectedTheme}  setSelectedTheme={setSelectedTheme}/>
              <button onClick={handleNext}>Next</button>
            </div>
          )}
    
          {step === 2 && (
            <div className='apptheme'>
              <h1 className="title-word title-word-5" style={{ fontSize: '50px', textAlign: 'center' }}>Select Cake</h1>
              <Cakes onSelect={handleCakeSelect} />
              <button onClick={handlePrevious}>Previous</button>
              <button onClick={handleNext}>Next</button>
            </div>
          )}
    
          {step === 3 && (
            <div className='apptheme'>
              <h1 className="title-word title-word-5" style={{ fontSize: '50px', textAlign: 'center' }}>Select Food</h1>
              <div className="theme-list">
                {menus.map((menu) => (
                  <div key={menu.mid}>
                    <div className="menu-items-card" onClick={() => handleFoodSelect(menu)}>
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
             
              <button onClick={handlePrevious}>Previous</button>
              <button onClick={handleNext}>Next</button>
            </div>
          )}
    
          {/* Display the form only when all selections are made */}
          {step === 4 && (
            <form onSubmit={handleSubmit}>
              {/* Selected Theme */}
              {selectedTheme && (
                <div>
                  <label>Selected Theme:</label>
                  <input type="text" value={selectedTheme.name} readOnly />
                </div>
              )}
    
              {/* Selected Cake */}
              {selectedCake && (
                <div>
                  <label>Selected Cake:</label>
                  <input type="text" value={selectedCake.name} readOnly />
                </div>
              )}
    
              {/* Selected Foods */}
              {selectedFoods.length > 0 && (
                <div>
                  <label>Selected Foods:</label>
                  <ul>
                    {selectedFoods.map((food, index) => (
                      <li key={index}>{food.foodName}{food.count}</li>
                    ))}
                  </ul>
                </div>
              )}
    
              {/* Submit button */}
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button type="submit">Submit</button>
              </div>
              <button onClick={handlePrevious}>Previous</button>
            </form>
          )}
        </div>
      );
}

export default Event;
