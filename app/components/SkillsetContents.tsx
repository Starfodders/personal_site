import React from 'react'
import Image from 'next/image';

const SkillsetContents = () => {
  return (
    <div className='w-full flex flex-wrap justify-between lg:max-w-[80%]'>
      <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <Image src = {'/icons/react.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[50px]" width={40} height={40}/>
          <p>React</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <Image src = {'/icons/nextjs.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[60px]" width={40} height={40}/>
          <p>NextJS</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <Image src = {'/icons/ts.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[50px]" width={40} height={40}/>
          <p>Typescript</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <Image src = {'/icons/vue.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[60px]" width={40} height={40}/>
          <p>Vue</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <Image src = {'/icons/tailwind.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[60px]" width={40} height={40}/>
          <p>Tailwind</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <Image src = {'/icons/three.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[50px]" width={40} height={40}/>
          <p>ThreeJS</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <Image src = {'/icons/aws.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[60px]" width={40} height={40}/>
          <p>AWS</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4">
          <Image src = {'/icons/figma.svg'} alt = '' className="w-logo max-h-[40px] lg:w-logo-lg lg:min-h-[60px]" width={40} height={40}/>
          <p>Figma</p>
        </div>
        <div className="w-1/4 p-2 flex flex-col items-center gap-2 md:w-1/5 lg:w-[calc(100%/9)] lg:p-4 last:mx-auto md:last:mx-0">
          <Image src = {'/icons/express.svg'} alt = '' className="w-logo min-h-[40px] lg:w-logo-lg lg:min-h-[50px]" width={40} height={40}/>
          <p>ExpressJS</p>
        </div>
      </div>
  )
}

export default SkillsetContents