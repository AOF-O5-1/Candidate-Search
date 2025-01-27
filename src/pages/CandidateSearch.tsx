import React, { useEffect, useState } from 'react';
import { searchGithub } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import { Candidate } from '../interfaces/CandidateInterface';

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(
    JSON.parse(localStorage.getItem('savedCandidates') || '[]')
  );

  useEffect(() => {
    const fetchCandidates = async () => {
      const data: Candidate[] = await searchGithub();
      setCandidates(data);
      setCurrentCandidate(data[0] || null);  // Guard against empty data
    };
    fetchCandidates();
  }, []);

  const handleSave = () => {
    if (currentCandidate) {
      setSavedCandidates(prevState => {
        const updatedSavedCandidates = [...prevState, currentCandidate];
        localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedCandidates));
        return updatedSavedCandidates;
      });
    }
    handleNext();
  };

  const handleNext = () => {
    // Remove the first candidate and update the state
    setCandidates(prevCandidates => {
      const remainingCandidates = prevCandidates.slice(1);
      setCurrentCandidate(remainingCandidates[0] || null);  // Update to next candidate
      return remainingCandidates;
    });
  };

  return (
    <div >
      <h1 >Candidate Search</h1>
      {candidates.length === 0 ? (
        <p>No more candidates to review.</p>
      ) : currentCandidate ? (
        <CandidateCard candidate={currentCandidate} />
      ) : null}
      <div>
        <button
          onClick={handleSave}
          
        >
          +
        </button>
        <button
          onClick={handleNext}
          
        >
          -
        </button>
      </div>

      {/* Display saved candidates */}
      {savedCandidates.length > 0 && (
        <div>
          <h2>Saved Candidates</h2>
          <ul>
            {savedCandidates.map((candidate, index) => (
              <li key={index}>
                <div>
                  <p>{candidate.name}</p>
                  <p>{candidate.bio}</p>
                  {/* Display other candidate information here */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;
