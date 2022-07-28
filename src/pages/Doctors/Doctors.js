import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';


const Doctors = () => {

    useEffect(() =>{
        (async () => {
            const {data} = await axios.get('http://localhost:5000/doctors');
            console.log(data);
        })();
    },[])
    return (
        <div>
            <h2>Doctors list</h2>
        </div>
    );
};

export default Doctors;