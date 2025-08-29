import React, { useState } from 'react';
import '../css/Dashboard.css';
import Loading from '../components/Loading'
function AddMember() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        age: '',
        fees: '',
    });
    const [message, setMessage] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await fetch('http://localhost:5001/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('User added successfully!');
                window.alert("User Added Successfully");
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    password: '',
                    age: '',
                    fees: '',
                });
            } else {
                setMessage(data.error || 'Something went wrong.');
            }
        } catch (err) {
            setMessage('Error connecting to the server.');
            console.error(err);
        }
    };



    return (
        <Loading>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form-box">
                    <h2>Add Member</h2>

                    <input style={{ border: '2px solid black' }} type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                    <input style={{ border: '2px solid black' }} type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                    <input style={{ border: '2px solid black' }} type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input style={{ border: '2px solid black' }} type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={{ width: '90%', border: '2px solid black' }}
                        />
                        <button type="button" onClick={togglePassword} className="toggle-btn button1" >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    <input style={{ border: '2px solid black' }} type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
                    <input style={{ border: '2px solid black' }} type="number" name="fees" placeholder="Fees" value={formData.fees} onChange={handleChange} required />

                    <button type="submit" className='button1'>Add</button>
                </form>
            </div>
        </Loading>
    );
}

export default AddMember;
