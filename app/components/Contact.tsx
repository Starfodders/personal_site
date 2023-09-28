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
              <img src = {'/icons/linked.svg'}/>
              <a href = "https://www.linkedin.com/in/michael-deng-840215199/" target= "_blank" className='font-mono'>LinkedIn</a>
            </div>
            <div className='flex gap-3 pb-3'>
              <img src = {'/icons/mail.svg'}/>
              <a className='font-mono' href = "mailTo:michaeldeng55@gmail.com">michaeldeng55@gmail.com</a>
            </div>
            <div className='flex gap-3 pb-3'>
              <img src = {'/icons/github.svg'}/>
              <a className='font-mono' href = "https://github.com/Starfodders" target='_blank'>Github</a>
            </div>
            <div className='flex gap-3 pb-3'>
              <img src = {'/icons/instagram.svg'}/>
              <a className='font-mono' href = "https://www.instagram.com/mikodeng/" target= "_blank">Instagram</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact