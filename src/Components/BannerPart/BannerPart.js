import React from 'react';
import bannerImg from '../../images/Screenshot 2022-10-12 195426.jpg'
const Banner = () => {
    return (
        <div className='banner-bg flex  justify-around items-center mx-auto lg:flex-row md:flex-row sm:flex-col flex-col-reverse'>
            <div className='bg-opacity-10 p-10 rounded lg:w-[680px]'>
                <p className='text-slate-100 mb-3 text-4xl font-extrabold text-center font-sans '>Welcome To Our Website</p>
                <p className='text-zinc-100 font-sans text-center  lg:block md:block '>
                    “I was also supposed to quiz my various companions on a number of important matters such as nostalgia, fear of unknown animals, food fantasies, nocturnal emissions, hobbies, choice of radio program, changes in out look and so forth.” ~ Vladimir Nabokov
                    </p>
            </div>
            <div>
                <img src={bannerImg} alt="" className='w-80 mx-20 mt-10 mb-20  lg:block md:hidden'/>
            </div>
        </div>
    );
};

export default Banner;