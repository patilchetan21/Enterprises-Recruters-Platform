import React, { useState } from 'react';
import './RecruitmentPage.css';

import { useNavigate } from 'react-router-dom';


function RecruitmentPage() {
  const [resume, setResume] = useState(null);
  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  }

  const handleResumeUpload = (event) => {
    setResume(event.target.files[0]);
  };
  



  const handleJobPosting = (event) => {
    event.preventDefault();
    const jobTitle = event.target.elements.jobTitle.value;
    const jobDescription = event.target.elements.jobDescription.value;
    const company = event.target.elements.company.value;
    const newJob = { jobTitle, jobDescription, company };
    setJobs([...jobs, newJob]);
    event.target.reset();
  };

  return (
    <div className="recruitment-page-container">
      <div className="recruitment-page-header">
        <h1>Help find Dream Jobs</h1>
        <p>
          "Choose a job you love, and you will never have to work a day in your
          life." - Confucius
        </p>
       
      </div>
      <div className="resume-upload">
        <h2>Upload Resume's</h2>
        <input type="file" accept=".pdf" onChange={handleResumeUpload} />
        {resume && <p>Resume's uploaded successfully!</p>}
      </div>
    
   <div>   <button onClick={goBack}>Go Back</button></div>
     
    </div>
  );
}

export default RecruitmentPage;
