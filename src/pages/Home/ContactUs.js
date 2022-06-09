import React from 'react';
import { useForm } from "react-hook-form";


const ContactUs = () => {
   
    return (
        <div class="hero min-h-lg bg-accent">
           <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
               <h4 className='text-white text-center text-secondary text-xs font-bold mt-5'>Contact Us</h4>
               <h2 className='text-white text-center text-xl'>Stay Connected with Us</h2>
                    <div class="card-body">
                        <div class="form-control">
    
                            <input type="text" placeholder="E-mail Address" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                    
                            <input type="text" placeholder="Subject" class="input input-bordered" />
                           
                            <textarea class="textarea mt-2" placeholder="Message"></textarea>
                          
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ContactUs;