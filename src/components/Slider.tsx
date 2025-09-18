"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const data = [
    {
        id: 1,
        title: "always fresh & always crispy",
        image: "/slide1.png",
    },
    {
        id: 2,
        title: "always fresh & always crispy",
        image: "/slide2.png",
    },
    {
        id: 3,
        title: "always fresh & always crispy",
        image: "/slide1.png",
    },

]

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
            }, 2000);
            return () => clearInterval(interval)
    }, []);
    return (
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
            {/* text container */}
            <div className='h-1/2 flex flex-col justify-center gap-8 text-red-500 font-bold'>
                <h1 className='text-5xl text-center uppercase p-4 md:text-6xl'>
                    {data[currentSlide].title}
                </h1>
                <button className='bg-red-5000 py-4 px-8'>Order Now</button>
            </div>
{/* Image Container */}
            <div className='w-full h-1/2 relative'>
                <Image src={data[currentSlide].image} alt='' fill className='object-cover'/>
            </div>
        </div>
    );
};

export default Slider;