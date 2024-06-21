import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {}, {
                auth: {
                    username: username,
                    password: password,
                }
            });
            if (response.status === 200) {
                setAuth(true);
                navigate('/students');
            }
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h2 className="card-title text-center">Admin Login</h2>
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
