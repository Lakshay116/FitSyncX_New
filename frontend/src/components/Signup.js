
import '../css/Login.css';
import React, { Component, useState } from 'react'
import "animate.css/animate.compat.css"
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'


function About() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPasword] = useState('');


    const emailChangeHandler = (e) => {
        setMail(e.target.value)
    }
    const passwordChangeHandler = (e) => {
        setPasword(e.target.value)
    }
    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }
    const phoneChangeHandler = (e) => {
        setPhone(e.target.value)
    }


    const signup = async () => {
        const result = await fetch(`http://localhost:5001/api/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                "name": name,
                "email": mail,
                "password": password,
                "phone": phone
            })
        }).then(response => response.json()).then(data => {
            console.log(data)
            window.alert("User Added Successfully");
            setMail("");
            setName("")
            setPasword("")
            setPhone("")
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='login_main'>
                <div className='login_div'>
                    <h1 style={{ color: 'orangered' }}>Sign Up</h1>
                    <div className='login_form'>
                        <input autoComplete='off' value={name} name="name" type="text" className="sign_input" placeholder="Name" onChange={nameChangeHandler} />
                        <div style={{ width: '70%', height: '2px', backgroundColor: 'orangered', marginLeft: '15%' }}></div>
                        <input autoComplete='off' value={mail} name="email" type="text" className="sign_input" placeholder="Email" onChange={emailChangeHandler} />
                        <div style={{ width: '70%', height: '2px', backgroundColor: 'orangered', marginLeft: '15%' }}></div>
                        <input autoComplete='off' value={phone} name="phone" type="text" className="sign_input" placeholder="Phone" onChange={phoneChangeHandler} />
                        <div style={{ width: '70%', height: '2px', backgroundColor: 'orangered', marginLeft: '15%' }}></div>
                        <input autoComplete='off' value={password} name="password" type="text" className="sign_input" placeholder="Password" onChange={passwordChangeHandler} />
                        <div style={{ width: '70%', height: '2px', backgroundColor: 'orangered', marginLeft: '15%' }}></div>
                        <button class="submit-contact" style={{ marginTop: '6vh' }} onClick={signup}>Register</button>
                        {/* <input class="submit-contact" type="submit" value="LogIn" style={{ marginTop: '6vh' }} /> */}
                    </div>
                </div>
            </div >
            <Footer />
        </div>
    )
}


export default About   