import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';


const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(0);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5000/doctors?limit=${limit}&pageNumber=${page}`);
            setDoctors(data);


        })();
    }, [limit, page])


    return (
        <div class="overflow-x-auto ">
            <table class="table table-zebra w-full  mt-5">

                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Speciality</th>
                        <th>Degree</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        doctors.map((doctor, index) => {
                            return (
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div class="avatar online">
                                            <div class="w-16 rounded-full ring ring-primary">
                                                <img src={doctor.image} alt='doctor' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>{doctor.degree}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='flex justify-end my-3'>
                {
                    [...Array(5).keys()].map(number => <div onClick={() => setPage(number)} className={`border border-primary rounded-sm px-3 py-1 cursor-pointer ${page === number ? 'bg-primary text-white' : ''}`}>{number}</div>)
                }
                <select onChange={(e) => setLimit(e.target.value)} >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Doctors;