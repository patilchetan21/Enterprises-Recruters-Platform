import React, { useState } from 'react';
import './CommissionPage.css';
import { useNavigate } from 'react-router-dom';
const CommissionPage = ({ commissions }) => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  }

  return (
    <div className="commission-page">
      <div className="agreement">
        <h2>Commission Agreement</h2>
        <p>
          By accepting this agreement, you agree to pay us a commission for any
          candidates hired through our recruitment services.
        </p>
        <label>
          <input type="checkbox" checked={accepted} onChange={handleAccept} />
          I accept the terms of the commission agreement.
        </label>
      </div>
      {accepted && (
        <div className="commission-table">
          <h2>Received Commissions</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Company Name</th>
                <th>Hired Number</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {commissions.map((commission, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{commission.company}</td>
                  <td>{commission.hiredNumber}</td>
                  <td>{commission.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
        <div>   <button onClick={goBack}>Go Back</button></div>
    </div>
  );
};

export default CommissionPage;
