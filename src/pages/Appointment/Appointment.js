import React, { useState } from 'react';
import Footer from '../Shared/Navbar/Footer';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    console.log(date);
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;