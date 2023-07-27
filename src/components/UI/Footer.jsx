import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import AuthContext from "../../store/authContex";

function Footer() {
  const [randomQuote, setRandomQuote] = useState("");

  const authCtx = useContext(AuthContext);

  const quotes = [
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  useEffect(() => {
    setRandomQuote(getRandomQuote());
  }, []);


  return authCtx.token ? (
    <footer className="footer">
      <div className="footer-content">
        <div className="quote-container">
          <p className="quote">{randomQuote}</p>
        </div>
        <div className="footer-logo">改善</div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About</Link>
          <Link to="/workouts">Workout Now</Link>
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/sheldon.c75/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/sheldon.c75/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/sheldon.c75/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  ) : null;
}

export default Footer;
