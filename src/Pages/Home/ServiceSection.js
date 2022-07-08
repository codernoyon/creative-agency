import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceSection = () => {
    return (
        <div className='container lg:px-24 py-6 px-6'>
            <h3 className="text-3xl text-[#2D2D2D] text-center font-semibold my-10">Provide awesom <span className='text-[#7AB259]'>service</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
            </div>
        </div>
    );
};

export default ServiceSection;