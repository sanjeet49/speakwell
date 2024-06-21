import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudentById, updateStudent } from '../services/studentService';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        dateOfJoining: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await getStudentById(id);
            setStudent(result);
        };
        fetchData();
    }, [id]);

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
            await updateStudent(id, student);
            navigate('/');
        } catch (error) {
            console.error('There was an error updating the student!', error);
        }
    };

    return (
        <div className="container mt-5 mb-5" style={{ paddingBottom: '80px' }}>
            <div className="card shadow-sm">
                <div className="card-body">
                    <h2 className="card-title text-center my-4">Edit Student</h2>
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
                        <button type="submit" className="btn btn-success w-100">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StudentDetail;
