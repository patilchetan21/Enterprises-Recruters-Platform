import React, { useState } from 'react';
import './Hirecandidates.css';
import { useNavigate } from 'react-router-dom';
const HireCandidates = ({ candidates }) => {
  const [selectedCandidates, setSelectedCandidates] = useState([candidates]);
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  }
  const handleSelectCandidate = (id) => {
    const index = selectedCandidates.indexOf(id);
    if (index !== -1) {
      const updatedSelectedCandidates = [...selectedCandidates];
      updatedSelectedCandidates.splice(index, 1);
      setSelectedCandidates(updatedSelectedCandidates);
    } else {
      setSelectedCandidates([...selectedCandidates, id]);
    }
  }

  return (
    <div className="hire-candidates">
      <h1 className="hire-candidates__heading">Hire Candidates</h1>
      <table className="candidates-table">
        <thead>
          <tr>
            <th className="candidates-table__header-cell"><input type="checkbox" /></th>
            <th className="candidates-table__header-cell">Position</th>
            <th className="candidates-table__header-cell">Email</th>
            <th className="candidates-table__header-cell">Contact</th>
            <th className="candidates-table__header-cell">Status</th>
            <th className="candidates-table__header-cell">Commission</th>
            <th className="candidates-table__header-cell">Agency</th>
            <th className="candidates-table__header-cell">Agency Contact</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(candidate => (
            <tr key={candidate.id} className={selectedCandidates.includes(candidate.id) ? 'selected' : ''} onClick={() => handleSelectCandidate(candidate.id)}>
              <td className="candidates-table__cell"><input type="checkbox" checked={selectedCandidates.includes(candidate.id)} onChange={() => handleSelectCandidate(candidate.id)} /></td>
              <td className="candidates-table__cell">{candidate.position}</td>
              <td className="candidates-table__cell">{candidate.email}</td>
              <td className="candidates-table__cell">{candidate.contact}</td>
              <td className={`candidates-table__cell candidates-table__cell--${candidate.status.toLowerCase()}`}>{candidate.status}</td>
              <td className="candidates-table__cell">{candidate.commission}%</td>
              <td className="candidates-table__cell">{candidate.agency}</td>
              <td className="candidates-table__cell">{candidate.agencyContact}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="hire-candidates__submit-button" disabled={selectedCandidates.length === 0}>Submit</button>

      <div className='but'>   <button onClick={goBack}>Go Back</button></div>
    </div>
  );
}

export default HireCandidates;
