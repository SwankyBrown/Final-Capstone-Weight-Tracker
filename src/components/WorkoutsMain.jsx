import React from 'react';
import './css/WorkoutsMain.css';


function WorkoutsMain() {
  return (
    <div>
      <h1>Workouts</h1>
      <p>
        Everybody's bodies are different, and what works well for one person may not work the same way for another. It's important to listen to your body and find the workout routine that suits you best. Whether it's at home or in the gym, consistency and dedication are key to achieving your fitness goals.
      </p>

      <div className="articles-container">

        <div className="article">
          <h2>Walking for Fat Loss</h2>
          <p>
            Walking can be an effective way to lose fat if combined with a caloric deficit. Getting around 8,000 steps a day can help you burn calories and improve your overall fitness. Make sure to maintain a healthy diet and keep track of your daily steps to see positive results.
          </p>
        </div>


        <div className="article">
          <h2>Lifting Heavy Weights for Muscle Building</h2>
          <p>
            Lifting heavy weights is essential for building muscle mass and strength. Incorporate compound exercises like squats, deadlifts, and bench presses into your routine. Remember to focus on proper form and gradually increase the weights to challenge your muscles and promote growth.
          </p>
        </div>


        <div className="article">
          <h2>HIIT Workouts for Weight Loss</h2>
          <p>
            High-Intensity Interval Training (HIIT) can be highly effective for weight loss, especially for individuals who find running challenging due to their weight. HIIT involves short bursts of intense exercise followed by brief recovery periods. This approach can help burn more calories in a shorter time and improve cardiovascular fitness.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkoutsMain;
