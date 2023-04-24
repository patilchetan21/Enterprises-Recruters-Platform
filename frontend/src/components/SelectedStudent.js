import React, { useEffect, useState } from "react";
import axios from "axios";

export const SelectedStudent = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await axios.get("/api/selected-candidates/");
      setCandidates(response.data);
    };
    fetchCandidates();
  }, []);

  return (
    <div>
      <h1>Selected Candidates</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Skills</th>
            <th>Agency Name</th>
            <th>Job Role</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td>{candidate.email}</td>
              <td>{candidate.skills}</td>
              <td>{candidate.agency_name}</td>
              <td>{candidate.job_role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
