import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Vision from '../Vision/Vision';
import Doctors from './../Doctors/Doctors';

const Home = () => {
    return (
        <div id="home">
          
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Vision></Vision>
        </div>
    );
};

export default Home;