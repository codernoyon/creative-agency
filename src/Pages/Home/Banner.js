import React from 'react';
import illustration from '../../Assets/images/logos/Frame.png';
import bg from '../../Assets/images/bg-home.png';

const Banner = () => {
    return (
        <section style={{ background: `url(${bg})  no-repeat center center / cover` }}>
            <div class="hero min-h-screen text-black container lg:px-24">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={illustration} class="w-full md:max-w-lg rounded-lg " alt='' />
                    <div>
                        <h1 class="text-4xl lg:text-5xl font-bold lg:w-[380px]">Let’s Grow Your Brand To The Next Level</h1>
                        <p class="py-6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        <button class="btn btn-secondary md:px-10 text-white">Hire Us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;