import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Sidebar from '../After_Login/user_sidebar'
import Topbar from '../After_Login/Topbar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import "../css/Admin.css"
import Dashboard from './Dashboard';
import AddMember from './Addmember';
import Members from './Members';
import Trainers from './Trainer';
import AddTrainers from './AddTrainer';
import LoadingScreen from '../components/Loading'






const Admin = () => {
    const [isSelected, setIsSelected] = useState(0);
    const SidebarData = [
        {
            title: 'Dashboard',
            icon: <SpaceDashboardIcon />,
            index: 0
        },
        {
            title: 'Members',
            icon: <CardMembershipIcon />,
            index: 1
        },
        {
            title: 'Add Members',
            icon: <AddReactionIcon />,
            index: 2
        },
        {
            title: 'Trainers',
            icon: <RecentActorsIcon />,
            index: 3
        },
        {
            title: 'Add Trainers',
            icon: <PersonAddAltIcon />,
            index: 4
        }
    ]
    const RenderComponent = ({ index }) => {
        switch (index) {
            case 0: return <Dashboard />
                break;
            case 1: return <Members />
                break;
            case 2: return <AddMember />
                break;
            case 3: return <Trainers />
                break;
            case 4: return <AddTrainers />
                break;
            default:
                break;
        }
    }
    return (
        <LoadingScreen>
            <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white', display: "flex" }}>
                <hr />
                <Topbar />
                <Sidebar sidebardata={SidebarData} isSelected={isSelected} setIsSelected={setIsSelected} />
                <div className='admin_main'>
                    <RenderComponent index={isSelected} ></RenderComponent>
                </div>
            </div>
        </LoadingScreen>
    );
};

export default Admin;
