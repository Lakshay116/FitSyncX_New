import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
} from 'chart.js';
import '../css/userDashboard.css';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
);

const Dashboard = () => {
    // Dashboard tile data

    const stats = {
        totalWorkouts: 6,
        caloriesBurned: 3000,
        totalHours: 60,
        activeDays: 6
    };

    // Pie Chart Data (Workout Type Distribution)
    const pieData = {
        labels: ['Cardio', 'Strength', 'Flexibility', 'HIIT'],
        datasets: [
            {
                label: 'Workout Type',
                data: [30, 40, 15, 15],
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0']
            }
        ]
    };

    // Line Chart Data (Progress Over Weeks)
    const lineData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Calories Burned',
                data: [2500, 3200, 2900, 3600],
                fill: false,
                backgroundColor: '#007bff',
                borderColor: '#007bff'
            }
        ]
    };

    return (
        <div className="dashboard-container">
            {/* <h2>🏋️‍♂️ Gym User Dashboard</h2>   */}

            <div className="dashboard-tiles">
                <div className="tile">
                    <h3>{stats.totalWorkouts}</h3>
                    <p>Weekly Workout Sessions</p>
                </div>
                <div className="tile">
                    <h3>{stats.caloriesBurned}</h3>
                    <p>Calories Burned</p>
                </div>
                <div className="tile">
                    <h3>{stats.totalHours} hrs</h3>
                    <p>Hours Trained per Month</p>
                </div>
                <div className="tile">
                    <h3>{stats.activeDays}</h3>
                    <p>Active Days</p>
                </div>
            </div>

            <div className="charts-section">
                <div className="chart-box">
                    <h4>Workout Type Distribution</h4>
                    <Pie data={pieData} />
                </div>

                <div className="chart-box">
                    <h4>Calories Burned - Weekly</h4>
                    <Line data={lineData} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
