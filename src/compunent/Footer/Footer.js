import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div class="bg-dark mt-5  text-white">
            <footer class="py-3 py-4 container">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item">
                        <Link to="/home" class="nav-link px-2 text-white">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class="nav-link px-2 text-white">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/service" class="nav-link px-2 text-white">service</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/contact" class="nav-link px-2 text-white">Contact</Link>
                    </li>
                </ul>
                <p class="text-center text-muted">© 2021  All rights reserved by <span className="text-warning">Sultan Hospital</span></p>
            </footer>
        </div>
    );
};

export default Footer;