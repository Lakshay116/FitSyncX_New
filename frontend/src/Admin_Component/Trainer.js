import React, { useEffect, useState } from 'react';
import '../css/Dashboard.css';
import Loading from '../components/Loading'

const Trainer = () => {
    const [trainers, setTrainers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const trainersPerPage = 4;

    useEffect(() => {
        fetchTrainers();
    }, []);

    const fetchTrainers = async () => {
        try {
            const res = await fetch('http://localhost:5001/api/trainers');
            const data = await res.json();
            setTrainers(data);
        } catch (err) {
            console.error('Error fetching trainers:', err);
        }
    };

    const handleDelete = async (id) => {
        const confirm = window.confirm('Are you sure you want to delete this trainer?');
        if (!confirm) return;

        try {
            const res = await fetch(`http://localhost:5001/api/trainers/${id}`, {
                method: 'DELETE',
            });

            const result = await res.json();
            if (res.ok) {
                const updatedTrainers = trainers.filter((t) => t.id !== id);
                setTrainers(updatedTrainers);

                // Adjust page if last item on last page is deleted
                const totalPages = Math.ceil(updatedTrainers.length / trainersPerPage);
                if (currentPage > totalPages) setCurrentPage(totalPages || 1);

                alert('Trainer deleted successfully');
            } else {
                alert(result.error || 'Failed to delete trainer');
            }
        } catch (err) {
            console.error('Delete error:', err);
            alert('Server error while deleting');
        }
    };

    // Pagination calculations
    const indexOfLastTrainer = currentPage * trainersPerPage;
    const indexOfFirstTrainer = indexOfLastTrainer - trainersPerPage;
    const currentTrainers = trainers.slice(indexOfFirstTrainer, indexOfLastTrainer);
    const totalPages = Math.ceil(trainers.length / trainersPerPage);

    const goToPage = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <Loading>
            <div className="trainer-list-container" s>
                <h2 style={{ marginBottom: '2%' }}>All Trainers</h2>
                <div className="trainer-cards">
                    {currentTrainers.length > 0 ? (
                        currentTrainers.map((trainer) => (
                            <div className="trainer-card" key={trainer.id}>
                                <img
                                    src={`http://localhost:5001/uploads/${trainer.image}`}
                                    alt={trainer.name}
                                    className="trainer-image"
                                />
                                <div className="trainer-info">
                                    <h3 style={{ color: 'orangered' }}>{trainer.name}</h3>
                                    <p><strong>Email:</strong> {trainer.email}</p>
                                    <p><strong>Phone:</strong> {trainer.phone}</p>
                                    <p><strong>Age:</strong> {trainer.age}</p>
                                    <p><strong>Address:</strong> {trainer.address}</p>
                                    <button style={{ backgroundColor: 'orangered' }}
                                        className="delete-btn"
                                        onClick={() => handleDelete(trainer.id)}
                                    >
                                        🗑 Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No trainers found.</p>
                    )}
                </div>

                {/* Pagination */}
                <div className="pagination">
                    <button onClick={prevPage} disabled={currentPage === 1}>⬅ Prev</button>
                    {[...Array(totalPages)].map((_, idx) => (
                        <button
                            key={idx + 1}
                            onClick={() => goToPage(idx + 1)}
                            className={currentPage === idx + 1 ? 'active' : ''}
                        >
                            {idx + 1}
                        </button>
                    ))}
                    <button onClick={nextPage} disabled={currentPage === totalPages}>Next ➡</button>
                </div>
            </div>
        </Loading>
    );
};

export default Trainer;