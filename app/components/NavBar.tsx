import '../globals.css'
import MobileNavMenu from './MobileNavMenu'

const NavBar = () => {

  return (
    <>
      {/* Mobile Nav Menu */}
      <div className="flex justify-start w-full md:justify-between md:mt-3">
        <MobileNavMenu />
        <div className="w-1/3 flex items-center md:p-5">
          <img src = {'/logo.png'} alt = '' className='max-w-[10rem] min-w-[10rem] hover:cursor-pointer'/>
        </div>
        <div className="w-4/12 hidden justify-center md:flex">
          <ul className="flex gap-10">
            <a href = "#home" className='flex items-center'><li className="font-mono text-lg md:flex gap-2 items-center text-off-white hover:text-white hover:cursor-pointer"><span className="text-xs text-burnt-yellow md:text-sm">01</span> home</li></a>
            <a href = "#skills" className='flex items-center'><li className="font-mono text-lg md:flex gap-2 items-center text-off-white hover:text-white hover:cursor-pointer"><span className="text-xs text-burnt-yellow md:text-sm">02</span> skillset</li></a>
            <a href = "#projects" className='flex items-center'><li className="font-mono text-lg md:flex gap-2 items-center text-off-white hover:text-white hover:cursor-pointer"><span className="text-xs text-burnt-yellow md:text-sm">03</span> projects</li></a>
            <a href = "#contact" className='flex items-center'><li className="font-mono text-lg md:flex gap-2 items-center text-off-white hover:text-white hover:cursor-pointer"><span className="text-xs text-burnt-yellow md:text-sm">04</span> contact</li></a>
          </ul>
        </div>
        {/* Spacer */}
        <div className="hidden w-4/12 md:block"></div>
      </div>
    </>
  )
}

export default NavBar
