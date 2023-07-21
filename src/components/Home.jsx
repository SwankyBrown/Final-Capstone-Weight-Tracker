import React, { useState } from "react";
import "./css/Home.css";
import Tracking from "./Tracking";

const Home = () => {
  const [latestWeight, setLatestWeight] = useState(0); // Set your initial latestWeight value here.
  const [goalWeight, setGoalWeight] = useState(0); // Set your initial goalWeight value here.

  const handleWeightUpdate = (newWeight) => {
    setLatestWeight(newWeight);
  };

  return (
    <div>
      <h1 className="cur-weight">Current Weight:</h1>
      <p className="WeightDisplay">{latestWeight} LB</p>
      <h1 className="goal-weight">Goal: {goalWeight} LB</h1>
      <h1>Pounds From Goal: {latestWeight - goalWeight} LB</h1>
      <Tracking latestWeight={latestWeight} goalWeight={goalWeight} onWeightUpdate={handleWeightUpdate} />
    </div>
  );
};

export default Home;