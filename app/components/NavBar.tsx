import React from 'react'
import '../globals.css'

const NavBar = () => {
  return (
    <div className = "flex justify-between w-full p-5">
      <div className = "w-4/12">Logo</div>
      <div className = "w-4/12 flex justify-center">
        <ul className = "flex gap-10">
          <li className = "font-abel text-lg"><span className = "text-xs text-burnt-yellow">01</span> home</li>
          <li className = "font-abel text-lg"><span className = "text-xs text-burnt-yellow">02</span> skillset</li>
          <li className = "font-abel text-lg"><span className = "text-xs text-burnt-yellow">03</span> work</li>
          <li className = "font-abel text-lg"><span className = "text-xs text-burnt-yellow">04</span> contact</li>
        </ul>
      </div>
      <div className = "w-4/12"></div>
    </div>
  )
}

export default NavBar