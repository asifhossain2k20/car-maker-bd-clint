import { Navigate, useLocation, useNavigate } from "react-router-dom";
export const setAuthToken=(user)=>{
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
            })
            .catch(err=>console.log(err))
}