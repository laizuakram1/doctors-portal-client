import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import Service from './Service';
import PrimaryButton from '../Shared/Navbar/PrimaryButton';

const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            name: 'Fluoride Treatment',
            description: 'Fluoride is a naturally occuring minerals that helps Build strong teeth and prevent cavities.'
        },
        {
            _id: 2,
            img: cavity,
            name: 'Cavity',
            description: 'Fluoride is a naturally occuring minerals that helps Build strong teeth and prevent cavities.'
        },
        {
            _id: 3,
            img: whitening,
            name: 'Whitening',
            description: 'Fluoride is a naturally occuring minerals that helps Build strong teeth and prevent cavities.'
        },
    ]
    return (
        <div>
            <div className='text-center py-16'>
                <h3 className='text-xl text-primary font-bold'>Our Services</h3>
                <h2 className='text-3xl'>Service we Provide</h2>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)

                }
            </div>

            <div>

                <div class="hero min-h-screen ">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={treatment} alt='doctor' class="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;