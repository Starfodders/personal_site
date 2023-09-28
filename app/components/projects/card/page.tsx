import NavBar from "../../NavBar"

const page = () => {
  return (
    <>
      <NavBar />
      <div className="text-6xl font-poppins p-5 lg:max-w-3xl lg:m-auto lg:p-0 lg:pt-10">
        <h1 className="w-full text-off-white">Card Game</h1>
      </div>
      <div >
        <p className="text-md font-poppins leading-7 text-off-white p-5 lg:max-w-3xl lg:m-auto lg:p-0 lg:py-10">Honorable Mention, a first project during my first few months of learning coding that is loosely based on Slay the Spire. The first large-scale project built using pure Javascript and practicing class-based components, running local servers.</p></div>
      <div className="p-5 flex flex-col gap-3 lg:max-w-3xl lg:m-auto lg:p-0">
        <h2 className="font-mono text-off-white">Technologies</h2>
        <p className="font-mono text-[#BEBEBE]">Javascript</p>
        <a href="https://github.com/Starfodders/Card-Game" className="max-w-[18rem] group" target="_blank">
          <div className="flex items-center justify-between mt-5 gap-1 bg-off-black py-1 px-2 rounded-md max-w-[18rem] group-hover:bg-burnt-yellow transition-colors">
            <p className="font-mono text-md text-off-white group-hover:text-white">Go to Project Repository</p>
            <img src={'/icons/arrowForward.svg'} alt="" className="" />
          </div>
        </a>
      </div>
      <div className="flex flex-col p-4 items-center mb-[10rem]">
        <div className="flex flex-col py-4 lg:max-w-3xl">
          <img src = {'/previews/cardgamePreview.JPG'}/>
        </div>
        <p className="font-poppins text-sm w-full text-off-white lg:max-w-3xl">Concept was a rogue-lite deckbuilder, fighting through waves of enemies. Cards would require energy to use, managing this precious resource as well as your HP. Left stack is your deck, right stack is the discard and destroy pile.</p>
      </div>
    </>
  )
}

export default page