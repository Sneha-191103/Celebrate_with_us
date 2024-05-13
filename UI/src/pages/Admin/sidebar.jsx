import React, { useState } from 'react';
import '../../css/sidebar.css'
import {
    FaTh,
    FaBars,
    FaComments,
    FaSignOutAlt
}from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { GiPartyPopper } from "react-icons/gi";
import { MdFastfood, MdMiscellaneousServices, MdOutlineFoodBank,MdOutlineBorderColor } from 'react-icons/md';
import { BsCake } from "react-icons/bs";

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/sidebar/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/sidebar/theme",
            name:"Manage Theme",
            icon:<GiPartyPopper />
        },
        {
            path:"/sidebar/cake",
            name:"Cake management",
            icon:<BsCake />
        },
        // {
        //     path:"/sidebar/user",
        //     name:"User",
        //     icon:<MdMiscellaneousServices />
        // },
        {
            path:"/sidebar/book",
            name:"Booking Status",
            icon:<MdOutlineBorderColor />
        },
        {
            path:"/sidebar/menu",
            name:"Manage catering",
            icon:<MdFastfood/>
        }
    ]
    const navigate=useNavigate();
   
    const name=localStorage.getItem('xuserEmail');
    const SubmitLogout=(e)=>{
        e.preventDefault();
       
        localStorage.clear();
        
        navigate('/');
        
    }
    
    return (
        <>
      
      
                  
        <div className="containered">
            
           <div style={{width: isOpen ? "300px" : "50px" ,height:"100%"}} className='sidebar'>
               <div className="top_section">
            {/* <h1><FaUser/></h1> */}
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">{name}</h1>
                   <div style={{marginLeft: isOpen ? "10px" : "-15px"}} className="bars">
                       <FaBars onClick={toggle}/>
               </div>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
                   </div>
                  <br></br>
                   <br></br>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="iconed">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <br>
               </br>
               <br></br>
               <br></br>
               <br></br>
               <div  className="link" activeclassName="active">
                           <div className="iconed"><FaSignOutAlt/></div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text" onClick={SubmitLogout}>Logout</div>
                       </div>
               <br></br>
              
           </div>
          <main>
           
          <Outlet>
           <div className='child' >
            {children}   </div>
                
           </Outlet>
           </main>
          
        </div>
        </>
    );
};

export default Sidebar;