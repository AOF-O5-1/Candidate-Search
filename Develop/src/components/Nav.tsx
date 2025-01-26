import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">
        <Link to="/">Home</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/candidates" className="hover:underline">
            Candidates
          </Link>
        </li>
        <li>
          <Link to="/saved" className="hover:underline">
            Saved Candidates
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
