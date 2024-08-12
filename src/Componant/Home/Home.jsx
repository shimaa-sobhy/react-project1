import React from 'react'
import avatar from './../../assets/imags/avatar.png'
export default function Home() {
  return (
    
   
    <div className='  bg-green-400 text-center text-white p-5 '>
      <img className='m-auto' src={avatar} alt="avatar" />
     <h1 className='text-4xl font-bold'>START FRAMEWORK</h1>
     <div className="flex gap-4 justify-center  items-center">
                    <div className="bg-[#eaecee] h-[4px] w-[80px] rounded-sm"></div>
                    <i className="fa-solid fa-star text-lg"></i>
                    <div className="bg-[#eaecee] h-[4px] w-[80px] rounded-sm"></div>
                </div> 
     
<p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    
   
  )
}