import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "./themes.css";

function Header() {
  const [theme, setTheme] = React.useState("theme1");

  const handleThemeToggle = () => {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.style.display =
      dropdownMenu.style.display === "none" ? "block" : "none";
  };

  const handleThemeSelection = (event) => {
    const selectedTheme = event.target.dataset.theme;
    setTheme(selectedTheme);
  };

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header className={`header ${theme}`}>
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
        🖌
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
          <li>
            <button
              className="theme-option"
              data-theme="theme4"
              onClick={handleThemeSelection}
            >
              Ocean Blue
            </button>
          </li>
          <li>
            <button
              className="theme-option"
              data-theme="theme5"
              onClick={handleThemeSelection}
            >
              Sunset Orange
            </button>
          </li>
          <li>
            <button
              className="theme-option"
              data-theme="theme6"
              onClick={handleThemeSelection}
            >
              Forest Green
            </button>
          </li>
          <li>
            <button
              className="theme-option"
              data-theme="theme7"
              onClick={handleThemeSelection}
            >
              Dusk Purple
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
}
  

export default Header;
