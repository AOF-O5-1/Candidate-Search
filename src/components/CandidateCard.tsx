import React from 'react';
import { Candidate } from '../interfaces/CandidateInterface';

const CandidateCard: React.FC<{ candidate: Candidate }> = ({ candidate }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md w-full max-w-md mb-4 bg-white">
      <img src={candidate.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full mb-2" />
      <p><strong>Name:</strong> {candidate.name || 'N/A'}</p>
      <p><strong>Username:</strong> {candidate.login}</p>
      <p><strong>Location:</strong> {candidate.location || 'N/A'}</p>
      <p><strong>Email:</strong> {candidate.email || 'N/A'}</p>
      <p><strong>Company:</strong> {candidate.company || 'N/A'}</p>
      <p><strong>Profile:</strong> <a href={candidate.html_url} target="_blank" rel="noreferrer">View on GitHub</a></p>
    </div>
  );
};

export default CandidateCard;
