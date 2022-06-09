import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import BookAppointment from './BookAppointment';


const AvailableAppointment = ({date}) => {
    const [services,setServices] =useState([]);

    useEffect( ()=>{
        fetch('ServiceDetails.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='py-20'>
           <div className='text-center mb-10'>
           <h className='text-secondary font-semibold '>Available Service on:{format(date,'pp')}</h>
            <h5 className='text-xl'>Please select a Service</h5>
           </div>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <BookAppointment 
                    key={service._id}
                    service={service}
                    ></BookAppointment> )
                }
           </div>
        </div>
    );
};

export default AvailableAppointment;