import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/nike">Nike</Link></li>
          <li><Link to="/adidas">adidas</Link></li>
          <li><Link to="/jordan">Jordan</Link></li>
          <li><Link to="/crocs">Crocs</Link></li>
          <li><Link to="/puma">Puma</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
      <input type="text" placeholder="Search..." className="search-box" />
    </header>
  );
};

export default Header;
