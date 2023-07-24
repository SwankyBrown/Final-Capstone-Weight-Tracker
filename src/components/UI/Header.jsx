import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import "./themes.css";
import AuthContext from "../../store/authContex";

function Header() {
  const [theme, setTheme] = useState("theme1");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Fix the variable name
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
     setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    authCtx.logout();
    navigate("/Login");
    setShowLogoutModal(false);
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const handleThemeToggle = () => {
    setIsDropdownVisible((prev) => !prev); // Toggle dropdown visibility
  };

  const handleThemeSelection = (event) => {
    const selectedTheme = event.target.dataset.theme;
    setTheme(selectedTheme);
  };

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return authCtx.token ? (
    <header className={`header ${theme}`}>
      <h1 className="website-name">改善 Kaizen</h1>
      {/* <div className="logged-in-message">Logged in as {authCtx.username}</div> */}
      <nav>
        <Link to="/">
          <button className="nav-button nav-button-home">Home</button>
        </Link>
        <div className="dropdown-menu-workouts">
          <Link to= "/workoutsmain">
          <button className="nav-button nav-button-workouts">Workouts</button>
          </Link>
          <div className="dropdown-content">
            <Link to="/workouts">
              <button className="nav-button nav-button-at-home">At Home</button>
            </Link>
            <Link to="/workouts/gym">
              <button className="nav-button nav-button-gym">Gym</button>
            </Link>
          </div>
        </div>
        <Link to="/tracking">
          <button className="nav-button nav-button-tracking">Tracking</button>
        </Link>
        <Link to="/AboutUs">
          <button className="nav-button nav-button-tracking">About Us</button>
        </Link>
        <button className="nav-button nav-button-tracking" onClick={handleLogout}>
          Logout
        </button>
        <button className="theme" onClick={handleThemeToggle}>
          🖌
        </button>
        
        {isDropdownVisible && (
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
        )}
   {showLogoutModal && (
          <div className="modal-container">
            <div className="modal">
              <h3>Are you sure you want to logout?</h3>
              <div className="modal-buttons">
                <button onClick={confirmLogout}>Yes</button>
                <button onClick={cancelLogout}>No</button>
              </div>
            </div>
          </div>
        )}
        
      </nav>
    </header>
  ) : null;
}

export default Header;
