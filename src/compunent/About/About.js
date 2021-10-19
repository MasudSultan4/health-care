import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
    
    return (
        <Container className="About">
            <div className="about-container">
                <div class="about-section">
                    <img src="https://i.ibb.co/MsPrLGQ/about2.jpg" 
                    alt="" className="w-8 img-fluid me-5" />
                    <p className="fw-light">

                        Patient Health Care offers on-demand GP and specialist consultations with verified and certified doctors, online prescriptions, medicine delivery, pathology/ diagnostics tests, all while building valuable Electronic Health Records.

                        Patient Health Care is vertically integrated with pharmacies/ medicine delivery suppliers, labs/ diagnostics centres, and payment providers for an end-to-end digital health experience.
                    </p>
                </div>
                <div class="about-section">
                    <p className="fw-light me-5">

                    Hospital services make up the core of a hospital's offerings. They are often shaped by the needs or wishes of its major users to make the hospital a one-stop or core institution of its local commun ity or medical network. Hospitals are institutions comprising basic services and personnel—usually departments of medicine and surgery—that administer clinical and other services for specific diseases and conditions, as well as emergency services.

                    </p>
                    <img src="https://i.ibb.co/gZXV1R1/about1.jpg" alt="" className="w-8 img-fluid" />
                </div>
            </div>
        </Container>
    );
};

export default About;