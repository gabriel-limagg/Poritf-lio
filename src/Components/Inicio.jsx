import React from 'react'
import ProfilePicture from './ProfilePicture';
import Introduction from './Introduction';
import Navbar from './Navbar.jsX';

export default function Inicio() {
  return (
    <div>
        <Navbar/>
        <div className='pl-40 flex justify-between w-0 items-center '>
      <section id="introduction">
        <Introduction />
      </section>
      <section id="profilePicture">
        <ProfilePicture />
        </section>
        </div>

    </div>
  )
}
