import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testmonial from './Testmonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testmonial></Testmonial>

        </div>
    );
};

export default Home;