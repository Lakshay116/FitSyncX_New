import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import '../css/userAttendence.css';
import Loading from "../components/Loading";

const UserAttendance = ({ userId }) => {
    const [attendance, setAttendance] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({ present: 0, absent: 0 });

    // Fetch attendance from backend
    const fetchAttendance = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`https://fitsyncx-new.onrender.com/api/attendance/${userId}`);
            setAttendance(res.data);

            // Calculate stats
            const presentCount = res.data.filter(a => a.status === 'Present').length;
            const absentCount = res.data.filter(a => a.status === 'Absent').length;
            setStats({ present: presentCount, absent: absentCount });
        } catch (err) {
            console.error('Failed to fetch attendance:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAttendance();
    }, [userId]);

    const markPresentToday = async () => {
        const today = new Date().toISOString().split('T')[0];
        try {
            await axios.post(`${process.env.REACT_APP_BE_URL}/api/attendance/mark`, {
                user_id: userId,
                date: today,
                status: 'Present'
            });
            fetchAttendance();
        } catch (err) {
            console.error('Error marking present:', err);
        }
    };

    // Calendar styling by date
    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const dateStr = date.toISOString();
            const record = attendance.find((a) => a.date === dateStr);

            if (record?.status === 'Present') return 'present-day'; // Green background
            if (record?.status === 'Absent') return 'absent-day';   // Red background
        }
        return null;
    };

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const dateStr = date.toISOString().split('T')[0];
            const record = attendance.find((a) => a.date === dateStr);

            if (record) {
                return (
                    <div className="day-indicator">
                        {record.status === 'Present' ? '✓' : '✗'}
                    </div>
                );
            }
        }
        return null;
    };

    // const tomorrow = () => {
    //     let d = new Date();
    //     d.setDate(d.getDate() + 1);
    //     return d;
    // };

    const isTodayMarked = attendance.find(
        (a) => selectedDate.toLocaleDateString() === new Date().toLocaleDateString() && a.status === 'Present'
    );

    const selectedDateRecord = attendance.find(
        (a) => a.date === selectedDate.toISOString()
    );

    return (
        <Loading>
            <div className="attendance-container">
                <h2 style={{ marginBottom: '10px' }}>📆 Gym Attendance Tracker</h2>

                <div className="attendance-stats">
                    <div className="stat-card present">
                        <span>Present: {stats.present}</span>
                    </div>
                    <div className="stat-card absent">
                        <span>Absent: {stats.absent}</span>
                    </div>
                </div>

                <div className="calendar-wrapper">
                    <Calendar
                        onChange={setSelectedDate}
                        value={selectedDate}
                        tileClassName={tileClassName}
                        tileContent={tileContent}
                        className="gym-calendar"
                    />
                </div>

                <div className="attendance-details">
                    {selectedDateRecord ? (
                        <p>
                            On {selectedDate.toLocaleDateString()} you were
                            <span className={selectedDateRecord.status.toLowerCase()}>
                                {selectedDateRecord.status}
                            </span>
                        </p>
                    ) : (
                        <p>No record for {selectedDate.toLocaleDateString()}</p>
                    )}
                </div>

                <button
                    className={`mark-button ${isTodayMarked ? 'marked' : ''}`}
                    onClick={markPresentToday}
                    disabled={isTodayMarked || loading}
                >
                    {loading ? 'Loading...' :
                        isTodayMarked ? '✅ Attendance Marked' : '🟢 Mark Today as Present'}
                </button>
            </div>
        </Loading>
    );
};

export default UserAttendance;

