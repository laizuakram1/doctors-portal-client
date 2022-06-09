import React from 'react';
import Footer from '../Shared/Navbar/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
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
            <ContactUs></ContactUs>
            <Footer></Footer>

        </div>
    );
};

export default Home;