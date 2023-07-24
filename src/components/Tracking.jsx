import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../store/authContex";
import axios from "axios";
import "./css/Tracking.css";
import Home from "./Home";

const Tracking = () => {
  const [goalWeight, setGoalWeight] = useState(null);
  const [goalWeightDate, setGoalWeightDate] = useState("");
  const [goalWeightSubmitted, setGoalWeightSubmitted] = useState(false);
  const [weight, setWeight] = useState("");
  const [weightDate, setWeightDate] = useState("");
  const [journal, setJournal] = useState("");
  const [progressCards, setProgressCards] = useState([]);
  const { userId } = useContext(AuthContext);
  const [weightGoalId, setWeightGoalId] = useState(null)



  const checkWeightGoal = () => {
    axios
    .get(`http://localhost:3817/api/weight-goal/${userId}`)
    .then ((res) => {
      if (res.data) {
        setWeightGoalId(res.data.id);
        setGoalWeight(res.data.goalWeight);
        setGoalWeightDate(res.data.date)
        setWeight(res.data.weight)
        setGoalWeightSubmitted(true)
        
        axios
        .get(`http://localhost:3817/api/trackings/${res.data.id}`)
        .then ((res) => {
          setProgressCards(res.data)
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

  const handleGoalWeightSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3817/api/weight-goal", {
        goalWeight,
        userId: userId,
        date: goalWeightDate,
        
      })
      .then((res) => {
        console.log(res.data);
        setGoalWeightSubmitted(true);
        setWeightGoalId(res.data.id)
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  };

  const handleTrackingSubmit = (event) => {
    event.preventDefault();

    const data = {
      weight: weight,
      date: weightDate,
      userId: userId,
      journal: journal,
      weightGoalId: weightGoalId
    };
console.log(userId);
    console.log(data);
    axios
      .post("http://localhost:3817/api/tracking", data)
      .then((res) => {
        console.log("Successfully submitted tracking data:", res.data);
        setProgressCards((prevProgressCards) => [
          ...prevProgressCards,
          {
            currentWeight: weight,
            date: weightDate,
            journal: journal,
          },
        ]);
        setWeight("");
        setWeightDate("");
        setJournal("");
      })
      .catch((error) => {
        console.error("Error submitting tracking data:", error);
      });
  };



  return (
    <section className="progress-form">
      <h1 className="progress">Progress Info</h1>

      {goalWeightSubmitted ? (
        <div className="goal-weight-button-container">
          <button type="button" className="blue-btn set-goal-btn" onClick={() => setGoalWeightSubmitted(false)}>
            Edit Goal Weight
          </button>
        </div>
      ) : (
        <form className={`goal-weight-form ${goalWeightSubmitted ? "hidden" : ""}`} onSubmit={handleGoalWeightSubmit}>
          <input
            onChange={(e) => {
              setGoalWeight(e.target.value);
            }}
            type="number"
            name="goalWeightInput"
            placeholder="Goal Weight"
          />
          <input
            type="date"
            placeholder="mm / dd / yyyy"
            onChange={(e) => {
              setGoalWeightDate(e.target.value);
            }}
            name="Date"
          />
          <button type="submit" className="blue-btn">
            Set Goal Weight
          </button>
        </form>
      )}

      <form className="form1" onSubmit={handleTrackingSubmit}>
        <input
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          name="Weight"
        />
        <input
          type="date"
          placeholder="mm / dd / yyyy"
          value={weightDate}
          onChange={(e) => setWeightDate(e.target.value)}
          name="Date"
        />
        <textarea
          className="Journal"
          placeholder="Journal your day"
          rows={5}
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
          name="Journal"
        />

        <button type="submit" className="blue-btn">
          Add Progress
        </button>
      </form>

      <div className="progress-card-container">
        {progressCards.map((progressCard, index) => {
          const officalDate = Date.parse(progressCard.date)
          let stringDate = new Date(officalDate)
          stringDate = stringDate.toDateString().split("");
          stringDate.splice(3,0,",")
          return <div key={index} className="progress-card">
            <h3>Weight: {progressCard.currentWeight}</h3>
            <p>Date: {stringDate.join("")}</p>
            <p>Journal: {progressCard.journal}</p>
          </div>
})}
      </div>
    </section>
    
  );
};

export default Tracking;
