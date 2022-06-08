import React from 'react';
import chair from '../../assets/images/chair.png';
import bannerBg from '../../assets/images/bg.png';
import { getSuggestedQuery } from '@testing-library/react';
import PrimaryButton from '../Shared/Navbar/PrimaryButton';

const Banner = () => {
    return (
        <div style={{
            background:`url, ${bannerBg}`
        }}
         class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl " />
                <div>
                    <h2 class="text-5xl font-bold">Your New Smile Start Here!</h2>
                    <p class="py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias deserunt omnis esse ab distinctio aspernatur, voluptas saepe vero praesentium! Maiores!</p>
                   <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;