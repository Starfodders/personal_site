import React from 'react'
import Image from 'next/image';

const SkillsetContents = () => {
  return (
    <div className='w-full flex flex-wrap justify-between lg:max-w-[80%] select-none'>
      <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <Image src = {'/icons/react.svg'} alt = 'reactJS' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[50px]" width={40} height={40}/>
          <p>React</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <Image src = {'/icons/nextjs.svg'} alt = 'nextJS' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[60px]" width={40} height={40}/>
          <p>NextJS</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <Image src = {'/icons/ts.svg'} alt = 'typescript' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[50px]" width={40} height={40}/>
          <p>Typescript</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <Image src = {'/icons/vue.svg'} alt = 'vue' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[60px]" width={40} height={40}/>
          <p>Vue</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <Image src = {'/icons/tailwind.svg'} alt = 'tailwindCSS' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[60px]" width={40} height={40}/>
          <p>Tailwind</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <Image src = {'/icons/three.svg'} alt = 'threeJS' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[50px]" width={40} height={40}/>
          <p>ThreeJS</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <Image src = {'/icons/aws.svg'} alt = 'amazon web services' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[60px]" width={40} height={40}/>
          <p>AWS</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <Image src = {'/icons/figma.svg'} alt = 'figma' className="w-logo max-h-[40px] lg:w-logo-lg lg:min-h-[60px]" width={40} height={40}/>
          <p>Figma</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4 last:mx-auto md:last:mx-0">
          <Image src = {'/icons/express.svg'} alt = 'express' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[50px]" width={40} height={40}/>
          <p>ExpressJS</p>
        </div>
      </div>
  )
}

export default SkillsetContents