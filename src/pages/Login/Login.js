import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


    const handleLogin = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        
    }

    return (
        <div>
        <div class="hero min-h-screen">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}>
            <div class="card-body">
                        <h2 className='text-3xl text-center font-bold py-2'>Login</h2>
                       
                        <div class="form-control">
                            <input type="text" name='email' placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <input type="password" name='password' placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <Link to='/' class="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <label class="label">
                                <p>Don't have an account? <Link className='text-primary link link-hover' to='/signup'>SignUp</Link></p>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-accent text-white">Login</button>
                        </div>
                    </div>

            </form>
            </div>
        </div>
    </div>
    );
};

export default Login;