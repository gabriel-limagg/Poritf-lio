import React from 'react';
import foto from '../assets/foto.jpg'

function ProfilePicture() {
  return (
    <section className=''>    
    <div className=" animate-fade-in rounded-4xl border-8 border-gray-800 md:mt-80 lg:mt-68  xl:w-56 lg:ml-24 md:w-32 md:ml-16  2xl:ml-62 xl:ml-32 lg:w-44 ">
     <img className='rounded-3xl ' src={foto} alt="" />
    </div>
    </section>
  );
}

export default ProfilePicture;
