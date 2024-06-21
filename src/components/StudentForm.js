import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createStudent } from '../services/studentService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentForm = () => {
    const [student, setStudent] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        dateOfJoining: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((prevStudent) => ({
            ...prevStudent,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createStudent(student);
            toast.success('Student created successfully!', {
                position: 'top-center',
                autoClose: 2000,
            });
            setTimeout(() => {
                navigate('/students');
            }, 3000);
        } catch (error) {
            toast.error('There was an error creating the student!', {
                position: 'top-center',
                autoClose: 3000,
            });
        }
    };

    return (
        <div className="container mt-5 mb-5" style={{ paddingBottom: '80px' }}>
            <ToastContainer />
            <div className="card shadow-sm">
                <div className="card-body">
                    <h2 className="card-title text-center my-4">Add Student</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label className="form-label">Name:</label>
                            <input type="text" className="form-control" name="name" value={student.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Address:</label>
                            <input type="text" className="form-control" name="address" value={student.address} onChange={handleChange} required />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Email:</label>
                            <input type="email" className="form-control" name="email" value={student.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Phone:</label>
                            <input type="text" className="form-control" name="phone" value={student.phone} onChange={handleChange} required />
                        </div>
                        <div className="form-group mb-4">
                            <label className="form-label">Date of Joining:</label>
                            <input type="date" className="form-control" name="dateOfJoining" value={student.dateOfJoining} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-success w-100">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StudentForm;
