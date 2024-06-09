import React from "react";
import BDU_Logo from "../../assets/img/BDU_logo.svg";

function FacAbout() {
  return (
    <div className="w-full h-full flex flex-col flex-1 p-5  bg-gradient-to-br from-white/50  to-white/30 backdrop-blur-sm  rounded-r-3xl">
     
        <span className="text-black font-semibold pb-3 text-3xl">About Us</span>
        <div
          className="w-full h-full flex flex-col  gap-5 p-5 overflow-auto"
          style={{ maxHeight: "75vh" }}
        >
          <div className="w-full h-auto flex flex-col bg-white/80   rounded-2xl ">
            <div className="w-full h-auto flex flex-row gap-10 p-7 overflow-auto">
              <p className="text-xl indent-10 text-black">
                Bharathidasan University established in February 1982 was named
                after the great revolutionary Tamil Poet, Bharathidasan
                (1891-1964). The motto of the University "We will create a brave
                new world" has been framed from Bharathidasan's poetic words
                "புதியதோர் உலகம் செய்வோம்". The University endeavours to be true
                to such a vision by creating in the region a brave new world of
                academic innovation for social change.
              </p>
              <img
                src={BDU_Logo}
                alt="bduLogo"
                
              />
            </div>
            <div className="w-full h-auto flex flex-row  p-5 overflow-auto">
              <p className="text-xl indent-10 text-black">
                Computer science has transformed college education by
                revolutionizing learning methods, research capabilities, and
                administrative processes. Through online courses, interactive
                simulations, and digital libraries, students access knowledge
                globally. Research benefits from big data analytics and AI,
                accelerating discoveries. Administrative tasks streamline with
                automated systems.
              </p>
            </div>
          </div>

          <div className="w-full h-auto flex flex-col p-5 bg-white/80   rounded-2xl">
            <span className="text-black font-semibold text-2xl">
              Contact Us
            </span>
            <div className="grid grid-cols-2 h-auto w-full">
              <div className="flex flex-row w-full gap-3 h-auto p-2 items-center ">
                <label className="text-[22px] text-black font-semibold ">
                  Name :
                </label>
                <label className="text-[22px] text-black "> ABC</label>
              </div>
              <div className="flex flex-row w-full h-auto gap-3 p-2 ">
                <label className="text-[22px] text-black font-semibold ">
                  Email Id :
                </label>
                <label className="text-[22px] text-black ">ABC@gmail.com</label>
              </div>
              <div className="flex flex-row w-full h-auto gap-3 p-2 ">
                <label className="text-[22px] text-black font-semibold ">
                  Phone No :
                </label>
                <label className="text-[22px] text-black ">1234567890</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default FacAbout;
