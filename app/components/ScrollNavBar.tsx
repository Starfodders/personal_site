import React from 'react'

const ScrollNavBar:React.FC<{navState:boolean}> = ({navState}) => {
    
  return (
    <div className={`hidden w-full fixed md:flex justify-center p-5 top-0 left-0 z-30 bg-off-black opacity-80 ${navState ? 'animate-navDown' : 'animate-navUp'}`}>
          <ul className="flex gap-10">
            <a href = "/#home" className='flex items-center'><li className="font-mono text-lg md:flex gap-2 items-center text-off-white hover:text-white hover:cursor-pointer"><span className="text-xs text-burnt-yellow md:text-sm">01</span> home</li></a>
            <a href = "/#skills" className='flex items-center'><li className="font-mono text-lg md:flex gap-2 items-center text-off-white hover:text-white hover:cursor-pointer"><span className="text-xs text-burnt-yellow md:text-sm">02</span> skillset</li></a>
            <a href = "/#projects" className='flex items-center'><li className="font-mono text-lg md:flex gap-2 items-center text-off-white hover:text-white hover:cursor-pointer"><span className="text-xs text-burnt-yellow md:text-sm">03</span> projects</li></a>
            <a href = "/#contact" className='flex items-center'><li className="font-mono text-lg md:flex gap-2 items-center text-off-white hover:text-white hover:cursor-pointer"><span className="text-xs text-burnt-yellow md:text-sm">04</span> contact</li></a>
          </ul>
        </div>
  )
}

export default ScrollNavBar