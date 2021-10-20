import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        


       <div className="banner">
         <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://i.ibb.co/q1KQgmR/img1.jpg'
                    alt="First slide"
                />
                <Carousel.Caption className="text-black">
                    <h3 className="fw-bold">Expert Doctors</h3>
                    <h5>You will be treated with the most friendly & compassionate care</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://i.ibb.co/VvQyMBD/Background-3.png'
                    alt="Second slide"
                />

                <Carousel.Caption className="text-black">
                    <h3 className="fw-bold">Excellent Services</h3>
                    <h5>Today, we fit into the perfect frame of services for everyone</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://i.ibb.co/ZxwF5yr/img3.jpg'
                    alt="Third slide"
                />

                <Carousel.Caption className="text-black">
                    <h3 className="fw-bold">Best Experience</h3>
                    <h5>Community health and vision care to the area for over</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    );
};

export default Banner;