import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contactus.css';
import axios from 'axios';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (success || error) {
            const timer = setTimeout(() => {
                setSuccess(false);
                setError(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [success, error]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/contact/send', {
                name,
                email,
                message
            }, {
                auth: {
                    username: 'admin', // Your admin username
                    password: 'password' // Your admin password
                }
            });

            if (response.status === 200) {
                setSuccess(true);
                setError(false);
                setName('');
                setEmail('');
                setMessage('');
            }
        } catch (error) {
            console.error('Error sending message:', error.response ? error.response.data : error.message);
            setError(true);
            setSuccess(false);
        }
    };

    return (
        <div className="container contact-us-container mt-5">
            <h2 className="my-4 text-center">Contact Us</h2>
            <p className="lead text-center">If you have any questions or need further information, feel free to contact us:</p>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <h3>Contact Information</h3>
                    <ul className="list-unstyled">
                        <li><strong>Email:</strong> info@speakwell.com</li>
                        <li><strong>Phone:</strong> +123-456-7890</li>
                        <li><strong>Address:</strong> 123 Speakwell Street, Language City, Education State</li>
                    </ul>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0862062377173!2d-122.41941518468146!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c63e1b881%3A0x4c47d88ce1b8c72a!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1622588031192!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Maps"
                        className="mt-3 rounded shadow-sm"
                    ></iframe>
                </div>
                <div className="col-lg-6 mb-4">
                    <h3>Send Us a Message</h3>
                    {success && <div className="alert alert-success" role="alert">Message sent successfully!</div>}
                    {error && <div className="alert alert-danger" role="alert">Failed to send message!</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                placeholder="Enter your name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                placeholder="Enter your email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea 
                                className="form-control" 
                                id="message" 
                                rows="5" 
                                placeholder="Enter your message" 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
