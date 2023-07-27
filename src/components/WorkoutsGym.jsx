import React from 'react';
import './css/WorkoutsGym.css'; // Import the CSS file for styling

function WorkoutsGym() {
  const gymWorkouts = [
    {
      day: 'Monday',
      workout: 'Leg Day',
      sets: 4,
      reps: 8,
      exercises: [
        'Barbell Squats',
        'Leg Press',
        'Lunges',
        'Leg Extensions',
        'Romanian Deadlifts',
        'Calf Raises',
      ],
    },
    {
      day: 'Tuesday',
      workout: 'Chest and Triceps',
      sets: 3,
      reps: 10,
      exercises: [
        'Bench Press',
        'Incline Dumbbell Press',
        'Chest Flyes',
        'Triceps Dips',
        'Triceps Pushdowns',
        'Overhead Triceps Extensions',
      ],
    },
    {
      day: 'Wednesday',
      workout: 'Back and Biceps',
      sets: 4,
      reps: 8,
      exercises: [
        'Deadlifts',
        'Pull-Ups',
        'Bent-Over Rows',
        'Seated Cable Rows',
        'Barbell Bicep Curls',
        'Hammer Curls',
      ],
    },
    {
      day: 'Thursday',
      workout: 'Shoulder and Abs',
      sets: 3,
      reps: 12,
      exercises: [
        'Seated Dumbbell Shoulder Press',
        'Lateral Raises',
        'Front Raises',
        'Reverse Flyes',
        'Russian Twists',
        'Planks',
      ],
    },
    {
      day: 'Friday',
      workout: 'Leg Day (Optional)',
      sets: 4,
      reps: 8,
      exercises: [
        'Barbell Squats',
        'Leg Press',
        'Lunges',
        'Leg Extensions',
        'Romanian Deadlifts',
        'Calf Raises',
      ],
    },
    {
      day: 'Saturday',
      workout: 'Back and Biceps (Optional)',
      sets: 4,
      reps: 8,
      exercises: [
        'Deadlifts',
        'Pull-Ups',
        'Bent-Over Rows',
        'Seated Cable Rows',
        'Barbell Bicep Curls',
        'Hammer Curls',
      ],
    },
    {
      day: 'Sunday',
      workout: 'Rest Day',
      sets: 0,
      reps: 0,
      exercises: [],
    },
  ];

  return (
    <>
      <h1>Gym Workouts</h1>
      <div className='spotify'>
        <iframe
          style={{ borderRadius: '1px' }}
          src='https://open.spotify.com/embed/playlist/6KrvaIKquX76SH9isR2dzj?utm_source=generator'
          width='100%'
          height='352'
          frameBorder='0'
          allowFullScreen=''
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        ></iframe>
      </div>

      <div className='workout-cards'>
        {gymWorkouts.map((workout, index) => (
          <div key={index} className='workout-card'>
            <h2>{workout.day}</h2>
            <p>Workout: {workout.workout}</p>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
            <p>Exercises:</p>
            <ul>
              {workout.exercises.map((exercise, i) => (
                <li key={i}>{exercise}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default WorkoutsGym;
