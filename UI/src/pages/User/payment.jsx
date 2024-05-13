import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import '../../css/payment.css'; // Import the CSS file
import NavBar from "./navbar";
import Footer from "./footer";

const Payment = () => {
    const navigate = useNavigate();
    
    const handleNext = () => {
        navigate('/confirm')
    }
    const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
        <div className='nav'><NavBar/></div>
        <div style={{padding:'60px 0px 0px 0px' ,backgroundColor:'#B7CADB'}}>

      <h1 className="detail-text1">PAYMENT</h1>
      <div className="payment-form">
        <form>
          <label style={{fontSize:'20px',fontWeight:'600'}}>Card Holder's Name</label>
          <input className="contact-input" type="text" name="username" id="username" placeholder="Cardholder's Name"  required /><br /><br />
          <label style={{fontSize:'20px',fontWeight:'600'}}>Card Number</label>
          <input className="contact-input" type="text" name="useremail" id="useremail" placeholder="Card Number"  required /><br /><br />
          <label style={{fontSize:'20px',fontWeight:'600'}}>CVV</label>
          <input className="contact-input" type="password" name="phno" id="phno" placeholder="CVV" required /><br /><br />
          <label style={{fontSize:'20px',fontWeight:'600'}}>Expiry Date</label>
          <DatePicker className="contact-input" selected={startDate} onChange={(date) => setStartDate(date)} /><br />
          <button onClick={handleNext} className="contact-btn">SUBMIT</button>
        </form>
      </div>
        <br></br>
        </div>
        <div><Footer/></div>
    </div>
  );
}

export default Payment;
