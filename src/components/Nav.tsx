import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <ul>
        <li>
          <Link to="/candidates">
            Candidates
          </Link>
        </li>
        <li>
          <Link to="/saved">
            Saved Candidates
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
