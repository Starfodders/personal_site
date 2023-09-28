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
    
    

    const intervalIdReveal: ReturnType<typeof setInterval> = setInterval(revealOriginalName, 100);

    return () => {
      clearInterval(intervalIdRandom);
      clearInterval(intervalIdReveal);
    };
  }, [name]);

  return (
    <div className='w-screen h-screen flex flex-col justify-center' id = "home">
      <h1 className = "text-4xl font-poppins font-extrabold text-off-white flex justify-center tracking-wider md:text-6xl lg:text-8xl">MICHAEL DENG</h1>
      <p className = "text-2xl font-mono text-burnt-yellow font-regular flex justify-center tracking-widest text-center mt-4 md:text-3xl">{displayedName}</p>
    </div>
  )
}

export default IntroName;
