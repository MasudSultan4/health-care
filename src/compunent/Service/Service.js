import React from 'react';

const Service = ({service}) => {
    const {img,service_Name,discription} = service;
    return (
        <div className="col-4">
            <div className="card mb-3 p-2" >
                <img style={{ "height": "180px" }} src={img} className="card-img-top w" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><strong>Service-Name: </strong>{service_Name}</h5><hr />
                    <p>{discription}</p>
                    
                    <button
                        className="btn btn-success">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;