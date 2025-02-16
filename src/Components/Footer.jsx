import React from 'react'
import whats from '../assets/whats.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

export default function Footer() {
  return (
    <div className=' m-auto pt-10 justify-center flex w-20 '>
        <img src={linkedin} alt="" />
        <img src={github} alt="" />
        <img src={whats} alt="" />
    </div>
  )
}

