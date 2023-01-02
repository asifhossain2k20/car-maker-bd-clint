import React, { useContext } from 'react';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialSignIn = () => {
    const {googleSignIn}=useContext(AuthContext)
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .thne(result=>{
            const user=result.user;
            console.log(user)
            setAuthToken(user)
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className='mx-auto py-3'>
            <div onClick={handleGoogleSignIn} className="btn btn-ghost">Google</div>
        </div>
    );
};

export default SocialSignIn;