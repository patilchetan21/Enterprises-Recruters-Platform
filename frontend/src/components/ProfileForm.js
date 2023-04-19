import React, { useState } from 'react';
import './ProfileForm.css';
import { useNavigate } from 'react-router-dom';
function ProfileForm() {
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [officeNumber, setOfficeNumber] = useState('');
  const [hrEmail, setHrEmail] = useState('');
  const [hrNumber, setHrNumber] = useState('');
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      orgName,
      email,
      location,
      officeNumber,
      hrEmail,
      hrNumber,
    });
  };

  return (
   <div className='cont'>
     <form className="profile-form" onSubmit={handleSubmit}>
      <h2>Profile Form</h2>
      <div className="form-group">
        <label htmlFor="orgName">Organization Name:</label>
        <input
          type="text"
          id="orgName"
          value={orgName}
          onChange={(event) => setOrgName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="officeNumber">Office Contact Number:</label>
        <input
          type="tel"
          id="officeNumber"
          value={officeNumber}
          onChange={(event) => setOfficeNumber(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="hrEmail">HR Email:</label>
        <input
          type="email"
          id="hrEmail"
          value={hrEmail}
          onChange={(event) => setHrEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="hrNumber">HR Contact Number:</label>
        <input
          type="tel"
          id="hrNumber"
          value={hrNumber}
          onChange={(event) => setHrNumber(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
      <div className='but'>   <button onClick={goBack}>Go Back</button></div>
    </form>
   
   </div>
  );
}

export default ProfileForm;
