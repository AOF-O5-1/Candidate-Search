import React from 'react';
import { Candidate } from '../interfaces/CandidateInterface';

const CandidateCard: React.FC<{ candidate: Candidate }> = ({ candidate }) => {
  return (
    <div>
      <img src={candidate.avatar_url} alt="Avatar" />
      <p><strong>Name:</strong> {candidate.name}</p>
      <p><strong>Username:</strong> {candidate.login}</p>
      <p><strong>Location:</strong> {candidate.location}</p>
      <p><strong>Email:</strong> {candidate.email}</p>
      <p><strong>Company:</strong> {candidate.company}</p>
      <p><strong>Profile:</strong> <a href={candidate.html_url} target="_blank" rel="noreferrer">View on GitHub</a></p>
    </div>
  );
};

export default CandidateCard;
