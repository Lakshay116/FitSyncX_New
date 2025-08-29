import React, { useState } from 'react';
import '../css/beforelogin_admin.css';
import '../css/Login.css';
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";

// 👁 import icons
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Admin_Login = () => {
    const navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // 👁 toggle state

    const emailChangeHandler = (e) => setMail(e.target.value);
    const passwordChangeHandler = (e) => setPassword(e.target.value);

    const login = async () => {
        await fetch("http://localhost:5001/api/admin/login", {
            method: "POST",
            body: JSON.stringify({
                email: mail,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data['msg'] === "Logged In") {
                    console.log("Logged In success")
                    navigate('/admin/user')
                } else {
                    console.log("user Not Verified")
                }
            })
    }

    return (
        <div>
            <Navbar />
            <div style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className='login_main'>
                    <div className='login_div'>
                        <h1 style={{ color: 'orangered' }}>Admin Log In</h1>
                        <div className='login_form'>

                            {/* Email Input */}
                            <input
                                name="email"
                                type="email"
                                className="login_input"
                                placeholder="Email"
                                autoComplete="off"   // 🚫 disable suggestions
                                onChange={emailChangeHandler}
                                value={mail}
                                style={{ marginLeft: '6%', outline: "none" }}
                            />
                            <div style={{ width: '70%', height: '2px', backgroundColor: 'orangered', marginLeft: '15%' }}></div>

                            {/* Password Input with Eye */}
                            <div style={{ position: "relative", width: "70%", margin: "auto" }}>
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    className="login_input"
                                    placeholder="Password"
                                    autoComplete="off"
                                    onChange={passwordChangeHandler}
                                    value={password}
                                    style={{ width: "100%", outline: "none" }}
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: "absolute",
                                        right: "10px",
                                        top: "70%",
                                        transform: "translateY(-50%)",
                                        cursor: "pointer",
                                        color: "orangered"
                                    }}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                            <div style={{ width: '70%', height: '2px', backgroundColor: 'orangered', marginLeft: '15%' }}></div>

                            <button className="submit-contact" style={{ marginTop: '10vh' }} onClick={login}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin_Login;
