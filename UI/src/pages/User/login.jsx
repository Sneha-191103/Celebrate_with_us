import React, { useState } from "react";
import '../../css/login.css';
import Confetti from 'react-confetti';
import { BsCake } from "react-icons/bs";
import { LiaBirthdayCakeSolid, LiaGlassCheersSolid } from "react-icons/lia";
// import vite from '../../../public/wave.svg';
import ConfettiExplosion from 'react-confetti-explosion';
import { useNavigate } from 'react-router-dom';

const FunctionA = ({ toggle }) => {
    const [user,setUser]=useState({
        email:'',
        password:''
    });
    const handlechange=(e)=>{
        setUser({
            ...user,[e.target.name]:e.target.value
        });
    }
    const navigate = useNavigate();
    const SubmitLogin=(e)=>{
        localStorage.setItem('xuserEmail', user.email);

        if (localStorage.getItem('xuserEmail') === "admin@gmail.com") {
            navigate("/sidebar/dashboard"); 
        }
    }
    return <div><form className="login-form" onSubmit={(e)=>SubmitLogin(e)}>
        <div style={{fontWeight:'1000' , fontSize:'20px'}}>LOGIN</div>
    <div>
        <label>Email :&emsp;&emsp;&emsp;&emsp;</label>
        <input type="text" placeholder="Enter your email" name="email" value={user.email} onChange={handlechange} required className="login-input"></input>
    </div>
    <div>
        <label>Password :&emsp;&nbsp;&emsp;</label>
        <input type="password" placeholder="Enter password" name="password" value={user.password} onChange={handlechange} required className="login-input"></input>
    </div>
    <div style={{padding:'10px'}}>
        <button type="submit" className="log-button">Login</button>
    </div>  
    <div style={{fontSize:'10px'}}>Doesn't have an account?
    <span className="link-log" onClick={toggle}>Sign Up</span></div>
    
    </form></div>;
  };

  const FunctionB = ({ toggle }) => {
    return <div className="login-model"><form className="login-form">
        <div style={{fontWeight:'1000' , fontSize:'20px'}}>SIGNUP</div>
            <div>
                <label>Username:&emsp;&emsp;&nbsp;&nbsp;</label>
                <input type="text" placeholder="Enter your name" required  className="login-input"></input>
            </div>
            <div>
                <label>Email:&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;</label>
                <input type="text" placeholder="Enter your email" required  className="login-input"></input>
            </div>
            <div>
                <label>Phone Number:</label>
                <input type="tel" placeholder="Enter Phone Number" required className="login-input"></input>
            </div>
            <div>
                <label>Password:&emsp;&emsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="password" placeholder="Enter password" required className="login-input"></input>
            </div>
            <div style={{padding:'10px'}}>
                <button type="submit" className="log-button">Sign Up</button>
            </div>  
            <div style={{fontSize:'10px'}}>Already have an account?
    <span className="link-log" onClick={toggle}>Sign In</span></div>
            </form>
        </div>;
  };
  

export default function Login({ onClose }){
    const [showFunctionB, setShowFunctionB] = useState(false);

    const toggleFunction = () => {
        setShowFunctionB(!showFunctionB);
    };
    const handleClose = () => {
        onClose(); 
      };
    
    // const [isExploding, setIsExploding] = React.useState(true);
    return(
        <div onClick={onClose} className="login-popups-menu"> 
        {/* <Link to="/"><button>close</button></Link> */}
            {/* <video autoplay muted loop>
                <source src="https://vod-progressive.akamaized.net/exp=1710494130~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3935%2F15%2F394677254%2F1676023708.mp4~hmac=62019a12c84b12671a08c78c1bbb12293284cec88e2ad994903f2b6ee9ba8923/vimeo-prod-skyfire-std-us/01/3935/15/394677254/1676023708.mp4?filename=file.mp4" type="video/mp4" />
                </video>
            <img src={vite} width={'100%'}></img> */}
            <div className="box" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleClose} className="close-popup">x</button>
            <div><h2>LETS PARTY  <BsCake  style={{color:"white"}}/></h2></div> 
            <div>
            {showFunctionB ? <FunctionB toggle={toggleFunction} /> : <FunctionA toggle={toggleFunction} />}
            </div>
            </div>
        </div>  
    );
}