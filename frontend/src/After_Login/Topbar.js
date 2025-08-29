import React from 'react';
import '../css/topbar.css'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";


function Topbar() {
    const navigate = useNavigate();

    const logout = () => {
        const confirmBox = window.confirm(
            "Do you want to logout?"
        )
        if (confirmBox) {
            navigate('/')
        }
    }
    return (
        <div className='topbar'>
            <h2 className='top_h1'>FitsyncX</h2>
            <div className='topbar_right' >
                <button className='logout' onClick={logout}>Logout</button>
                <LogoutIcon style={{ fontSize: '30px', color: 'white' }} />
            </div>
        </div >
    )
}

export default Topbar;