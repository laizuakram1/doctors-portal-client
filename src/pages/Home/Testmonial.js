import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testmonial = () => {

    const reviews = [
        {
            _id:1,
            name: 'Jhankar Mahbub',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            location: 'UK',
            img: people1
        },
        {
            _id:2,
            name: 'Nasim',
            comment:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            location: 'Bangladesh',
            img: people2
        },
        {
            _id:3,
            name: 'Sumit Saha',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            location: 'Bangladesh',
            img: people3
        },
    ];

    return (
        <section>
            <div className='flex justify-between items-center py-10'>
                <div>
                    <h4 className='text-primary text-xl'>Testmonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div><img className='w-48' src={quote} alt="quote" /></div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
            
        </section>
    );
};

export default Testmonial;