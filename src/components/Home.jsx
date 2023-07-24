import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../store/authContex";
import "./css/Home.css";
import axios from "axios";

const Home = () => {
 const {userId} = useContext(AuthContext)
 const [goalWeight, setGoalWeight] = useState(null)
 const [lastEntry, setLastEntry] = useState(null)

  const checkWeightGoal = () => {
    axios
    .get(`http://localhost:3817/api/weight-goal/${userId}`)
    .then ((res) => {
      if (res.data) {
        setGoalWeight(res.data.goalWeight);
        
        axios
        .get(`http://localhost:3817/api/trackings/${res.data.id}`)
        .then ((res) => {
          const sorted = res.data.sort()
          setLastEntry(sorted[sorted.length - 1].currentWeight) 
          
        })
        .catch((error) => {
          console.error("this shit broken", error);
        })
      }
    })
    .catch((error) => {
      console.error("Error getting goal weight", error)
    })
  };

  useEffect(() => {
    checkWeightGoal();
  }, []); 
 
console.log(goalWeight);
const poundsFromGoal = lastEntry - goalWeight  
  return (
    <div>
      <h1 className="cur-weight">Current Weight:</h1>
      <p className="WeightDisplay"> {lastEntry} LB</p>
      <h1 className="goal-weight">Goal: {goalWeight} LB</h1>
      <h1>Pounds From Goal: {poundsFromGoal} LB</h1>
    </div>
  );
};

export default Home;