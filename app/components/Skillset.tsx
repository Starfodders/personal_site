import SkillsetContents from "./SkillsetContents"

const Skillset = () => {
  return (
    <div className='w-full flex flex-col items-center gap-5 mb-[20rem] md:p-10 lg:mb-[10rem]' id = "skills">
      <h2 className='text-5xl font-poppins font-bold pb-10 lg:text-6xl lg:pb-11'>My Toolkit</h2>
      <SkillsetContents/>
    </div>
    
  )
}

export default Skillset