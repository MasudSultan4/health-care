import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
        <div className='error'></div>
        <Link to="/home" className="btn btn-md btn-warning mt-3"><Button>Back to Home</Button></Link>
    </div>
    );
};

export default NotFound;