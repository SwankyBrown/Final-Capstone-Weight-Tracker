import React from "react";
import './css/Home.css'
import Tracking from "./Tracking";

const Home = ({ latestWeight }) => {
  return (
    <div>
      <h1>Current Weight:</h1>
      <p className="WeightDisplay">{latestWeight}300 LB</p>
      <h1 className="goal-weight">Goal: 250 LB</h1>
      <h1>Pounds From Goal: 50 LB</h1>
    </div>
  );
};

export default Home;