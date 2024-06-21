import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import car1 from '../images/car1.jpeg';
import './aboutus.css';

const AboutUs = () => {
    return (
        <div className="container about-us-container mt-5">
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <img src={car1} alt="About Us" className="img-fluid rounded shadow-sm" />
                </div>
                <div className="col-lg-6">
                    <h2 className="my-4 text-center">About Us</h2>
                    <p className="lead">Speakwell Institute is committed to helping individuals enhance their English speaking skills. Our courses are designed to cater to various levels, from beginners to advanced learners. Join us and improve your communication skills in a supportive and engaging environment.</p>
                </div>
            </div>
            <hr />
            <div className="row mt-5">
                <div className="col-lg-4 text-center">
                    <h3>Our Mission</h3>
                    <p>To provide high-quality English language education that empowers students to achieve their personal and professional goals.</p>
                </div>
                <div className="col-lg-4 text-center">
                    <h3>Our Vision</h3>
                    <p>To be a leading institute in English language education, known for our innovative teaching methods and student-centered approach.</p>
                </div>
                <div className="col-lg-4 text-center">
                    <h3>Our Values</h3>
                    <p>Commitment, Excellence, Integrity, and Respect. These values guide us in everything we do and ensure the best outcomes for our students.</p>
                </div>
            </div>
            <hr />
            <div className="row mt-5">
                <div className="col text-center">
                    <h3>What Our Students Say</h3>
                    <div id="carouselTestimonials" className="carousel slide mt-4" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <blockquote className="blockquote">
                                    <p className="mb-0">"Speakwell Institute has transformed my life. The classes are engaging, and the instructors are incredibly supportive."</p>
                                    <footer className="blockquote-footer">John Doe, <cite title="Source Title">Advanced English Course</cite></footer>
                                </blockquote>
                            </div>
                            <div className="carousel-item">
                                <blockquote className="blockquote">
                                    <p className="mb-0">"I never thought I could speak English fluently, but thanks to Speakwell, I can now communicate with confidence."</p>
                                    <footer className="blockquote-footer">Jane Smith, <cite title="Source Title">Intermediate English Course</cite></footer>
                                </blockquote>
                            </div>
                            <div className="carousel-item">
                                <blockquote className="blockquote">
                                    <p className="mb-0">"The learning environment at Speakwell is fantastic. I've made great friends and improved my skills significantly."</p>
                                    <footer className="blockquote-footer">Mark Wilson, <cite title="Source Title">Beginner English Course</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselTestimonials" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselTestimonials" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
