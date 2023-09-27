import NavBar from "../../NavBar"

const page = () => {
  return (
    <>
      <NavBar />
      <div className="text-6xl font-poppins p-5">
        <h1>HearthDBT</h1>
      </div>
      <div >
        <p className="text-md font-poppins leading-7 p-5">Dialectical Behavior Therapy (DBT) reimagined. I've deconstructed complex topics into bite-sized units, making it more digestible and engaging. Users can bookmark pertinent content and easily refer back to it whenever needed.</p></div>
      <div className="p-5 flex flex-col gap-3">
        <h2 className="font-mono">Technologies</h2>
        <p className="font-mono text-[#BEBEBE]">React, Netlify, MySQL, Amazon RDS </p>
        <a href="https://hearthdbt.netlify.app/" className="max-w-[11rem]" target="_blank">
          <div className="flex items-center pt-5 gap-2 max-w-[11rem]">
            <p className="font-mono text-lg">Go to Project</p>
            <img src={'/arrowForward.svg'} alt="" className="" />
          </div>
        </a>
      </div>
    </>
  )
}

export default page