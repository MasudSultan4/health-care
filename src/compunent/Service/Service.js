import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {img,service_Name,discription,id,Test_Cost} = service;
    return (
        <div className="col-md-4 col-12">
            <div className="card mb-3 p-2" >
                <img style={{ "height": "180px" }} src={img} className="card-img-top w" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><strong>Service-Name: </strong>{service_Name}</h5><hr />
                    <p>{discription}</p>
                    <h5>Test-Cost:${Test_Cost}</h5>
                    
                    <Link className="text-white" 
                            to={`/serviceDetails/${id}`}><button className="btn btn-success">See Details</button>
                            </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;