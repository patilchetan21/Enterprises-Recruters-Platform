
import React, { useState } from 'react';
import './Dashboardenterprise.css'


const Dasboardenterprise = () => {
    const [jobRole, setJobRole] = useState('');
    const [keySkills, setKeySkills] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`Job Role: ${jobRole}`);
    }
    
  return (
    <>
     <div>
   
      <section className="hire-candidate-section">
        <div className="hire-candidate-section__content">
          <h1 className="hire-candidate-section__heading">Hire a Candidate</h1>
         
        </div>
      </section>
    </div>
    <div>
   

  <form className="form" onSubmit={handleSubmit}>
    <div className="form__group">
      <label htmlFor="jobRole">Job Role</label>
      <input type="text" id="jobRole" value={jobRole} onChange={(e) => setJobRole(e.target.value)} />
      <label htmlFor="jobRole">Key Skills</label>
      <input type="text" id="jobRole" value={keySkills} onChange={(e) => setKeySkills(e.target.value)} />
      
    </div>
    <button className="form__button" type="submit">Submit</button>
  </form>

    </div>
    </>
  )
}

export default Dasboardenterprise