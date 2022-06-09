import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.comment}</p>

                <div class="avatar mt-5">
                <div class="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                    <img src={review.img} alt='avatar' />
                </div>
                <div className='w-32'>
                    <p className='text-xl'>Herry winson</p>
                    <h6 className='text-xs'>California</h6>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Review;