'use client'
import React, { useEffect, useState } from 'react';


const IntroName = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const name = 'SOFTWARE DEVELOPER & DESIGNER';

  const [displayedName, setDisplayedName] = useState(name);

  useEffect(() => {
    let currentIndex = 0;
    const updateNameRandomly = () => {
      const newName = displayedName.split('').map((char, idx) => {
        if (idx < currentIndex || idx >= name.length) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');

      setDisplayedName(newName);
    };


    const intervalIdRandom = setInterval(updateNameRandomly, 50);

    const revealOriginalName = () => {
      if (currentIndex >= name.length) {
        clearInterval(intervalIdReveal);
        return;
      }

      const currentChar = name[currentIndex];

      if (currentChar !== undefined) { // Added check here
        setDisplayedName(prev =>
          prev.substring(0, currentIndex) +
          currentChar +
          prev.substring(currentIndex + 1)
        );
      }

      currentIndex += 1;
    };



    const intervalIdReveal: ReturnType<typeof setInterval> = setInterval(revealOriginalName, 90);

    return () => {
      clearInterval(intervalIdRandom);
      clearInterval(intervalIdReveal);
    };
  }, [name]);

  return (
    <div className='w-screen h-screen flex flex-col justify-center' id="home">
      <h1 className="text-4xl font-poppins font-extrabold text-off-white flex justify-center tracking-wider md:text-6xl lg:text-8xl">MICHAEL DENG</h1>
      <p className="text-lg font-mono text-burnt-yellow font-regular flex justify-center tracking-widest text-center mt-4 md:text-3xl">{displayedName}</p>
      <div className="flex flex-col max-w-[15rem] mx-auto justify-center items-center mt-12 mb-[-5rem] gap-5 md:flex-row md:max-w-none md:flex-wrap lg:mb-[-10rem] lg:gap-10">
        <a href="/MichaelDengResume.pdf" target="_blank">
          <div className='bg-burnt-yellow border-[1px] border-burnt-yellow opacity-90 text-off-black p-4 min-w-[15rem] text-base flex items-center justify-center font-mono font-semibold rounded-md md:text-md md:min-w-[10.5rem] lg:text-lg lg:min-w-[13.5rem] hover:opacity-100 hover:cursor-pointer hover:tracking-wider transition-all duration-500'>Download Resume</div></a>
        <a href="#contact">
          <div className='border-s border-[1px] border-burnt-yellow p-4 min-w-[15rem] text-base flex items-center justify-center font-mono rounded-md md:text-md md:min-w-[10.5rem] lg:text-lg lg:min-w-[13.5rem] hover:cursor-pointer hover:tracking-wider transition-all duration-500'>Contact Me</div></a>
      </div>
    </div>
  )
}

export default IntroName;
