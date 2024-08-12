import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-slate-800 text-center text-white p-5 ">
        <div className="grid cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 m-5 p-5">
          <div>
            <h2 className="text-2xl font-bold mb-3">LOCATION</h2>
            <p className="mb-6">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">AROUND THE WEB</h2>
            <i class="video circle fa-brands fa-facebook fa-1x" ></i>
            <i class=" video circle fa-brands fa-twitter"></i>
            <i class="video circle fa-brands fa-linkedin"></i>
            <i class="video circle fa-solid fa-globe"></i>

          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
       
      </div>
      <div className="bg-slate-950 text-center text-white p-5 ">
<p>Copyright © Your Website 2021</p>
      </div>
      </>
    
  );
}
