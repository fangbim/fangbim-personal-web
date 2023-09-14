'use client'
import gsap from 'gsap';
import React, { useEffect } from 'react';
import SplitType from 'split-type';
import SocialMedia from './socialMedia';

export default function TextReavel() {
    const text : string = 'Fang.Bim';

    useEffect(() => {
        const char = new SplitType('#my-text',);
        gsap.to('.char', {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: .01
        });
    });

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <h1 id='my-text' className='text-8xl md:text-[10rem] clip-path-mpolygon leading-[4.8rem] md:leading-[9rem]'>{text}</h1>
        <SocialMedia/>
    </div>
    
  );
};
