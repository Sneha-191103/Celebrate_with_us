import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import '../../css/menu.css';

export default function Menu() {
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

  const [showForm, setShowForm] = useState(false);
  const [newMenu, setNewMenu] = useState({
    hotelName: "",
    foodName: "",
    foodImage: "",
    rating: 0,
  });

  const handleAddMenu = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setNewMenu({
      hotelName: "",
      foodName: "",
      foodImage: "",
      rating: 0,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMenu({
      ...newMenu,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMenus([...menus, newMenu]);
    handleCloseForm();
  };

  return (
    <>
      <div className="landing-menu">
        <h1>Menu Management</h1>
        <button onClick={handleAddMenu}>Add Menu</button>
        {showForm && (
          <form onSubmit={handleSubmit}>
            <label>
              Hotel Name:
              <input
                type="text"
                name="hotelName"
                value={newMenu.hotelName}
                onChange={handleChange}
              />
            </label>
            <label>
              Food Name:
              <input
                type="text"
                name="foodName"
                value={newMenu.foodName}
                onChange={handleChange}
              />
            </label>
            <label>
              Food Image URL:
              <input
                type="text"
                name="foodImage"
                value={newMenu.foodImage}
                onChange={handleChange}
              />
            </label>
            <label>
              Rating:
              <input
                type="number"
                name="rating"
                value={newMenu.rating}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCloseForm}>
              Cancel
            </button>
          </form>
        )}
        <div className="hotel-menu-card">
          {menus.map((menu) => (
            <div key={menu.mid}>
              <div className="package-card">
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
                      <FaStar style={{ width: "15px", height: "15px" }} />
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
    </>
  );
}
