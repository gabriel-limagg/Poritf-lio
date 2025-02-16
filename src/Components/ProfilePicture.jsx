import React from 'react';
import foto from '../assets/foto.jpg'

function ProfilePicture() {
  return (
    <div className=" animate-fade-in rounded-4xl border-8 border-gray-900  flex justify-center items-center mt-40 ml-40 w-50">
     <img className='rounded-3xl' src={foto} alt="" />
    </div>
  );
}

export default ProfilePicture;
