import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import "./css/Tracking.css"
import WeightDisplay from "./UI/WeightDisplay";

const Tracking = () => {
  const [progress, setProgress] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [progressCards, setProgressCards] = useState([]);

  const addProgress = () => {
    setProgress([...progress, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    Weight: "",
    Date: "",
    imageURL: "",
    Journal: "",
  };

  const onSubmit = (values) => {
    values.progress = progress;
    console.log(values);


    const newProgressCard = {
      weight: values.Weight,
      date: values.Date,
      image: values.imageURL,
      journal: values.Journal,
    };
    setProgressCards([...progressCards, newProgressCard]);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to remove progress?");
    if (confirmDelete) {
      const updatedProgressCards = [...progressCards];
      updatedProgressCards.splice(index, 1);
      setProgressCards(updatedProgressCards);
    }
  };

  const weightDisplay = progress.map((progressItem) => {
    return (
      <li key={progressItem.name}>
        {progressItem.quantity} {progressItem.name}
      </li>
    );
  });

  const progressCardDisplay = progressCards.map((progressCard, index) => {
    return (
      <div key={index} className="progress-card">
        <button className="Delete-btn" onClick={() => handleDelete(index)}>✖</button>
        <h3>Weight: {progressCard.weight}</h3>
        <p>Date: {progressCard.date}</p>
        <img src={progressCard.image} alt="Progress" />
        <p>Journal: {progressCard.journal}</p>
      </div>
    );
  });

  return (
    <section className="recipe-form">
      <h1 className="recipe-name">Progress Info</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form className="form1" onSubmit={handleSubmit}>
            <input
              placeholder="Weight"
              value={values.Weight}
              onChange={handleChange}
              name="Weight"
            />
             <input
              placeholder="mm / dd / yyyy"
              value={values.Date}
              onChange={handleChange}
              name="Date"
            />
            <input
              placeholder="Paste an Image URL"
              value={values.imageURL}
              onChange={handleChange}
              name="imageURL"
            />

            <textarea
              className="Journal"
              placeholder="Journal your day"
              rows={5}
              value={values.Journal}
              onChange={handleChange}
              name="Journal"
            />
            <button type="submit" className="blue-btn">
              Add Progress
            </button>

            <ul>{weightDisplay}</ul> {/* Render weightDisplay JSX elements here */}

            <div className="progress-card-container">
              {progressCardDisplay}
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default Tracking;
