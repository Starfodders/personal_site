import Link from 'next/link'
import React from 'react'

const ProjectPreview = () => {
  return (
<div className='flex flex-col gap-10 p-4 flex-wrap items-start md:items-start md:p-10 lg:flex-row lg:justify-start lg:max-w-[95%] lg:m-auto xl:max-w-[68%]'>
      <div className='flex flex-col gap-10 p-4 items-center md:items-start lg:w-full'>
        <h3 className='font-poppins text-5xl font-bold mt-20'>Projects</h3>
        <p className='font-poppins py-4 font-medium leading-relaxed text-xl text-center mb-16 md:max-w-sm md:text-left'>Junior developer with a background in visual arts and health sciences that's here to create contemporary digital solutions.</p>
        </div>
      <div className='w-full bg-[#19232C] min-h-[200px] flex flex-col gap-3 rounded-md max-w-[700px] lg:max-w-lg'>
        <div className='w-full bg-white min-h-[50%] rounded-t-md'>
          <img src={'/hearthPreview.png'} alt='' className='w-min rounded-t-md' />
        </div>
        <div className="w-full min-h-[50%] flex flex-col gap-1 p-5">
          <h4 className='font-poppins text-xl font-bold'>HearthDBT</h4>
          <p className="font-poppins">Mental Health Education</p>
          <div className='w-full flex gap-2 mt-2'>
            <p className="font-poppins text-xs text-[#BEBEBE] bg-black py-0.5 px-2 rounded-lg">React</p>
            <p className="font-poppins text-xs text-[#BEBEBE] bg-black py-0.5 px-2 rounded-lg">Fullstack</p>
            <p className="font-poppins text-xs text-[#BEBEBE] bg-black py-0.5 px-2 rounded-lg">AWS</p>
            <p className="font-poppins text-xs text-[#BEBEBE] bg-black py-0.5 px-2 rounded-lg">MySQL</p>
          </div>
        </div>
        {/* <Link href = "./components/projects">Go</Link> */}
      </div>
      <div className='w-full bg-[#19232C] min-h-[200px] flex flex-col gap-3 rounded-md max-w-[400px] md:w-1/2 md:min-w-[350px] lg:w-1/3'>
        <div className='w-full bg-white min-h-[50%] rounded-t-md'>
          <img src={'/scobabyPreview.png'} alt='' className='w-min rounded-t-md' />
        </div>
        <div className="w-full min-h-[50%] flex flex-col gap-1 p-5">
          <h4 className='font-poppins text-xl font-bold'>Scobaby</h4>
          <p className="font-poppins">Digital Storefront</p>
          <div className='w-full flex gap-2 mt-2'>
            <p className="font-poppins text-xs text-[#BEBEBE] bg-black py-0.5 px-2 rounded-lg">React</p>
            <p className="font-poppins text-xs text-[#BEBEBE] bg-black py-0.5 px-2 rounded-lg">Frontend</p>
          </div>
        </div>
        
        {/* <Link href = "./components/projects">Go</Link> */}
      </div>
    </div>
  )
}

export default ProjectPreview