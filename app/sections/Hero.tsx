'use client'
import gsap from 'gsap';
import React, { useEffect } from 'react';
import SplitType from 'split-type';
import SocialMedia from './socialMedia';

export default function Hero() {
    useEffect(() => {
        const char = new SplitType('#my-text',);
        gsap.to('.char', {
            y: 0,
            stagger: 0.08,
            duration: .05
        });

        gsap.to('#title', {
          x: 0,
          stagger: 0.05,
          duration: 0.01
        })
    });

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <h1 id='my-text' className='text-8xl md:text-[10rem] clip-path-mpolygon leading-[4.8rem] md:leading-[9rem]'>Fang.Bim</h1>
        <p id='title' className='m-0 text-lg tracking-[0.5rem]'>I&apos;M A Software Engineer</p>
        <SocialMedia/>
    </div>
    
  );
};
