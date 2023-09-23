'use client'
import React, { useEffect, useState } from 'react';


const IntroName = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const name = 'SOFTWARE DEVELOPER';

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
    
    

    const intervalIdReveal: ReturnType<typeof setInterval> = setInterval(revealOriginalName, 200);

    return () => {
      clearInterval(intervalIdRandom);
      clearInterval(intervalIdReveal);
    };
  }, [name]);

  return (
    <>
      <p className = "text-2xl font-abel text-burnt-yellow font-semibold flex items-center tracking-widest">{displayedName}</p>
    </>
  )
}

export default IntroName;
