import React from 'react';
import {useContext}  from 'react'
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialSignIn from '../Shared/SocialSignIn/SocialSignIn';

const SignUp = () => {
    const {createUser,googleSignIn}=useContext(AuthContext)
    const handleSignUp=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        createUser(email,password)
        .then(res=>{
            console.log(res.user);
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    return (
        <div className="hero my-5">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
            <h1 className="text-3xl text-center font-bold">Sign Up !</h1>
            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input name='name' required type="text" placeholder="Enter Your Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input name='email' required type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input name='password' required type="text" placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Sign In" />
                </div>
            </form>
            <p className='text-center'>You have Already an Account <Link className="font-bold text-orange-600" to="/login">Login</Link></p>
            <SocialSignIn></SocialSignIn>
            </div>
        </div>
        </div>
    );
};

export default SignUp;