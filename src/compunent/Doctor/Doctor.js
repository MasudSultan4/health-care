import React from 'react';
import { Button } from 'react-bootstrap';

const Doctor = ({ doctor }) => {
    const {  name, url,experans,Fee } = doctor;
    return (
        <div className="col-md-4 col-12">
        <div className="card mb-3 p-2" >
            <img style={{ "height": "180px" }} src={url} className="card-img-top w" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Doctor: {name}</h5><hr />
                <p><b>Experience:</b>{experans}</p><hr />
                <h5>visit:{Fee}</h5>
                
                <Button variant="primary">Get Appoinment</Button>
            </div>
        </div>
    </div>
    );
};

export default Doctor;