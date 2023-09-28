'use client'
import { useState } from "react"

const MobileNavMenu = () => {

  const [menuOn, setMenuOn] = useState(false)
  const [hasToggled, setHasToggled] = useState(false);

  const handleClick = () => {
    setMenuOn(false)
  }

  return (
    <>
    {/* Burger Menu */}
      <div className='group space-y-2 p-2 border-burnt-yellow border shadow-sm md:hidden hover:cursor-pointer m-5 hover:bg-burnt-yellow' onClick={() => {
        setMenuOn(true);
        setHasToggled(true);
      }}>
        <div className="w-8 h-0.5 bg-burnt-yellow group-hover:bg-off-white"></div>
        <div className="w-8 h-0.5 bg-burnt-yellow group-hover:bg-off-white"></div>
        <div className="w-8 h-0.5 bg-burnt-yellow group-hover:bg-off-white"></div>
      </div>
      {/* Menu Element */}
      <div className={`h-screen w-11/12 bg-off-white fixed inset-x-0 -translate-x-full ${hasToggled ? (menuOn ? 'animate-menuSlideIn' : 'animate-menuSlideOut') : ''}`}>
        <img src='/icons/closeBtn.svg' alt="" className='m-5 mt-10' onClick={() => {
          setMenuOn(false);
          setHasToggled(true);
        }} />
        <ul className='flex flex-col h-screen gap-3 mt-10 ml-5'>
          <a href = "/#home" onClick = {() => handleClick()}><li className="font-abel text-2xl text-off-black"><span className="text-xl text-burnt-yellow">01</span> home</li></a>
          <a href = "/#skills" onClick = {() => handleClick()}><li className="font-abel text-2xl text-off-black"><span className="text-xl text-burnt-yellow">02</span> skillset</li></a>
          <a href = "/#projects" onClick = {() => handleClick()}><li className="font-abel text-2xl text-off-black"><span className="text-xl text-burnt-yellow">03</span> work</li></a>
          <a href = "/#contact" onClick = {() => handleClick()}><li className="font-abel text-2xl text-off-black"><span className="text-xl text-burnt-yellow">04</span> contact</li></a>
          <p className="text-black font-abel pt-5 pr-20">© 2023. NextJS, ThreeJS, and Typescript. Made by Michael Deng</p>
        </ul>
      </div>
    </>
  )
}

export default MobileNavMenu