import React, { useState, useEffect } from 'react';
import "./Footer.css";

function Footer() {
  const [randomQuote, setRandomQuote] = useState("");

  const quotes = [
    " “The tragedy in life doesn\’t lie in not reaching your goal. The tragedy lies in having no goal to reach.” - Benjamin Mays",
    "“It is never too late to be who you might have been.” - George Eliot",
    " “If there is no struggle, there is no progress.” - Frederick Douglass",
    "“Don\’t go through life, grow through life.” - Eric Butterworth",
    "“Strive not to be a success, but rather to be of value.” - Albert Einstein",
    "Life, is Roblox! -DJ Kahlid",
    '“With self-discipline most anything is possible.” - Theodore Roosevelt',
    '“I hate perfection. To be perfect is to be unable to improve any further.” - Naruto Uzumaki'
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  useEffect(() => {
    setRandomQuote(getRandomQuote());
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="quote-container">
          <p className="quote">{randomQuote}</p>
        </div>
        <div className="footer-logo">改善</div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/aboutus">About</a>
          <a href="/workouts">Workout</a>
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/sheldon.c75/">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/sheldon.c75/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/sheldon.c75/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
