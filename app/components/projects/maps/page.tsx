import NavBar from "../../NavBar"

const page = () => {
  return (
    <>
      <NavBar />
      <div className="text-6xl font-poppins p-5 lg:max-w-3xl lg:m-auto lg:p-0 lg:pt-10">
        <h1 className="w-full text-off-white">Maps</h1>
      </div>
      <div >
        <p className="text-md font-poppins leading-7 text-off-white p-5 lg:max-w-3xl lg:m-auto lg:p-0 lg:py-10">Vue Project that connected to Google Cloud and utilized Google Places API, Google Maps API, Timezone API, and Autocompletion API. Upon entering an address, the map and table would be updated and the local time would be retrieved.</p></div>
      <div className="p-5 flex flex-col gap-3 lg:max-w-3xl lg:m-auto lg:p-0">
        <h2 className="font-mono text-off-white">Technologies</h2>
        <p className="font-mono text-[#BEBEBE]">Vue, Google Cloud </p>
        <a href="https://github.com/Starfodders/accuenergy" className="max-w-[18rem] group" target="_blank">
          <div className="flex items-center justify-between mt-5 gap-1 bg-off-black py-1 px-2 rounded-md max-w-[18rem] group-hover:bg-burnt-yellow transition-colors">
            <p className="font-mono text-md text-off-white group-hover:text-white">Go to Project Repository</p>
            <img src={'/icons/arrowForward.svg'} alt="" className="" />
          </div>
        </a>
      </div>
      <div className="flex flex-col p-4 items-center">
        <div className="flex flex-col py-4 lg:max-w-3xl">
          <img src = {'/maps/maps1.png'}/>
        </div>
        <p className="font-poppins text-sm w-full text-off-white lg:max-w-3xl">Simple but functional in design. Used Window WebAPI to retrieve own location.</p>
      </div>
      <div className="flex flex-col p-4 items-center mb-[10rem]">
        <div className="flex flex-col py-4 lg:max-w-3xl">
          <img src = {'/maps/maps3.png'}/>
        </div>
        <p className="font-poppins text-sm w-full text-off-white lg:max-w-3xl">Location's local time and timezone displayed on top left, then added to history within paginated table.</p>
      </div>
    </>
  )
}

export default page