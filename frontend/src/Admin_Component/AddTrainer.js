import React, { useState } from 'react';
import '../css/Dashboard.css';
import Loading from '../components/Loading'
const AddTrainer = () => {
    const [trainer, setTrainer] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        age: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTrainer({ ...trainer, [name]: value });
    };

    const handleImageChange = (e) => {
        setTrainer({ ...trainer, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.entries(trainer).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            const res = await fetch('http://localhost:5001/api/trainers', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();
            if (res.ok) {
                alert('Trainer added successfully!');
                setTrainer({
                    name: '',
                    email: '',
                    address: '',
                    phone: '',
                    age: '',
                    image: null,
                });
            } else {
                alert(data.error || 'Failed to add trainer.');
            }
        } catch (err) {
            console.error('Add trainer error:', err);
            alert('Server error.');
        }
    };

    return (
        <Loading>
            <div className="trainer-form-container">
                <h2 style={{ color: 'orangered' }}>Add Trainer</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={trainer.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={trainer.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={trainer.address}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={trainer.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={trainer.age}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />

                    <button style={{ backgroundColor: 'orangered' }} type="submit">Add Trainer</button>
                </form>
            </div>
        </Loading>
    );
};

export default AddTrainer;