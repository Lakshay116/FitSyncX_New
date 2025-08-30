import React, { useState } from 'react'
import "animate.css/animate.compat.css"
import VDO from "../images/contact.mp4"
import Navbar from './Navbar';

function Contact() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [text, setText] = useState('');

    const emailChangeHandler = (e) => setMail(e.target.value);
    const nameChangeHandler = (e) => setName(e.target.value);
    const textChangeHandler = (e) => setText(e.target.value);

    const contactUs = async () => {
        await fetch(`${process.env.REACT_APP_BE_URL}/api/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: mail,
                text: text,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.message);
                window.alert(data.message);

                // ✅ Clear form after submit
                setName("");
                setMail("");
                setText("");
            })
            .catch((err) => {
                console.error("Error:", err);
                window.alert("Something went wrong!");
            });
    };

    return (
        <div>
            <Navbar />
            <video style={{ width: '100vw' }} className='videoTag' autoPlay loop muted>
                <source src={VDO} type='video/mp4' />
            </video>

            <div className='contact_div'>
                <div className='contact_form'>
                    <h1 className='h1_cnt'>Contact Us</h1>

                    <input
                        name="name"
                        type="text"
                        className="contact_input"
                        placeholder="Name"
                        value={name}                 // ✅ bind to state
                        onChange={nameChangeHandler}
                    />

                    <input
                        name="email"
                        type="email"
                        className="contact_input"
                        placeholder="Email"
                        value={mail}                 // ✅ bind to state
                        onChange={emailChangeHandler}
                    />

                    <textarea
                        style={{ width: '95%' }}
                        name="text"
                        className="contact_text"
                        placeholder="Message"
                        value={text}                 // ✅ bind to state
                        onChange={textChangeHandler}
                    ></textarea>

                    <button className="submit-contact" onClick={contactUs}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;
