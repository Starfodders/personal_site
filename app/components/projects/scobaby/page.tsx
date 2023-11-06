import NavBar from "../../NavBar"

const page = () => {
  return (
    <>
      <NavBar />
      <div className="text-6xl font-poppins p-5 lg:max-w-3xl lg:m-auto lg:p-0 lg:pt-10">
        <h1 className="w-full text-off-white">Scobaby</h1>
      </div>
      <div >
        <p className="text-md font-poppins leading-7 text-off-white p-5 lg:max-w-3xl lg:m-auto lg:p-0 lg:py-10">Storefront and inventory for homecrafted Kombucha products. Customers can view available stock and issue orders.</p></div>
      <div className="p-5 flex flex-col gap-3 lg:max-w-3xl lg:m-auto lg:p-0">
        <h2 className="font-mono text-off-white">Technologies</h2>
        <p className="font-mono text-[#BEBEBE]">React, Figma, Heroku</p>
        <a href="https://scobaby-570a2.web.app/" className="max-w-[11rem] group" target="_blank">
          <div className="flex items-center justify-between mt-5 gap-1 bg-off-black py-1 px-2 rounded-md max-w-[11rem] group-hover:bg-burnt-yellow transition-colors">
            <p className="font-mono text-md text-off-white group-hover:text-white">Go to Project</p>
            <img src={'/icons/arrowForward.svg'} alt="" className="" />
          </div>
        </a>
      </div>
      <div className="flex flex-col p-4 items-center">
        <div className="flex flex-col py-4 lg:max-w-3xl">
          <img src = {'/scobaby/sco1.png'}/>
        </div>
        <p className="font-poppins text-sm w-full text-off-white lg:max-w-3xl">Eye-catching banner.</p>
      </div>
      <div className="flex flex-col p-4 items-center">
        <div className="flex flex-col py-4 lg:max-w-3xl">
          <img src = {'/scobaby/sco2.png'}/>
        </div>
        <p className="font-poppins text-sm w-full text-off-white lg:max-w-3xl">Available flavours for purchase & their inventory. Accessed through a carousel.</p>
      </div>
      <div className="flex flex-col p-4 items-center mb-[10rem]">
        <div className="flex flex-col py-4 lg:max-w-3xl">
          <img src = {'/scobaby/sco3.png'}/>
        </div>
        <p className="font-poppins text-sm w-full text-off-white lg:max-w-3xl">Checkout & breakdown of costs, issuing orders.</p>
      </div>
      <div className="fixed bottom-10 right-0 bg-burnt-yellow p-2 pl-4 rounded-l-md lg:p-4 lg:pl-6">
        <a href="./card" className="text-md text-white lg:text-2xl font-mono" >Next Project</a></div>
      <div className="fixed bottom-10 left-0 bg-burnt-yellow p-2 pr-4 rounded-r-md lg:p-4 lg:pr-6">
        <a href="./maps" className="text-md text-white lg:text-2xl font-mono" >Prev Project</a></div>
    </>
  )
}

export default page