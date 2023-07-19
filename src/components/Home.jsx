import React from "react";
import "./css/Home.css";
import Tracking from "./Tracking";

const Home = ({ latestWeight, goalWeight }) => {
  const poundsFromGoal = latestWeight - goalWeight;
  
  return (
    <div>
      <h1 className="cur-weight">Current Weight:</h1>
      <p className="WeightDisplay">{latestWeight}300 LB</p>
      <h1 className="goal-weight">Goal: {goalWeight} LB</h1>
      <h1>Pounds From Goal: {poundsFromGoal} LB</h1>
    </div>
  );
};

export default Home;