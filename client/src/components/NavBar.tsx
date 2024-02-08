import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../views/HomePage';
import AboutPage from '../views/AboutPage';
import LoginPage from '../views/LoginPage';
import UserPage from '../views/UserPage';
import '../assets/css/components/NavBar.css';
import '../assets/css/global.css';
import NavLink from './NavLink';

const NavBar: React.FC = () => {
  
  return (
    <>
      <nav className="nav-container">
        <ul>
          <NavLink />
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </>
  )
}

export default NavBar;