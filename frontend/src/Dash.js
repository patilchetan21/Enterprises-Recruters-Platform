import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dash.css';

const Dash = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="menu-icon" onClick={handleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>
        <div className="logo">
          {/* your logo goes here */}
        </div>
        <div className="spacer" />
        <div className="user-profile">
          {/* user profile information goes here */}
        </div>
      </header>
      
      <nav className={showMenu ? "sidebar show" : "sidebar"}>
        <ul className="menu">
          <li>
            Dashboard
          </li>
          <li>
            Hiring Candidates
          </li>
          <li>
            Profile Form
          </li>
          <li>
           Commission Page
          </li>
        </ul>
      </nav>
      <main className="content">
        {/* your dashboard content goes here */}
      </main>
    

      <div className="landing-page-options">
        <div className="option">
          <h2>Recruiting Agencies</h2>
          <p> view candidate resumes and Upload Resumes</p>
          <Button>Sign Up</Button>
          {/* <button >Sign Up</button> */}
        </div>
        <div className="option">
          <h2>Enterprises</h2>
          <p>Hire Candidates according to your requirements</p>
          <Button className='but'>Sign Up</Button>
          {/* <button className='but'>Sign Up</button> */}
        </div>
        <div className="landing-page-quote">
        <h1>"The only way to do great work is to love what you do."</h1>
        <p>- Steve Jobs</p>
      </div>
      </div>
      {/* <div className="landing-page-logo">
        <img src={icon} alt="Website Logo" />
      </div> */}
      </div>
    
  );
};

export default Dash;
