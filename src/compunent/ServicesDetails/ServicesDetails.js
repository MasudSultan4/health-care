import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServicesDetails = () => {
    const { detailsId } = useParams();
    const [service, setService] = useState([])
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const services = service?.find(service => service.id == detailsId)
    console.log(services);
    return (
        <div>
            <div className="card container mt-3" style={{ marginBottom: '100px' }} >
  <div className="row g-0">
    <div className="col-md-7">
      <img src={services?.img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-5">
      <div className="card-body">
        <h2 className="card-title">Name:{services?.service_Name}</h2>
        <p className="card-text"><b>Discription:</b>{services?.discription}</p>
        <h3 className="card-text">Cost: ${services?.Test_Cost}</h3>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesDetails;