import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signInWithEmailAndPassword } from "firebase/auth";





const Login = () => {
    const [err, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        //sign in with email and password
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            navigate('/')
        })

    }
    
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
                               
                            </div>
                            <p className='text-danger'>{err}</p>
                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-accent text-white">Login</button>
                            </div>
                            <label class="label">
                                    <p className='text-xs'>Don't have an account? <Link className='text-primary link link-hover' to='/signup'>SignUp</Link></p>
                                </label>

                            <div class="flex flex-col w-full border-opacity-50">
                            
                                <div class="divider">OR</div>
                                <div class="grid h-20 card  rounded-box ">
                                <button onClick={()=>signInWithGoogle()} className="btn btn-outline mt-2">Continue with Google</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;