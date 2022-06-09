import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [services,setServices] =useState([]);

    useEffect( ()=>{
        fetch('serviceName.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='py-20'>
           <div className='text-center'>
           <h className='text-secondary font-semibold text-xs'>Available Service on:{format(date,'pp')}</h>
            <h5>Please select a Service</h5>
           </div>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
           </div>
        </div>
    );
};

export default AvailableAppointment;