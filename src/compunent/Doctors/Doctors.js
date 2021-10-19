import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (

        <div className="container mt-5">
            <h1 className="App">Our <span className="text-warning">Doctors</span></h1>
            <div className="row">
                
                {
                    doctors.map(doctor =>
                        <Doctor
                            key={doctor.id}
                            doctor={doctor}

                        ></Doctor>)
                }
            </div>
        </div >


    );
};

export default Doctors;