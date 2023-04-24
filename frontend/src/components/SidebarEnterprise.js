import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


const SidebarEnterprise = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"HireCandidate",
            icon:<FaTh/>
        },
        {
          path:"/upload-resumes",
          name:"UploadResumes",
          icon:<FaTh/>
      },
        {
            path:"/selected-student",
            name:"SelectedStudent",
            icon:<FaUserAlt/>
        },
        {
            path:"/update-interview-status",
            name:"UpdateInterviewStatus",
            icon:<FaRegChartBar/>
        },
        {
            path:"/setting-enterprise",
            name:"SettingEnterprise",
            icon:<FaCommentAlt/>
        },
        {
            path:"/help-enterprise",
            name:"HelpEnterprise",
            icon:<FaShoppingBag/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h3 style={{display: isOpen ? "block" : "none"}} className="logo">Enterprise Dashboard</h3>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main className='dashboard-routes'>{children}</main>
        </div>
    );
};

export default SidebarEnterprise;