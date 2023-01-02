import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://genius-car-server-seven-tawny.vercel.app/services')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-semibold text-orange-600'>Services</p>
                <h1 className='text-4xl font-bold'>Our Service area</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium esse et error autem? Quos tempore cumque eius animi dignissimos?</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6'>
                {
                    services.map(service=><ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;