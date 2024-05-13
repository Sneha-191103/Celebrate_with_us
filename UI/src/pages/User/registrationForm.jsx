import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './navbar';
import '../../css/registration.css'
import Footer from './footer';
import { Link } from 'react-router-dom';


function RegistrationForm() {
  //kkupdate
  const [id, setId] = useState(0);
  const initialFormData = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    eventPlace: '',
    eventTime: '',
    packageSelected: 'Premium Package',
    eventDate: '',
    diningOptions: '',
    musicEvent: false,
    address: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? e.target.checked : value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };
  //k update
  const handleupdateSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.firstName.trim() === '' ||
      formData.lastName.trim() === '' ||
      formData.mobileNumber.trim() === '' ||
      formData.eventPlace.trim() === '' ||
      formData.eventTime.trim() === '' ||
      formData.eventDate.trim() === '' ||
      formData.diningOptions.trim() === '' ||
      formData.address.trim() === ''
    ) {
      toast.error('Please fill in all required fields.');
      return;
    }

    if (formData.mobileNumber.length !== 10) {
      toast.error('Mobile number must be exactly 10 digits.');
      return;
    }

    // Validation and API call logic remains the same
    // ...

    //k update
    const response = await updateWedding(formData, id);
    if (response.status === 200) {
      toast.success('update successful!');
      setIsFormSubmitted(true);
      setIsEditing(false); // Exit edit mode when submitted successfully
    } else {
      toast.error('Registration failed. Please try again.');
    }

  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = localStorage.getItem('authToken');

    if (isEditing) {
      // If in edit mode, simply exit editing mode without saving
      setIsEditing(false);
      return;
    }
    if (
      formData.firstName.trim() === '' ||
      formData.lastName.trim() === '' ||
      formData.mobileNumber.trim() === '' ||
      formData.eventPlace.trim() === '' ||
      formData.eventTime.trim() === '' ||
      formData.eventDate.trim() === '' ||
      formData.diningOptions.trim() === '' ||
      formData.address.trim() === ''
    ) {
      toast.error('Please fill in all required fields.');
      return;
    }

    if (formData.mobileNumber.length !== 10) {
      toast.error('Mobile number must be exactly 10 digits.');
      return;
    }

    // Validation and API call logic remains the same
    // ...
    const response = await userWedding(formData);
    //kupdate
    setId(response.data.id);
    if (response.status === 200) {
      toast.success('Registration successful!');
      setIsFormSubmitted(true);
      setIsEditing(false); // Exit edit mode when submitted successfully
    } else {
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <div className='nav'><NavBar/></div>
      <div className="wedding-registration-form-container" style={{padding:'60px 0 0 0'}}>
        <ToastContainer />
        <h1 className="popp" style={{textAlign:'center'}}>Registration form</h1>
        {isFormSubmitted ? (
          <div className="submitted-details">
            {isEditing ? ( // Show different UI when in edit mode
              <div>


                <div className="wedding-form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />

                </div>
                <div className="wedding-form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="wedding-form-group">
                  <label htmlFor="mobileNumber">Mobile Number:</label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="wedding-form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="wedding-form-group">
                  <label htmlFor="eventPlace">Event Place:</label>
                  <input
                    type="text"
                    id="eventPlace"
                    name="eventPlace"
                    value={formData.eventPlace}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="wedding-form-group">
                  <label htmlFor="eventTime">Event Time:</label>
                  <input
                    type="time"
                    id="eventTime"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="wedding-form-group">
                  <label htmlFor="packageSelected">Package Selected:</label>
                  <select
                    id="packageSelected"
                    name="packageSelected"
                    value={formData.packageSelected}
                    onChange={handleChange}
                    className="custom-select"
                  >
                    <option value="Golden Package">Golden Package</option>
                    <option value="Premium Package">Premium Package</option>
                    <option value="Silver Package">Silver Package</option>
                    <option value="Bronze Package">Bronze Package</option>
                    
                  </select>
                </div>
                <div className="wedding-form-group">
                  <label htmlFor="eventDate">Event Date:</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* <div className="wedding-form-group">
                  <label htmlFor="photography">Photography:</label>
                  <select
                    id="photography"
                    name="photography"
                    value={formData.photography}
                    onChange={handleChange}
                    className="custom-select"
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div> */}
                <div className="wedding-form-group">
                  <label htmlFor="diningOptions">Dining Options:</label>
                  <select
                    id="diningOptions"
                    name="diningOptions"
                    value={formData.diningOptions}
                    onChange={handleChange}
                    className="custom-select"
                  >
                    <option value="">Select Dining Option</option>
                    <option value="plated-sit-down">Plated Sit-Down</option>
                    <option value="buffet">Buffet</option>
                  </select>
                </div>
                {/* <div className="wedding-form-group">
                  <label htmlFor="furnitureType">Furniture Type:</label>
                  <select
                    id="furnitureType"
                    name="furnitureType"
                    value={formData.furnitureType}
                    onChange={handleChange}
                    className="custom-select"
                  >
                    <option value="">Select Furniture Type</option>
                    <option value="Traditional">Traditional</option>
                    <option value="Modern">Modern</option>
                    <option value="Vintage">Vintage</option>
                  </select>
                </div> */}
                <div className="wedding-form-group">
                  <label htmlFor="musicEvent">Music Event:</label>
                  <div className="radio-group">
                    <input
                      type="radio"
                      id="musicEventYes"
                      name="musicEvent"
                      value="Yes"
                      checked={formData.musicEvent === true}
                      onChange={() => setFormData({ ...formData, "musicEvent": true })}
                      required
                    />
                    <label htmlFor="musicEventYes">Yes</label>
                    <input
                      type="radio"
                      id="musicEventNo"
                      name="musicEvent"
                      value="No"
                      required
                      checked={formData.musicEvent === false}
                      onChange={() => setFormData({ ...formData, "musicEvent": false })}
                    />
                    <label htmlFor="musicEventNo">No</label>
                  </div>
                </div>

                {/* Display editable fields here */}
                {/* <div className="wedding-form-group">
                  <label htmlFor="danceEvent">Dance Event:</label>
                  <div className="radio-group">
                    <input
                      type="radio"
                      id="danceEventYes"
                      name="danceEvent"
                      value="Yes"
                      checked={formData.danceEvent === true}
                      onChange={() => setFormData({ ...formData, "danceEvent": true })}
                      required
                    />
                    <label htmlFor="danceEventYes">Yes</label>
                    <input
                      type="radio"
                      id="danceEventNo"
                      name="danceEvent"
                      value="No"
                      required
                      checked={formData.danceEvent === false}
                      onChange={() => setFormData({ ...formData, "danceEvent": false })}
                    />
                    <label htmlFor="danceEventNo">No</label>
                  </div>
                </div> */}
                {/* <div className="wedding-form-group">
                  <label htmlFor="dronePhotography">Drone Photography:</label>
                  <div className="radio-group">
                    <input
                      type="radio"
                      id="dronePhotographyYes"
                      name="dronePhotography"
                      value="Yes"
                      checked={formData.dronePhotography === true}
                      onChange={() => setFormData({ ...formData, "dronePhotography": true })}
                    />
                    <label htmlFor="dronePhotographyYes">Yes</label>
                    <input
                      type="radio"
                      id="dronePhotographyNo"
                      name="dronePhotography"
                      value="No"
                      required
                      checked={formData.dronePhotography === false}
                      onChange={() => setFormData({ ...formData, "dronePhotography": false })}
                    />
                    <label htmlFor="dronePhotographyNo">No</label>
                  </div>
                </div> */}

                <div className="wedding-form-group">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />

                </div>


              </div>
            ) : (
              <div className='editform'>
                <h2>Confirm your details</h2>
                <p>First Name: {formData.firstName}</p>
                <p>Last Name: {formData.lastName}</p>
                <p>Mobile Number: {formData.mobileNumber}</p>
                <p>Email: {formData.email}</p>
                <p>Event Place: {formData.eventPlace}</p>
                <p>Event Time: {formData.eventTime}</p>
                <p>Package Selected: {formData.packageSelected}</p>
                <p>Event Date: {formData.eventDate}</p>
                {/* <p>Photography: {formData.photography ? 'Yes' : 'No'}</p> */}
                <p>Dining Options: {formData.diningOptions}</p>
                {/* <p>Furnitute Type: {formData.furnitureType}</p> */}
                <p>Music Event: {formData.musicEvent ? 'Yes' : 'No'}</p>
                {/* <p>Dance Event: {formData.danceEvent ? 'Yes' : 'No'}</p> */}
                {/* <p>Drone Photography: {formData.dronePhotography ? 'Yes' : 'No'}</p> */}
                <p>Address: {formData.address}</p>

              </div>
            )}

            <div>
              {isEditing ? (
                <button onClick={handleupdateSubmit} style={{
                  color: "white",
                  background: "orangered",
                  borderRadius: "5px",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  marginBottom: '80px'
                }}>


                  Save</button>


              ) : (
                <>
                  <button className='bheemajsave'

                    onClick={() => {
                      if (window.confirm("Are you sure to submit the details?")) {
                        // If the user confirms, navigate to the next page.
                        // You can replace the following line with your navigation logic.
                        window.location.href = '/pay'; // Example navigation to '/next-page'
                      }
                    }}
                  >
                    Confirm
                  </button>
                  <button onClick={handleEditClick} className='bheemajedit' >Edit</button>
                </>


              )}


            </div>
          </div>

        ) : (
          <form onSubmit={handleSubmit} className='editform'>
            <div className="wedding-form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

            </div>
            {/* Add similar input fields for other form fields */}
            <div className="wedding-form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="wedding-form-group">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="wedding-form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="wedding-form-group">
              <label htmlFor="eventPlace">Event Place:</label>
              <input
                type="text"
                id="eventPlace"
                name="eventPlace"
                value={formData.eventPlace}
                onChange={handleChange}
                required
              />
            </div>
            <div className="wedding-form-group">
              <label htmlFor="eventTime">Event Time:</label>
              <input
                type="time"
                id="eventTime"
                name="eventTime"
                value={formData.eventTime}
                onChange={handleChange}
                required
              />
            </div>
            <div className="wedding-form-group">
              <label htmlFor="packageSelected">Package Selected:</label>
              <select
                id="packageSelected"
                name="packageSelected"
                value={formData.packageSelected}
                onChange={handleChange}
                className="custom-select"
              >
                <option value="Premium Package">Premium Package</option>
                <option value="Golden Package">Golden Package</option>
                <option value="Silver Package">Silver Package</option>
                <option value="Bronze Package">Bronze Package</option>
              </select>
            </div>
            <div className="wedding-form-group">
              <label htmlFor="eventDate">Event Date:</label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
            </div>
            {/* <div className="wedding-form-group">
              <label htmlFor="photography">Photography:</label>
              <select
                id="photography"
                name="photography"
                value={formData.photography}
                onChange={handleChange}
                className="custom-select"
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div> */}
            <div className="wedding-form-group">
              <label htmlFor="diningOptions">Dining Options:</label>
              <select
                id="diningOptions"
                name="diningOptions"
                value={formData.diningOptions}
                onChange={handleChange}
                className="custom-select"
              >
                <option value="">Select Dining Option</option>
                <option value="plated-sit-down">Plated Sit-Down</option>
                <option value="buffet">Buffet</option>
              </select>
            </div>
            {/* <div className="wedding-form-group">
              <label htmlFor="furnitureType">Furniture Type:</label>
              <select
                id="furnitureType"
                name="furnitureType"
                value={formData.furnitureType}
                onChange={handleChange}
                className="custom-select"
              >
                <option value="">Select Furniture Type</option>
                <option value="Traditional">Traditional</option>
                <option value="Modern">Modern</option>
                <option value="Vintage">Vintage</option>
              </select>
            </div> */}

            <div className="wedding-form-group">
              <label htmlFor="musicEvent">Music Event:</label>
              <div className="radio-group">
                <input
                  type="radio"
                  id="musicEventYes"
                  name="musicEvent"
                  value="true"
                  required
                  checked={formData.musicEvent}
                  onChange={handleChange}
                />
                <label htmlFor="musicEventYes">Yes</label>
                <input
                  type="radio"
                  id="musicEventNo"
                  name="musicEvent"
                  value="false"
                  checked={!formData.musicEvent}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="musicEventNo">No</label>
              </div>
            </div>
            {/* <div className="wedding-form-group">
              <label htmlFor="danceEvent">Dance Event:</label>
              <div className="radio-group">
                <input
                  type="radio"
                  id="danceEventYes"
                  name="danceEvent"
                  value="Yes"
                  checked={formData.danceEvent === true}
                  onChange={() => setFormData({ ...formData, "danceEvent": true })}
                  required
                />
                <label htmlFor="danceEventYes">Yes</label>
                <input
                  type="radio"
                  id="danceEventNo"
                  name="danceEvent"
                  value="No"
                  required
                  checked={formData.danceEvent === false}
                  onChange={() => setFormData({ ...formData, "danceEvent": false })}
                />
                <label htmlFor="danceEventNo">No</label>
              </div>
            </div> */}
            {/* <div className="wedding-form-group">
              <label htmlFor="dronePhotography">Drone Photography:</label>
              <div className="radio-group">
                <input
                  type="radio"
                  id="dronePhotographyYes"
                  name="dronePhotography"
                  value="Yes"
                  checked={formData.dronePhotography === true}
                  onChange={() => setFormData({ ...formData, "dronePhotography": true })}
                />
                <label htmlFor="dronePhotographyYes">Yes</label>
                <input
                  type="radio"
                  id="dronePhotographyNo"
                  name="dronePhotography"
                  value="No"
                  required
                  checked={formData.dronePhotography === false}
                  onChange={() => setFormData({ ...formData, "dronePhotography": false })}
                />
                <label htmlFor="dronePhotographyNo">No</label>
              </div>
            </div> */}

            <div className="wedding-form-group">
              <label htmlFor="address">Address:</label>
              <textarea
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />

            </div>
            <Link to="/pay"><button className="custom-book-button">Book</button></Link>
          </form>
        )}
      </div>
      <br></br>
      <div><Footer/></div>
    </div>
  );
}

export default RegistrationForm;
