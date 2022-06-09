import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';



const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div style={{
            background:`url(${bg})`,
            backgroundSize:'cover'
        }} class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} alt='chair' class="max-w-sm rounded-lg shadow-2xl" />
            <div>

                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    
                />

            </div>
            
        </div>
        
    </div>
    );
};

export default AppointmentBanner;