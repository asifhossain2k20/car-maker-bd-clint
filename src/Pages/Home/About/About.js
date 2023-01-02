import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row ">
            <div className='w-1/2 relative'>
            <img src={person} alt="" className="max-w-sm rounded-lg shadow-2xl h-100 w-4/5" />
            <img src={parts} alt="" className="max-w-sm rounded-lg shadow-2xl absolute top-1/2 w-2/3 right-5 border-xl" />
            </div>
            <div className='w-1/2'>
                <p className="font-bold text-orange-700 text-xl">About Us</p>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get With US</button>
            </div>
        </div>
        </div>
    );
};

export default About;