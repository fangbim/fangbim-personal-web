'use client'
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import SplitType from 'split-type'

export default function TextReavel() {

    const text : string = 'Fang.Bim';

    const myText = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const char = new SplitType('#my-text',);
        
        gsap.to('.char', {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: .01
        })
    })

  return (
    <div>
      <h1 id='my-text' className='text-[10rem] clip-path-mpolygon leading-[9rem]'ref={myText} >{text}</h1>
    </div>
  )
}
