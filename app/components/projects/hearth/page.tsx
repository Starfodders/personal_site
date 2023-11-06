import NavBar from "../../NavBar"

const page = () => {
  return (
    <>
      <NavBar />
      <div className="text-6xl font-poppins p-5 lg:max-w-3xl lg:m-auto lg:p-0 lg:pt-10">
        <h1 className="w-full text-off-white">HearthDBT</h1>
      </div>
      <div >
        <p className="text-md font-poppins leading-7 text-off-white p-5 lg:max-w-3xl lg:m-auto lg:p-0 lg:py-10">Dialectical Behavior Therapy (DBT) reimagined. Ive deconstructed complex topics into bite-sized units, making it more digestible and engaging. Users can bookmark pertinent content and easily refer back to it whenever needed.</p></div>
      <div className="p-5 flex flex-col gap-3 lg:max-w-3xl lg:m-auto lg:p-0">
        <h2 className="font-mono text-off-white">Technologies</h2>
        <p className="font-mono text-[#BEBEBE]">React, Netlify, MySQL, Amazon RDS </p>
        <a href="https://hearthdbt.netlify.app/" className="max-w-[11rem] group" target="_blank">
          <div className="flex items-center justify-between mt-5 gap-1 bg-off-black py-1 px-2 rounded-md max-w-[11rem] group-hover:bg-burnt-yellow transition-colors">
            <p className="font-mono text-md text-off-white group-hover:text-white">Go to Project</p>
            <img src={'/icons/arrowForward.svg'} alt="" className="" />
          </div>
        </a>
      </div>
      <div className="flex flex-col p-4 items-center">
        <div className="flex flex-col py-4 lg:max-w-3xl">
          <img src={'/hearth/hearth1.png'} />
        </div>
        <p className="font-poppins text-sm w-full text-off-white lg:max-w-3xl">Login with authentication and guest sign up features.</p>
      </div>
      <div className="flex flex-col p-4 items-center">
        <div className="flex flex-col py-4 lg:max-w-3xl">
          <img src={'/hearth/hearth2.png'} />
        </div>
        <p className="font-poppins text-sm w-full text-off-white lg:max-w-3xl">Content separated into chapters, further into sections and units.</p>
      </div>
      <div className="flex flex-col p-4 items-center">
        <div className="flex flex-col py-4 lg:max-w-3xl">
          <img src={'/hearth/hearth3.png'} />
        </div>
        <p className="font-poppins text-sm w-full text-off-white lg:max-w-3xl">Units broken into readable cards that can be saved. Dark mode available as well.</p>
      </div>
      <div className="flex flex-col p-4 items-center mb-[10rem]">
        <div className="flex flex-col py-4 lg:max-w-3xl">
          <img src={'/hearth/hearth4.png'} />
        </div>
        <p className="font-poppins text-sm w-full text-off-white lg:max-w-3xl">Easily access saved content.</p>
      </div>
      <div className="fixed bottom-10 right-0 bg-burnt-yellow p-2 pl-4 rounded-l-md lg:p-4 lg:pl-6">
        <a href = "./task-manager" className="text-md text-white lg:text-2xl font-mono" >Next Project</a></div>
    </>
  )
}

export default page