import '../globals.css'
import MobileNavMenu from './MobileNavMenu'

const NavBar = () => {

  return (
    <>
      {/* Mobile Nav Menu */}
      <div className="flex justify-start w-full md:justify-between">
        <MobileNavMenu />
        <div className="w-1/3">Logo</div>
        <div className="w-4/12 hidden justify-center md:flex">
          <ul className="flex gap-10">
            <li className="font-abel text-lg"><span className="text-xs text-burnt-yellow">01</span> home</li>
            <li className="font-abel text-lg"><span className="text-xs text-burnt-yellow">02</span> skillset</li>
            <li className="font-abel text-lg"><span className="text-xs text-burnt-yellow">03</span> work</li>
            <li className="font-abel text-lg"><span className="text-xs text-burnt-yellow">04</span> contact</li>
          </ul>
        </div>
        {/* Spacer */}
        <div className="hidden w-4/12 md:block"></div>
      </div>
    </>
  )
}

export default NavBar
