import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div class="hero min-h-screen">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                        <h2 className='text-3xl text-center font-bold py-2'>SignUp</h2>

                            <div class="form-control">
                                
                                <input type="text" placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <Link to='/' class="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label class="label">
                                    <p>Already have an account? <Link className='text-primary link link-hover' to='/login'>Login</Link></p>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-accent text-white">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SignUp;