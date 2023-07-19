import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import "./css/Tracking.css";
import Home from "./Home";

const Tracking = () => {
  const [progress, setProgress] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [progressCards, setProgressCards] = useState([]);
  const [latestWeight, setLatestWeight] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [fileError, setFileError] = useState(""); 
  const [goalWeight, setGoalWeight]= useState("")


  const handleGoalWeightSubmit = (event) => {
    event.preventDefault();
  

  const addProgress = () => {
    setProgress([...progress, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const form = event.target;
    const formData = new FormData(form);
    const newGoalWeight = formData.get("goalWeightInput");
    setGoalWeight(newGoalWeight);
    form.reset();
  };

  const initialValues = {
    Weight: "",
    Date: "",
    Journal: "",
  };

  const onSubmit = (values) => {
    if (!imageFile) {
      setFileError("Please provide a progress photo."); 
      return;
    }

    setFileError(""); 
    values.progress = progress;
    console.log(values);

    const newProgressCard = {
      weight: values.Weight,
      date: values.Date,
      image: imageFile,
      journal: values.Journal,
    };
    setProgressCards([...progressCards, newProgressCard]);
    setLatestWeight(values.Weight);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove progress?"
    );
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
        <button
          className="Delete-btn"
          onClick={() => handleDelete(index)}
        >
          ✖
        </button>
        <h3>Weight: {progressCard.weight}</h3>
        <p>Date: {progressCard.date}</p>
        <img src={URL.createObjectURL(progressCard.image)} alt="Progress" />
        <p>Journal: {progressCard.journal}</p>
      </div>
    );
  });

  return (
    <section className="progress-form">
      <h1 className="progress">Progress Info</h1>
      <form className="goal-weight-form" onSubmit={handleGoalWeightSubmit}>
        <input
          type="number"
          name="goalWeightInput"
          placeholder="Set Goal Weight"
        />
        <button type="submit" className="blue-btn">
          Set Goal Weight
        </button>
      </form>
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
              type="date"
              placeholder="mm / dd / yyyy"
              value={values.Date}
              onChange={handleChange}
              name="Date"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              name="imageURL"
            />

           
            {fileError && <div className="error-message">{fileError}</div>}

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

            <ul>{weightDisplay}</ul>

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
