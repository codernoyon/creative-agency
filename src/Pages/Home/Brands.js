import React from 'react';
import { Link } from 'react-router-dom';
import slack from '../../Assets/images/logos/slack.png'
import google from '../../Assets/images/logos/google.png'
import uber from '../../Assets/images/logos/uber.png'
import netflex from '../../Assets/images/logos/netflix.png'
import airbnb from '../../Assets/images/logos/airbnb.png'

const Brands = () => {
    return (
        <div className='container lg:px-24 py-6 px-6'>
            <div className="grid grid-cols-5  md:w-[72%] mx-auto gap-6 md:gap-x-16 items-center">
                <Link to='/'>
                    <img src={slack} alt="" />
                </Link>
                <Link to='/'>
                    <img src={google} alt="" />
                </Link>
                <Link to='/'>
                    <img src={uber} alt="" />
                </Link>
                <Link to='/'>
                    <img src={netflex} alt="" />
                </Link>
                <Link to='/'>
                    <img src={airbnb} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Brands;