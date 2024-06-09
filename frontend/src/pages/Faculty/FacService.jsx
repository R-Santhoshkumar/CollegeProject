import React from "react";
import { NavLink } from "react-router-dom";

function FacService() {
  return (
    <div className="w-full h-full flex flex-col flex-1 p-5  bg-gradient-to-br from-white/50  to-white/30 backdrop-blur-sm  rounded-r-3xl">
      <span className="text-black font-semibold pb-5 text-3xl">Services</span>
      <p className="text-xl indent-10 pb-3 text-black">
        The Services Page Provide services like Adding result, Updating result add can view the grid syllabus in it.
      </p>
      <div className="w-full h-full grid grid-cols-2 gap-10 p-5 overflow-auto">
        <div className="w-full h-full rounded-2xl  p-5 bg-white/50 shadow-md  grid grid-rows-none justify-center items-center text-lg  ">
          <center>
            <label className="text-2xl font-semibold text-black">
              View Grid Syllabus
            </label>
          </center>
          <p className="indent-7 pb-4 text-black">
            here you can see the actually see the grid syllabus.
          </p>
          <NavLink
            to="/FacGridSyllabus"
            className={
              "w-full h-auto p-4 rounded-2xl flex flex-row justify-evenly bg-white/80 hover:bg-[#65dfc9] text-black items-center transition ease-in-out duration-500 "
            }
          >
            <label className="text-xl font-medium">view Syllabus</label>
          </NavLink>
        </div>
        <div className="w-full h-full rounded-2xl  p-5 bg-white/50 shadow-md  grid grid-rows-none justify-center items-center text-lg ">
          <center>
            <label className="text-2xl font-semibold text-black">
              View Result
            </label>
          </center>
          <p className="indent-7 pb-4 text-black">
            here you can see the actually see the results you want and can
            download it.
          </p>
          <NavLink
            to="/FacViewResult"
            className={
              "w-full h-auto p-4 rounded-2xl flex flex-row justify-evenly bg-white/80 text-black items-center hover:bg-[#65dfc9] transition ease-in-out duration-500 "
            }
          >
            <label className="text-xl font-medium">view Result</label>
          </NavLink>
        </div>
        <div className="w-full h-full rounded-2xl  p-5 bg-white/50 shadow-md grid grid-rows-none justify-center items-center text-lg">
          <center>
            <label className="text-2xl font-semibold text-black">
              View Consolidate Marksheet
            </label>
          </center>
          <p className="indent-7 pb-4 text-black">
            here you can see the actually see the Consolidate results you want
            and can download it.
          </p>
          <NavLink
            to="/FacConsolidateResult"
            className={
              "w-full h-auto p-4 rounded-2xl flex flex-row justify-evenly bg-white/80 text-black items-center hover:bg-[#65dfc9] transition ease-in-out duration-500 "
            }
          >
            <label className="text-xl font-medium">view Consolidate</label>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default FacService;
