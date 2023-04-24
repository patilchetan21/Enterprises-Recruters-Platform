import React, { useState } from "react";

export const UploadResumes = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [shortlistedCandidates, setShortlistedCandidates] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Upload the file to the server
    const formData = new FormData();
    formData.append("zipFile", selectedFile);
    const response = await fetch("/upload", {
      method: "POST",
      body: formData,
    });

    // Parse the response and extract the shortlisted candidates
    const { shortlisted } = await response.json();
    setShortlistedCandidates(shortlisted);
  };

  const handleCandidateSelection = (candidateEmail) => {
    const updatedCandidates = shortlistedCandidates.map((candidate) => {
      if (candidate.email === candidateEmail) {
        return { ...candidate, selected: !candidate.selected };
      } else {
        return candidate;
      }
    });
    setShortlistedCandidates(updatedCandidates);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="zipFile">Upload a Resumes File:</label>
        <input type="file" id="zipFile" name="zipFile" onChange={handleFileChange} required />
        <button type="submit">Submit</button>
      </form>
      {shortlistedCandidates.length > 0 && (
        <div>
          <h2>Shortlisted Candidates:</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Skills</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {shortlistedCandidates.map((candidate) => (
                <tr key={candidate.email}>
                  <td>{candidate.name}</td>
                  <td>{candidate.email}</td>
                  <td>{candidate.skills}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={candidate.selected}
                      onChange={() => handleCandidateSelection(candidate.email)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
