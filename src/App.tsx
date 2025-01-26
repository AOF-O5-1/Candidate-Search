//import React from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';
import ErrorPage from './pages/ErrorPage';

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/candidates" element={<CandidateSearch />} />
        <Route path="/saved" element={<SavedCandidates />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
