import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialSignIn from '../Shared/SocialSignIn/SocialSignIn';

const Login = () => {
    const{login}=useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleLogin=event=>{
        event.preventDefault();
        const  form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        login(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user.email);

            const currentUser={
                email:user.email
            }
            fetch('https://genius-car-server-seven-tawny.vercel.app/jwt',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data.token);
                localStorage.setItem('user-token',data.token)
                navigate(from, { replace: true });
            })
            .catch(err=>console.log(err))
            
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="hero my-5">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
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
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Login" />
                </div>
            </form>
            <p className='text-center'>New in Genious Car <Link className="font-bold text-orange-600" to="/signup">Sign Up</Link></p>
            <SocialSignIn></SocialSignIn>
            </div>

        </div>
        </div>
    );
};

export default Login;