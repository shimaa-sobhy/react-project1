import React, { useState } from "react";
import img1 from "./../../assets/imags/port1.png";
import img2 from "./../../assets/imags/port2.png";
import img3 from "./../../assets/imags/port3.png";
import img4 from "./../../assets/imags/port1.png";
import img5 from "./../../assets/imags/port2.png";
import img6 from "./../../assets/imags/port3.png";

export default function Portfolio() {
  const allImgs=[img1,img2,img3,img4,img5,img6];
  const [isOpen,setIsOpen]=useState(false);
  const [currentIndex,setCurrentIndex]=useState(0);
  function handelIsOpen(){
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
  function handelNext(){
    setCurrentIndex((index)=> index < allImgs.length - 1 ? index +1 :0 )
  }
  function handelPrev(){
    setCurrentIndex((a)=> ( a > 0 ? a - 1 : allImgs.length - 1)  );
  }

  return (
    <>
    <div className="  text-center text-black p-5 ">
      <h1 className="text-4xl font-bold">PORTFOLIO COMPONENT</h1>


      <div className="flex gap-4 justify-center  items-center">
                    <div className="bg-[#2C3E50] h-[4px] w-[80px] rounded-sm"></div>
                    <i className="fa-solid fa-star text-lg"></i>
                    <div className="bg-[#2C3E50] h-[4px] w-[80px] rounded-sm"></div>
      </div>
     

      <div className="grid cols-1 md:grid-cols-2  lg:grid-cols-3  gap-4">
        {allImgs.map((ele,idx)=> (
          <div key={idx} className=" px-2 py-2" onClick={handelIsOpen}>
            <div className="relative overflow-hidden">
                <img src={ele} alt="" className="rounded-lg" />
                <div className="absolute flex justify-center items-center w-full h-full bg-[#1abc9cb0] top-0 cursor-pointer rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
            </div>
          </div>
        ))}
      </div>
{isOpen && (
  <div className="fixed inset-0  flex items-center justify-center">
    <div className="bg-red-400 p-5 flex items-center justify-center">
      <button onClick={handelNext} className="fa-2xl">+</button>
      <img src={allImgs[currentIndex]} alt="" className="w-1/2  " />
      <button onClick={handelPrev} className="fa-2xl">-</button>
    </div>
    <button onClick={closeModal} className="absolute start-3 top-3 p-2 rounded-full bg-fuchsia-700 ">X</button>

  </div>
)}



    </div>
   
    </>
  );
}
