import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetail from './components/StudentDetail';
import WelcomePage from './components/WelcomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import CourseDetail from './components/CourseDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import logo from './images/speak.png'; // Import the logo image

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="app-container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 shadow-sm">
                        <Link className="navbar-brand d-flex align-items-center" to="/">
                            <img src={logo} alt="Speakwell Institute" className="logo-image" />
                            <span className="ml-2">Speakwell Institute</span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/students/new">Add Student</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/students">Student List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="content-container">
                        <Routes>
                            <Route path="/" element={<WelcomePage />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/contact" element={<ContactUs />} />
                            <Route path="/courses/:id" element={<CourseDetail />} />
                            <Route
                                path="/students"
                                element={<ProtectedRoute element={<StudentList />} />}
                            />
                            <Route
                                path="/students/new"
                                element={<ProtectedRoute element={<StudentForm />} />}
                            />
                            <Route
                                path="/students/:id"
                                element={<ProtectedRoute element={<StudentDetail />} />}
                            />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
