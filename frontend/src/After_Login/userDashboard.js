import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../css/userDashboard.css';
import '../css/Dashboard.css';
import Sidebar from './user_sidebar'
import Topbar from './Topbar'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import UserAttendance from './userAttendance';
import Dashboard from './DB';
import WorkoutPlan from './workoutPlan';

import Members from '../Admin_Component/Members';
import Trainers from '../Admin_Component/Trainer';
import AddTrainers from '../Admin_Component/AddTrainer';

const UserDashboard = () => {
    const [isSelected, setIsSelected] = useState(0);
    const SidebarData = [
        {
            title: 'Dashboard',
            icon: <SpaceDashboardIcon />,
            index: 0
        },
        {
            title: 'Workout Plan',
            icon: <FitnessCenterIcon />,
            index: 1
        },
        {
            title: 'Attendence',
            icon: <CalendarMonthIcon />,
            index: 2
        },
        // {
        //     title: 'Schedule',
        //     icon: <ScheduleIcon />,
        //     index: 3
        // }
    ]
    const RenderComponent = ({ index }) => {
        switch (index) {
            case 0: return <Dashboard />
                break;
            case 1: return <WorkoutPlan />
                break;
            case 2: return <UserAttendance userId={1} />
                break;
            case 3: return <Trainers />
                break;
            default:
                break;
        }
    }

    return (
        <div className='userdash' style={{ width: '100vw', height: '100vh', backgroundColor: 'white', display: "flex" }}>
            <hr />
            <Topbar />
            <Sidebar sidebardata={SidebarData} isSelected={isSelected} setIsSelected={setIsSelected} />
            <div className='admin_main' style={{ overflow: 'scroll' }}>
                <RenderComponent index={isSelected} ></RenderComponent>
            </div>
        </div>
    );
};

export default UserDashboard;
