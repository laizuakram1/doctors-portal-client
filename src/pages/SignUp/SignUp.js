import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";





const SignUp = () => {
    const [err, setError] = useState('');

    const handleSignUp = event => {
        event.preventDefault();
        const userName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) =>{
            const user = result.user;
            console.log(user);
           
        })



    }

    //google signin
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user);
    }
    if(error){
        setError(error.message);
    }
     

   
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp}>
                        <div class="card-body">
                            <h2 className='text-3xl text-center font-bold py-2'>SignUp</h2>

                            <div class="form-control">

                                <input name='name' type="text" placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">

                                <input name='email' type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">

                                <input name='password' type="password" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <Link to='/' class="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <p className='text'>{err}</p>
                            <div class="form-control mt-6">
                                <button class="btn btn-accent text-white">SignUp</button>
                            </div>
                            <label class="label">
                                <p className='text-xs'>Already have an account? <Link className='text-primary link link-hover' to='/login'>Login</Link></p>
                            </label>

                            <div class="flex flex-col w-full border-opacity-50">

                                <div class="divider">OR</div>
                                <div class="grid h-20 card  rounded-box ">
                                    <button onClick={()=>signInWithGoogle()} class="btn btn-outline mt-2">Continue with Google</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;