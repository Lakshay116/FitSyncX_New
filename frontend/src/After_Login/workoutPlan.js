import React from 'react';
import { FitnessCenter, Timer, Repeat } from '@mui/icons-material';
import '../css/workoutPlan.css';

const workoutPlan = [
    {
        day: 'Day 1 & 4: Back & Biceps',
        exercises: [
            { name: 'Pull-Ups', sets: 3, reps: 8 },
            { name: 'Barbell Rows', sets: 4, reps: 10 },
            { name: 'Lat Pulldown', sets: 3, reps: 12 },
            { name: 'Bicep Curl', sets: 3, reps: 12 },
        ]
    },
    {
        day: 'Day 2 & 5: Chest & Triceps',
        exercises: [
            { name: 'Bench Press', sets: 4, reps: 8 },
            { name: 'Incline Dumbbell Press', sets: 3, reps: 10 },
            { name: 'Push-Ups', sets: 3, reps: 15 },
            { name: 'Triceps Dips', sets: 3, reps: 12 },
        ]
    },
    {
        day: 'Day 3 & 6: Legs & Shoulders',
        exercises: [
            { name: 'Squats', sets: 4, reps: 10 },
            { name: 'Leg Press', sets: 3, reps: 12 },
            { name: 'Lateral Raises', sets: 3, reps: 12 },
            { name: 'Shoulder Press', sets: 3, reps: 10 },
        ]
    }
];

const WorkoutPlan = () => (
    <div className="plan-container-enhanced">
        <h2 className="plan-title-enhanced">6-Day Double Muscle Split Workout Plan</h2>

        {workoutPlan.map((day, idx) => (
            <div key={idx} className="day-section">
                <h3>{day.day}</h3>
                <table className="workout-table-enhanced">
                    <thead>
                        <tr>
                            <th>Exercise <FitnessCenter fontSize="small" /></th>
                            <th>Sets <Repeat fontSize="small" /></th>
                            <th>Reps <Timer fontSize="small" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {day.exercises.map((ex, i) => (
                            <tr key={i}>
                                <td>{ex.name}</td>
                                <td>{ex.sets}</td>
                                <td>{ex.reps}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ))}

        <footer className="rest-footer-enhanced">
            🛌 <strong>Sunday</strong>: Rest and Recovery — Recharge to crush next week!
        </footer>
    </div>
);

export default WorkoutPlan;
