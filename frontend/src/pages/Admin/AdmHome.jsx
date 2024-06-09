import React from 'react'
import BDU_Logo from "../../assets/img/BDU_logo.svg";

function AdmHome() {
  return (
    <div className="w-full h-full flex flex-col flex-1 p-5  bg-gradient-to-br from-white/50  to-white/30 backdrop-blur-sm  rounded-r-3xl">
      <span className="text-black font-semibold pb-3 text-3xl">Home</span>
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
            <img src={BDU_Logo} alt="bduLogo" />
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
      </div>
    </div>
  );
}

export default AdmHome