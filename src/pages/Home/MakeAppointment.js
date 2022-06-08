import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor-small.png';
import PrimaryButton from '../Shared/Navbar/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='flex justify-center items-center mt-20 p-10'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold mb-5'>Appointment</h3>
                <h2 className='text-3xl text-white mb-5'>Make an Appointment Today</h2>
                <p className='text-white mb-5 text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p>
               <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
            );
};

            export default MakeAppointment;