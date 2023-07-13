import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/UI/Header';
import Workouts from './components/Workouts';
import Tracking from './components/Tracking';
import Home from './components/Home';
import Footer from './components/UI/Footer';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
     <Header/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/Aboutus" element={<AboutUs />} />
     </Routes>
     <Footer />
    </div>
    </>
  );
}

export default App;
