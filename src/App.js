import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from "react";
import Header from './components/UI/Header';
import Workouts from './components/Workouts';
import Tracking from './components/Tracking';
import WorkoutsMain from './components/WorkoutsMain';
import Home from './components/Home';
import Footer from './components/UI/Footer';
import AboutUs from './components/AboutUs';
import './components/UI/themes.css'
import './App.css';
import LoginPage from './components/LoginPage';
import WorkoutsGym from './components/WorkoutsGym';



function App() {
  return (
    <>
    
    <div className="App">

     <Header/>
     <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts/gym" element={<WorkoutsGym />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path='/workoutsmain' element={<WorkoutsMain />} />
     </Routes>
    <Footer />
    </div>
    </>
  );
}

export default App;
