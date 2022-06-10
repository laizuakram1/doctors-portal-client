import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import BookAppointment from './BookAppointment';
import BookModals from './BookModals';


const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);


    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='py-20'>
            <div className='text-center mb-10'>
                <h className='text-secondary font-semibold '>Available Service on:{format(date, 'PP')}</h>
                <h5 className='text-xl'>Please select a Service</h5>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <BookAppointment
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></BookAppointment>)
                }
            </div>
            {treatment && <BookModals
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}

            ></BookModals>}
        </div>
    );
};

export default AvailableAppointment;