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
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Candidate Search</h1>
      {candidates.length === 0 ? (
        <p className="text-lg font-semibold">No more candidates to review.</p>
      ) : currentCandidate ? (
        <CandidateCard candidate={currentCandidate} />
      ) : null}
      <div className="flex mt-4 space-x-4">
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          +
        </button>
        <button
          onClick={handleNext}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>
      </div>

      {/* Display saved candidates */}
      {savedCandidates.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Saved Candidates</h2>
          <ul className="mt-4">
            {savedCandidates.map((candidate, index) => (
              <li key={index} className="mb-2">
                <div className="border p-2 rounded shadow-md">
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
