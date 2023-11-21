'use client'
import React from 'react'
import Image from 'next/image'
import {useState, useEffect} from "react"

const ReturnToTop = () => {

    const [buttonState, setButtonState] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setButtonState(true)
            } else {
                setButtonState(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

if (buttonState) {
    return (
        <div className='fixed bottom-8 right-8 bg-burnt-yellow p-2 rounded-md hover:cursor-pointer hover:bg-burnt-yellow-highlighted animate-navDown' onClick = {() => window.scrollTo(0,0)}>
            <Image src = {"/icons/arrowForward.svg"} alt = 'return to top' width={30} height={30} className='rotate-[270deg]'/>
        </div>
      )
}
}

export default ReturnToTop