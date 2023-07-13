import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  const handleThemeToggle = () => {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display =
      dropdownMenu.style.display === 'none' ? 'block' : 'none';
  };

  const handleThemeSelection = (event) => {
    const theme = event.target.dataset.theme;
    // Apply the selected theme to your application
    console.log('Selected theme:', theme);
  };

  return (
    <header>
      <h1 className="website-name">改善 Kaizen</h1>
      <nav>
        <Link to="/">
          <button className="nav-button nav-button-home">Home</button>
        </Link>
        <Link to="/workouts">
          <button className="nav-button nav-button-workouts">Workouts</button>
        </Link>
        <Link to="/tracking">
          <button className="nav-button nav-button-tracking">Tracking</button>
        </Link>
        <Link to="/AboutUs">
          <button className="nav-button nav-button-tracking">About Us</button>
        </Link>
        <Link to="/Login">
          <button className="nav-button nav-button-tracking">Login</button>
        </Link>
        <button className="theme" onClick={handleThemeToggle}>
          Change theme
        </button>
        <div className="dropdown-menu">
          <ul>
            <li>
              <button
                className="theme-option"
                data-theme="theme1"
                onClick={handleThemeSelection}
              >
                Dark
              </button>
            </li>
            <li>
              <button
                className="theme-option"
                data-theme="theme2"
                onClick={handleThemeSelection}
              >
                Light
              </button>
            </li>
            <li>
              <button
                className="theme-option"
                data-theme="theme3"
                onClick={handleThemeSelection}
              >
                Radiant Blossom
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;