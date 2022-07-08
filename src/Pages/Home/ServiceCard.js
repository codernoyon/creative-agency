import React from 'react';
import service1 from '../../Assets/images/icons/service1.png'

const ServiceCard = () => {
    return (
        <div className='shadow rounded-md p-5 text-center space-y-2 hover:shadow-2xl duration-300'>
            <img className='mx-auto w-16' src={service1} alt="" />
            <h3 className="text-xl text-secondary font-semibold">Web & Mobile design</h3>
            <p className='text w-[80%] mx-auto'>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
        </div>
    );
};

export default ServiceCard;