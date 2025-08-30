import React, { useEffect, useState } from 'react';
import '../css/Dashboard.css';
import Loading from '../components/Loading'

function Members() {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;


    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BE_URL}/api/users`);
            const data = await res.json();
            setUsers(data);
        } catch (err) {
            console.error('Error fetching users:', err);
        }
    };


    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this user?');
        if (!confirmDelete) return;

        try {
            const res = await fetch(`${process.env.REACT_APP_BE_URL}/api/users/${id}`, {
                method: 'DELETE',
            });

            const data = await res.json();
            if (res.ok) {
                // Refresh the list
                setUsers(users.filter(user => user.id !== id));
            } else {
                alert(data.error || 'Delete failed');
            }
        } catch (err) {
            console.error('Delete error:', err);
            alert('Server error while deleting');
        }
    };

    const filteredUsers = users.filter((user) =>
        user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };
    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };



    return (
        <Loading>
            <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', fontFamily: 'cursive' }}>Members Detail</h2>

                <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1); // reset to first page when searching
                    }}
                    style={{ padding: '10px', marginBottom: '20px', width: '97.5%' }}
                />

                <table border="1" cellPadding="10" cellSpacing="0" width="100%">
                    <thead style={{ backgroundColor: 'black', color: 'white' }}>
                        <tr style={{ backgroundColor: 'black' }}>
                            <th style={{ backgroundColor: 'black' }}>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Fees</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.length > 0 ? (
                            currentUsers.map(user => (
                                <tr key={user.id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>{user.fees}</td>
                                    <td >
                                        <button className='delete-btn'
                                            onClick={() => handleDelete(user.id)}
                                            style={{
                                                backgroundColor: 'orangered',
                                                color: 'white',
                                                border: 'none',
                                                padding: '5px 10px',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                marginLeft: '18%'
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan="6">No matching users found.</td></tr>
                        )}
                    </tbody>
                </table>

                {/* Pagination Controls */}
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        style={{ marginRight: '10px' }}
                    >
                        Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => goToPage(index + 1)}
                            style={{
                                margin: '0 3px',
                                fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
                                backgroundColor: currentPage === index + 1 ? 'black' : '',
                                color: currentPage === index + 1 ? 'white' : '',
                                padding: '5px 10px',
                                border: '1px solid #ccc',
                                cursor: 'pointer'
                            }}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        style={{ marginLeft: '10px' }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </Loading>
    );
}

export default Members;
