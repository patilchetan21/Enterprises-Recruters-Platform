import React from 'react';
import './SigningJob.css';

function SigningJob() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Create your account</h2>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
        </div>
        <div className="form-group">
          <label htmlFor="full-name">Full name:</label>
          <input type="text" id="full-name" name="full-name" required />
        </div>
        <button type="submit">Sign up</button>
        <p>Already have an account? <a href="#">Login now</a></p>
      </form>
    </div>
  );
}

export default SigningJob;
