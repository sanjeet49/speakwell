import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../images/caro1.jpeg';
import image2 from '../images/caro1.jpeg';
import image3 from '../images/caro1.jpeg';
import testimonialImage from '../images/testimonial.jpeg';
import adImage from '../images/ad.jpeg';
import faculty1 from '../images/anuj.jpg';
import faculty2 from '../images/anuj.jpg';
import faculty3 from '../images/anuj.jpg';

const WelcomePage = () => {
    const containerStyle = {
        backgroundImage: 'url("./welcomeImage.jpeg")',
        backgroundSize: 'cover',
        padding: '50px 0',
    };

    const contentStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const cardStyle = {
        transition: 'transform 0.2s ease-in-out',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
    };

    const imgStyle = {
        height: '200px',
        objectFit: 'cover',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
    };

    const carouselImageStyle = {
        height: '400px',
        objectFit: 'cover',
        borderRadius: '10px',
    };

    const carouselCaptionStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: '10px',
        padding: '10px',
    };

    const carouselControlStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div className="container text-center" style={containerStyle}>
            <div style={contentStyle}>
                <h1 className="my-4">Welcome to SpeakWell Institute</h1>
                <p className="lead">Your journey to mastering spoken English begins here.</p>

                {/* Carousel Section */}
                <Carousel
                    prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" style={carouselControlStyle} />}
                    nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" style={carouselControlStyle} />}
                >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="Basic English Course"
                            style={carouselImageStyle}
                        />
                        <Carousel.Caption style={carouselCaptionStyle}>
                            <h3>Basic English Course</h3>
                            <p>Start your journey with our basic course designed for beginners.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Intermediate English Course"
                            style={carouselImageStyle}
                        />
                        <Carousel.Caption style={carouselCaptionStyle}>
                            <h3>Intermediate English Course</h3>
                            <p>Enhance your skills with our intermediate level course.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image3}
                            alt="Advanced English Course"
                            style={carouselImageStyle}
                        />
                        <Carousel.Caption style={carouselCaptionStyle}>
                            <h3>Advanced English Course</h3>
                            <p>Master the language with our advanced course for professionals.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div className="my-4">
                    <h2>About Our Courses</h2>
                    <p>SpeakWell Institute offers a variety of courses tailored to help you master spoken English. Whether you are a beginner or a professional looking to refine your skills, we have the right course for you.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <Link to="/courses/1" style={{ textDecoration: 'none' }}>
                            <div className="card h-100 shadow-sm" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <img className="card-img-top" src={image1} alt="Basic English Course" style={imgStyle} />
                                <div className="card-body">
                                    <h4 className="card-title">Basic English Course</h4>
                                    <p className="card-text">Start your journey with our basic course designed for beginners.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <Link to="/courses/2" style={{ textDecoration: 'none' }}>
                            <div className="card h-100 shadow-sm" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <img className="card-img-top" src={image2} alt="Intermediate English Course" style={imgStyle} />
                                <div className="card-body">
                                    <h4 className="card-title">Intermediate English Course</h4>
                                    <p className="card-text">Enhance your skills with our intermediate level course.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <Link to="/courses/3" style={{ textDecoration: 'none' }}>
                            <div className="card h-100 shadow-sm" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <img className="card-img-top" src={image3} alt="Advanced English Course" style={imgStyle} />
                                <div className="card-body">
                                    <h4 className="card-title">Advanced English Course</h4>
                                    <p className="card-text">Master the language with our advanced course for professionals.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>


                {/* Advertisement Section */}
                <div className="my-4">
                    <h2>Join Our Upcoming Workshop!</h2>
                    <img src={adImage} alt="Advertisement" className="img-fluid" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
                    <p>Don't miss out on our intensive English speaking workshop. Enroll now and take your communication skills to the next level!</p>
                </div>

                {/* Testimonials Section */}
                <div className="my-4">
                    <h2>What Our Students Say</h2>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top" src={testimonialImage} alt="Student Testimonial" style={imgStyle} />
                                <div className="card-body">
                                    <h4 className="card-title">John Doe</h4>
                                    <p className="card-text">"The Basic English Course at SpeakWell Institute helped me build a strong foundation. Highly recommended!"</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top" src={testimonialImage} alt="Student Testimonial" style={imgStyle} />
                                <div className="card-body">
                                    <h4 className="card-title">Jane Smith</h4>
                                    <p className="card-text">"I improved my English significantly with the Intermediate course. The instructors are excellent!"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Faculties Section */}
                <div className="my-4">
                    <h2>Meet Our Faculties</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 shadow-sm" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <img className="card-img-top" src={faculty1} alt="Faculty 1" style={imgStyle} />
                                <div className="card-body">
                                    <h4 className="card-title">Dr. Emily Johnson</h4>
                                    <p className="card-text">PhD in Applied Linguistics with over 20 years of experience in teaching English.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 shadow-sm" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <img className="card-img-top" src={faculty2} alt="Faculty 2" style={imgStyle} />
                                <div className="card-body">
                                    <h4 className="card-title">Mr. John Williams</h4>
                                    <p className="card-text">MA in English Literature with a focus on conversational skills and public speaking.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 shadow-sm" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <img className="card-img-top" src={faculty3} alt="Faculty 3" style={imgStyle} />
                                <div className="card-body">
                                    <h4 className="card-title">Ms. Sarah Lee</h4>
                                    <p className="card-text">TESOL certified instructor with a passion for helping students achieve their goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enroll Section */}
                <div className="my-4">
                    <h2>Enroll in Our Upcoming Course!</h2>
                    <div className="card shadow-sm" style={{ borderRadius: '10px' }}>
                        <div className="card-body">
                            <p>Don't miss out on our next course starting soon. Enroll now and begin your journey towards mastering spoken English with SpeakWell Institute.</p>
                            <button className="btn btn-primary">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
