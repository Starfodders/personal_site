import React from 'react'

const Contact = () => {
  return (
    <div className='w-full min-h-[20rem] bg-black p-10 flex lg:justify-center' id = "contact">
      <div className='w-full md:flex md:justify-around md:items-center lg:max-w-[50%]'>
          <div className="pb-8 md:w-2/5">
            <p className="font-mono lg:text-lg">Interested in working together? Let me know! Let's bring your idea to life.</p>
          </div>
          <div className="w-full flex flex-col md:w-2/5">
            <div className='flex gap-3 pb-3'>
              <img src = {'/linked.svg'}/>
              <p className='font-mono'>LinkedIn</p>
            </div>
            <div className='flex gap-3 pb-3'>
              <img src = {'/mail.svg'}/>
              <p className='font-mono'>michaeldeng55@gmail.com</p>
            </div>
            <div className='flex gap-3 pb-3'>
              <img src = {'/github.svg'}/>
              <p className='font-mono'>Github</p>
            </div>
            <div className='flex gap-3 pb-3'>
              <img src = {'/instagram.svg'}/>
              <p className='font-mono'>Instagram</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact