import NavBar from "../../NavBar"

const page = () => {
  return (
    <>
      <NavBar />
      <div className="text-6xl font-poppins p-5 lg:max-w-3xl lg:m-auto lg:p-0 lg:pt-10">
        <h1 className="w-full text-off-white">Task Manager</h1>
      </div>
      <div >
        <p className="text-md font-poppins leading-7 text-off-white p-5 lg:max-w-3xl lg:m-auto lg:p-0 lg:py-10">Straightforward task tracking system to easily log lists and update them, saving their state in memory.</p></div>
      <div className="p-5 flex flex-col gap-3 lg:max-w-3xl lg:m-auto lg:p-0">
        <h2 className="font-mono text-off-white">Technologies</h2>
        <p className="font-mono text-[#BEBEBE]">React, Redux, Redux Toolkit, Typescript, Python, Django, Redis</p>
        <a href="https://github.com/Starfodders/task-manager" className="max-w-[18rem] group" target="_blank">
        <div className="flex items-center justify-between mt-5 gap-1 bg-off-black py-1 px-2 rounded-md max-w-[18rem] group-hover:bg-burnt-yellow transition-colors">
            <p className="font-mono text-md text-off-white group-hover:text-white">Go to Project Repository</p>
            <img src={'/icons/arrowForward.svg'} alt="" className="" />
          </div>
        </a>
      </div>
      <div className="flex flex-col p-4 items-center">
        <div className="flex flex-col py-4 lg:max-w-3xl">
          <img src = {'/taskman/task1.png'}/>
        </div>
        <p className="font-poppins text-sm w-full text-off-white lg:max-w-3xl">Project to learn many skills at once, starting with React Redux for global state management. The code itself utilizes Redux *too* much in an effort to learn, but the populating the list dispatches reducers to update a global list state.</p>
      </div>
      <div className="flex flex-col p-4 items-center">
        <div className="flex flex-col py-4 lg:max-w-3xl">
          <img src = {'/taskman/task2.png'}/>
        </div>
        <p className="font-poppins text-sm w-full text-off-white lg:max-w-3xl">Remove items by clicking. Submitting the list posts to Django backend</p>
      </div>
      <div className="flex flex-col p-4 items-center mb-[10rem]">
        <div className="flex flex-col py-4 lg:max-w-3xl">
          <img src = {'/taskman/task3.png'}/>
        </div>
        <p className="font-poppins text-sm w-full text-off-white lg:max-w-3xl">Django view. On app initialization, send CSRF token for authentication. Another function to handle posts to the connected Redis server. Also sends over every stored list within the cache to update the history of previous tasks by quering the cache. Redis data does not persist on purpose as it doesnt meet the requirements of this project. </p>
        <div className="flex flex-col p-4 items-center mb-[10rem]">
        <div className="flex flex-col py-4 lg:max-w-3xl">
          <img src = {'/taskman/task4.png'}/>
        </div>
        <p className="font-poppins text-sm w-full text-off-white lg:max-w-3xl">Showcasing the history of previous lists in the component below. Can switch between the Active List by selecting a previous list. Checking off every task within the list will mark it completed.</p>
      </div>
      </div>
      
      <div className="fixed bottom-10 right-0 bg-burnt-yellow p-2 pl-4 rounded-l-md lg:p-4 lg:pl-6">
        <a href="./maps" className="text-md text-white lg:text-2xl font-mono" >Next Project</a></div>
      <div className="fixed bottom-10 left-0 bg-burnt-yellow p-2 pr-4 rounded-r-md lg:p-4 lg:pr-6">
        <a href="./hearth" className="text-md text-white lg:text-2xl font-mono" >Prev Project</a></div>
    </>
  )
}

export default page