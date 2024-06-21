import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CourseDetail.css'; // Import the CSS file for this component

import image1 from '../images/caro1.jpeg';
import image2 from '../images/caro1.jpeg';
import image3 from '../images/caro1.jpeg';

const CourseDetail = () => {
    const { id } = useParams();
    
    const courses = [
        {
            id: 1,
            title: "Basic English Course",
            description: "Start your journey with our basic course designed for beginners. This course covers the fundamental aspects of the English language, including grammar, vocabulary, and basic conversation skills.",
            image: image1,
            duration: "6 weeks",
            price: "$200"
        },
        {
            id: 2,
            title: "Intermediate English Course",
            description: "Enhance your skills with our intermediate level course. This course is designed for students who have a basic understanding of English and want to improve their fluency and comprehension.",
            image: image2,
            duration: "8 weeks",
            price: "$300"
        },
        {
            id: 3,
            title: "Advanced English Course",
            description: "Master the language with our advanced course for professionals. This course focuses on advanced grammar, vocabulary, and conversation skills, preparing you for professional and academic success.",
            image: image3,
            duration: "10 weeks",
            price: "$400"
        }
    ];

    const course = courses.find(course => course.id === parseInt(id));

    return (
        <div className="container mt-5">
            <div className="card mb-4 shadow-sm">
                <img src={course.image} className="card-img-top course-image" alt={course.title} />
                <div className="card-body">
                    <h2 className="card-title">{course.title}</h2>
                    <p className="card-text">{course.description}</p>
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Price:</strong> {course.price}</p>
                    <button className="btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
