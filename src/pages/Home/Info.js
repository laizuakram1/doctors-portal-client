import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='text-white grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div class="bg-gradient-to-r from-primary to-secondary card card-side shadow-xl px-3">
                <figure><img src={clock} alt="clock"/></figure>
                <div class="card-body">
                    <h2 class="card-title w-32">Opening Hours</h2>
                    <small>0.09 AM - 0.08 PM</small>
                    <div class="card-actions justify-end">
                       
                    </div>
                </div>
            </div>

            <div class="bg-accent card card-side shadow-xl px-3">
                <figure><img src={marker} alt="marker"/></figure>
                <div class="card-body">
                    <h2 class="card-title">Locations</h2>
                    <p>Dhanmondi 32, Dhaka</p>
                    <div class="card-actions justify-end">
                      
                    </div>
                </div>
            </div>

            <div class="bg-gradient-to-r from-primary to-secondary card card-side shadow-xl px-3">
                <figure><img className='text-white' src={phone} alt="phone"/></figure>
                <div class="card-body">
                    <h2 class="card-title">Contact Us</h2>
                    <p>Please feel free to contact with us</p>
                    <div class="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;