// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav>
      <h1>Skilledity</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/landing">Courses</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><button>Sign Up</button></li>
        <li><button>Login</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
