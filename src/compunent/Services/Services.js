import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="container mt-4">
            <h2 className="fw-bold">Our <span className="text-warning">Service</span></h2>
          <div className="row">
          {
               services.map(service => <Service key={service.id} service={service}></Service>)
           }
          </div>
        </div>
    );
};

export default Services;