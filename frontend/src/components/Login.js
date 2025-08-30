import '../css/Login.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'


// 👁 import icons (you can use react-icons or plain emoji)
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
    const navigate = useNavigate();

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // 👁 toggle state

    const emailChangeHandler = (e) => setMail(e.target.value);
    const passwordChangeHandler = (e) => setPassword(e.target.value);

    const login = async () => {
        await fetch(`https://fitsyncx-new.onrender.com/api/login`, {
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
                    if (data['user']['is_verified'] === 1) {
                        console.log("Logged In success")
                        navigate('/user')
                    }
                    else {
                        console.log("user Not Verified")
                    }
                }
            })
    }

    return (
        <div>
            <Navbar />
            <div className='login_main'>
                <div className='login_div'>
                    <h1 style={{ color: 'orangered' }}>Log In</h1>
                    <div className='login_form'>
                        <input
                            autoComplete='off'
                            name="email"
                            type="text"
                            className="login_input"
                            placeholder="Email"
                            onChange={emailChangeHandler}
                            value={mail}
                            style={{ marginLeft: "6%", outline: "none" }}
                        />
                        <div style={{ width: '70%', height: '2px', backgroundColor: 'orangered', marginLeft: '15%' }}></div>


                        <div style={{ position: "relative", width: "70%", margin: "auto" }}>
                            <input
                                autoComplete='off'
                                name="password"
                                type={showPassword ? "text" : "password"} // toggle
                                className="login_input"
                                placeholder="Password"
                                onChange={passwordChangeHandler}
                                value={password}
                                style={{ width: "100%", outline: "none" }}
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: "absolute",
                                    right: "20px",
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

                        <button className="submit-contact" style={{ marginTop: '10vh' }} onClick={login}>Login</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;

