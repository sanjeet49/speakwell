import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllStudents, deleteStudent } from '../services/studentService';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [studentsPerPage] = useState(5);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllStudents();
            setStudents(result);
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        await deleteStudent(id);
        setStudents(students.filter(student => student.id !== id));
    };

    // Get current students
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleNext = () => {
        if (currentPage < Math.ceil(students.length / studentsPerPage)) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(students.length / studentsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="container mt-5 mb-5" style={{ paddingBottom: '80px' }}>
            <h2 className="my-4 text-center">Students</h2>
            <table className="table table-hover table-bordered shadow-sm">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date of Joining</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentStudents.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.address}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>{student.dateOfJoining}</td>
                            <td>
                                <Link to={`/students/${student.id}`} className="btn btn-primary btn-sm mr-2">Edit</Link>
                                <button onClick={() => handleDelete(student.id)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <button onClick={handlePrevious} disabled={currentPage === 1} className="page-link">Previous</button>
                    </li>
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <button onClick={() => paginate(number)} className="page-link">
                                {number}
                            </button>
                        </li>
                    ))}
                    <li className="page-item">
                        <button onClick={handleNext} disabled={currentPage === Math.ceil(students.length / studentsPerPage)} className="page-link">Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default StudentList;
