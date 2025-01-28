import React, { useEffect, useState } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import { Candidate } from '../interfaces/CandidateInterface';

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [, setSavedCandidates] = useState<Candidate[]>(
    JSON.parse(localStorage.getItem('savedCandidates') || '[]')
  );

  useEffect(() => {
    const fetchCandidates = async () => {
      const users = await searchGithub();
      if (users.length > 0) {
        const detailedUser = await searchGithubUser(users[0].login);
        setCurrentCandidate(detailedUser);
      }
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
      <div className="flex mt-6 space-x-8">
      <button
        onClick={handleSave}
        className="bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full text-3xl shadow-lg"
      >
        ➕
      </button>
      <button
        onClick={handleNext}
        className="bg-red-600 text-white w-14 h-14 flex items-center justify-center rounded-full text-3xl shadow-lg"
      >
        ➖
      </button>
      </div>

      
    </div>
  );
};

export default CandidateSearch;
