import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {_id,title,price}=useLoaderData();
    const {user}=useContext(AuthContext)
    const nevigate=useNavigate()
    const handleOrder=event=>{
        event.preventDefault();
        const form=event.target;
        const name=`${form.fristName.value} ${form.lastName.value}`;
        const email= user?.email || 'Not Registered'
        const phone= form.phone.value;
        const message=form.message.value;
        const order={
            service:_id,
            serviceName:title,
            customer:name,
            email,
            phone,
            message
        }
        
        fetch('https://genius-car-server-seven-tawny.vercel.app/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                authorization:`Bearer ${localStorage.getItem('user-token')}`
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged===true){
                form.reset();
                alert('Ordered Successfully')
                nevigate('/orders')
            }
        })
        .then(err=>console.error(err))
    }
    return (
        <div>
            <h3 className="text-4xl text-center my-4">{title}</h3>
            <h4 className="text-3xl text-center my-4">Price : ${price}</h4>
            <form onSubmit={handleOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    <input name="fristName" type="text" placeholder="Enter Your 1st Name" className="input input-bordered w-full" />
                    <input name="lastName" type="text" placeholder="Enter your Last Name" className="input input-bordered w-full" />
                    <input name="phone" type="text" placeholder="Phone" className="input input-bordered w-full" required />
                    <input name="email" type="text" placeholder="email" className="input input-bordered w-full" defaultValue={user?.email} readOnly/>
                </div>
                <textarea className="textarea textarea-primary h-32 w-full my-5" placeholder="Bio" name="message"></textarea>

                <input className='btn mb-3' type="submit" value="Order Now" />
            </form>
        </div>
    );
};

export default CheckOut;