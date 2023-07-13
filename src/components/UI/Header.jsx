import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header>
        <h1 className='website-name'>改善 Kaizen</h1>
        <nav>
  <Link to="/">
    <button class="nav-button nav-button-home">Home</button>
  </Link>
  <Link to="/workouts">
    <button class="nav-button nav-button-workouts">Workouts</button>
  </Link>
  <Link to="/tracking">
    <button class="nav-button nav-button-tracking">Tracking</button>
  </Link>
  <Link to="/AboutUs">
    <button class="nav-button nav-button-tracking">About Us</button>
  </Link>
</nav>
    </header>
  )
}

export default Header