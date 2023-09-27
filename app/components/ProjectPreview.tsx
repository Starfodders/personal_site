import React from 'react'
import Link from 'next/link'

const ProjectPreview = () => {

  return (
    <div className='flex flex-col gap-10 p-4 mb-16 flex-wrap items-start md:items-start md:p-10 lg:flex-row lg:justify-start lg:max-w-[95%] lg:m-auto lg:gap-18 lg:mb-56 xl:max-w-[70%]' id="projects">
      <div className='md:flex flex-col items-center md:flex-row md:justify-around w-full'>
        <div className='flex flex-col gap-10 py-4 px-6 items-center md:items-start md:h-full lg:w-full'>
          <h3 className='font-poppins text-5xl font-bold lg:text-7xl'>Projects</h3>
          <p className='font-mono py-4 font-medium leading-relaxed text-xl text-center mb-16 md:max-w-[20rem] md:text-left lg:text-2xl'>Junior developer with a background in visual arts and health sciences. My goal is to create contemporary digital solutions.</p>
        </div>
        <div className='w-full bg-[#19232C] min-h-[200px] flex flex-col gap-3 rounded-md max-w-[400px] m-auto lg:max-w-lg'>
          <Link href = "./components/projects/hearth">
          <div className='w-full bg-white rounded-t-md'>
            <img src={'/hearthPreview.png'} alt='' className='w-min rounded-t-md object-fill' />
          </div>
          <div className="w-full flex flex-col gap-1 p-5">
            <h4 className='font-poppins text-xl font-bold'>HearthDBT</h4>
            <p className="font-mono text-sm">Mental Health Education</p>
            <div className='w-full flex gap-2 mt-2'>
              <p className="font-poppins text-xs text-[#BEBEBE] bg-black py-0.5 px-2 rounded-lg">React</p>
              <p className="font-poppins text-xs text-[#BEBEBE] bg-black py-0.5 px-2 rounded-lg">Fullstack</p>
              <p className="font-poppins text-xs text-[#BEBEBE] bg-black py-0.5 px-2 rounded-lg">AWS</p>
              <p className="font-poppins text-xs text-[#BEBEBE] bg-black py-0.5 px-2 rounded-lg">MySQL</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <div className='w-full bg-[#19232C] min-h-[200px] flex flex-col gap-3 rounded-md max-w-[400px] m-auto md:w-1/2 md:min-w-[330px] lg:w-1/5 lg:m-0'>
      <Link href = "./components/projects/maps">
        <div className='w-full bg-white max-h-[200px] rounded-t-md'>
          <img src={'/vuePreview.png'} alt='' className='w-full rounded-t-md max-h-[200px] min-h-[200px] object-cover' />
        </div>
        <div className="w-full min-h-[50%] flex flex-col gap-1 p-5">
          <h4 className='font-poppins text-xl font-bold'>Maps Catalog</h4>
          <p className="font-mono text-sm">Interview Submission</p>
          <div className='w-full flex gap-2 mt-2'>
            <p className="font-poppins text-xs text-[#BEBEBE] bg-black py-0.5 px-2 rounded-lg">Vue</p>
            <p className="font-poppins text-xs text-[#BEBEBE] bg-black py-0.5 px-2 rounded-lg">Google Cloud</p>
          </div>
        </div>
        </Link>
      </div>
      <div className='w-full bg-[#19232C] min-h-[200px] flex flex-col gap-3 rounded-md max-w-[400px] m-auto md:w-1/2 md:min-w-[330px] lg:w-1/5 lg:m-0'>
      <Link href = "./components/projects/scobaby">
        <div className='w-full bg-white max-h-[200px] rounded-t-md'>
          <img src={'/scobabyPreview.png'} alt='' className='w-full rounded-t-md max-h-[200px] min-h-[200px] object-cover' />
        </div>
        <div className="w-full min-h-[50%] flex flex-col gap-1 p-5">
          <h4 className='font-poppins text-xl font-bold'>Scobaby</h4>
          <p className="font-mono text-sm">Digital Storefront</p>
          <div className='w-full flex gap-2 mt-2'>
            <p className="font-poppins text-xs text-[#BEBEBE] bg-black py-0.5 px-2 rounded-lg">React</p>
            <p className="font-poppins text-xs text-[#BEBEBE] bg-black py-0.5 px-2 rounded-lg">Frontend</p>
          </div>
        </div>
    </Link>
      </div>
      <div className='w-full bg-[#19232C] min-h-[200px] flex flex-col gap-3 rounded-md max-w-[400px] m-auto md:w-1/2 md:min-w-[330px] lg:w-1/5 lg:m-0'>
      <Link href = "./components/projects/card">
        <div className='w-full bg-white max-h-[200px] rounded-t-md'>
          <img src={'/cardgamePreview.JPG'} alt='' className='w-full rounded-t-md max-h-[200px] min-h-[200px] object-cover' />
        </div>
        <div className="w-full min-h-[50%] flex flex-col gap-1 p-5">
          <h4 className='font-poppins text-xl font-bold'>Card Game</h4>
          <p className="font-mono text-sm">First Project</p>
          <div className='w-full flex gap-2 mt-2'>
            <p className="font-poppins text-xs text-[#BEBEBE] bg-black py-0.5 px-2 rounded-lg">Javascript</p>
            <p className="font-poppins text-xs text-[#BEBEBE] bg-black py-0.5 px-2 rounded-lg">OOP</p>
          </div>
        </div>
      </Link>
      </div>
    </div>
  )
}

export default ProjectPreview