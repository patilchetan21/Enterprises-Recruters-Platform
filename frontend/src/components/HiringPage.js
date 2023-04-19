import React, { useState } from "react";
import "./HiringPage.css";
import { useNavigate } from "react-router-dom";
const HiringPage = () => {
  const [jobPosition, setJobPosition] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className="form-container">
    
      <form onSubmit={handleSubmit}>
        <h1>Hiring Page</h1>
        <div className="form-group">
          <label htmlFor="jobPosition">Job Position:</label>
          <input
            type="text"
            id="jobPosition"
            name="jobPosition"
            value={jobPosition}
            onChange={(e) => setJobPosition(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="skills">Skills Required:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <div>   <button onClick={goBack}>Go Back</button></div>
    </div>
  );
};

export default HiringPage;
