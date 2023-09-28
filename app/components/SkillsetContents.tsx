import React from 'react'

const SkillsetContents = () => {
  return (
    <div className='w-full flex flex-wrap justify-between lg:max-w-[80%]'>
      <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <img src = {'/icons/react.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[50px]" loading='lazy'/>
          <p>React</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <img src = {'/icons/nextjs.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[60px]" loading='lazy'/>
          <p>NextJS</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <img src = {'/icons/ts.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[50px]" loading='lazy'/>
          <p>Typescript</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <img src = {'/icons/vue.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[60px]" loading='lazy'/>
          <p>Vue</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <img src = {'/icons/tailwind.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[60px]" loading='lazy'/>
          <p>Tailwind</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <img src = {'/icons/three.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[50px]" loading='lazy'/>
          <p>ThreeJS</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <img src = {'/icons/aws.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[60px]" loading='lazy'/>
          <p>AWS</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <img src = {'/icons/figma.svg'} alt = '' className="w-logo max-h-[40px] lg:w-logo-lg lg:min-h-[60px]" loading='lazy'/>
          <p>Figma</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4 last:mx-auto md:last:mx-0">
          <img src = {'/icons/express.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[50px]" loading='lazy'/>
          <p>ExpressJS</p>
        </div>
      </div>
  )
}

export default SkillsetContents