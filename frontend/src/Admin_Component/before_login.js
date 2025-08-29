import React from 'react';
import '../css/beforelogin_admin.css';
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";

function Before_login_admin() {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button className='admin_btn' style={
                    {
                        backgroundColor: 'orangered',
                        textAlign: "center",
                        width: '30%',
                        height: '10%',
                        fontSize: "2rem",
                        borderRadius: '10px',
                        border: "2px solid red",
                        cursor: 'pointer'
                    }} onClick={() => navigate('/admin/login')}>Login</button>
            </div>
        </div>
    )
};
export default Before_login_admin;
