import React from 'react';
import CandidateCard from '../components/CandidateCard';
import { Candidate } from '../interfaces/CandidateInterface';

const SavedCandidates: React.FC = () => {
  const savedCandidates: Candidate[] = JSON.parse(localStorage.getItem('savedCandidates') || '[]');

  return (
    <div>
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        savedCandidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))
      ) : (
        <p>No potential candidates have been accepted yet.</p>
      )}
    </div>
  );
};

export default SavedCandidates;

