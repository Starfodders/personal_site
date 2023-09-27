import React from 'react'

const SkillsetContents = () => {
  return (
    <div className='w-full flex flex-wrap justify-between lg:max-w-[80%]'>
      <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <img src = {'/react.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[50px]"/>
          <p>React</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <img src = {'/nextjs.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[60px]"/>
          <p>NextJS</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <img src = {'/ts.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[50px]"/>
          <p>Typescript</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <img src = {'/vue.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[60px]"/>
          <p>Vue</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <img src = {'/tailwind.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[60px]"/>
          <p>Tailwind</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <img src = {'/three.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[50px]"/>
          <p>ThreeJS</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <img src = {'/aws.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[60px]"/>
          <p>AWS</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <img src = {'/figma.svg'} alt = '' className="w-logo max-h-[40px] lg:w-logo-lg lg:min-h-[60px]"/>
          <p>Figma</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4 last:mx-auto md:last:mx-0">
          <img src = {'/express.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[50px]"/>
          <p>ExpressJS</p>
        </div>
      </div>
  )
}

export default SkillsetContents