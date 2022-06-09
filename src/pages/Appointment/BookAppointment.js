import React from 'react';

const BookAppointment = ({ service, setTreatment }) => {
    const {slots, name} = service;
    return (
        <div class="card max-w-lg bg-base-100 shadow-md">
            <div class="card-body text-center">
                <h2 class="card-title text-secondary justify-center">{name}</h2>
                <p> 
                    {slots.length? <span>{slots[0]}</span>
                    : <span className='text-red-500'>Try another</span>     
                }
                </p>
                <p>{slots.length} spaces available</p>

                <div class="card-actions justify-center">
                    <label onClick={()=>setTreatment(service)} disabled={slots.length === 0} for="Booking-modal" class="btn btn-secondary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;