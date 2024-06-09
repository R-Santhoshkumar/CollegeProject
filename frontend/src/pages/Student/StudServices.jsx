import React from "react";
import { NavLink } from "react-router-dom";

function StudServices() {
  return (
    <div className="w-full h-full flex flex-col flex-1 p-5  bg-gradient-to-br from-white/50  to-white/30 backdrop-blur-sm  rounded-r-3xl">
      <span className="text-black font-semibold text-3xl">Dashboard</span>
      <p className="text-xl indent-10 ">
        The Services this Page Provide are related to the Library books like
        adding the new book, deleting, returning books, etc.
      </p>
      <div className="w-full h-full grid grid-cols-2 gap-10 p-5 overflow-auto">
        <div className="w-full h-full rounded-2xl  p-5 bg-white/50 shadow-md  grid grid-rows-none justify-center items-center text-lg ">
          <center>
            <label className="text-2xl font-semibold text-black">
              Result View
            </label>
          </center>
          <p className="indent-7 pb-4 ">
            You can able to view the results
          </p>
          <NavLink
            to="/StudResult"
            className="w-full h-auto p-4 rounded-2xl flex flex-row justify-evenly bg-white1 text-black items-center hover:bg-[#65dfc9]  transition ease-in-out duration-500 "
          >
            <label className="text-xl font-medium">View Result</label>
          </NavLink>
        </div>
        {/*<div className="w-full h-full rounded-2xl  p-5 bg-white/50 shadow-md  grid grid-rows-none justify-center items-center text-lg ">
          <center>
            <label className="text-2xl font-semibold ">
              Update Bio Details
            </label>
          </center>
          <p className="indent-7 pb-4 ">
            Here you can able to update the bio-information for any change.
          </p>
          <NavLink
            to="/"
            className="w-full h-auto p-4 rounded-2xl flex flex-row justify-evenly bg-white1 text-black items-center hover:bg-[#FF79C6] transition ease-in-out duration-500"
          >
            <label className="text-xl font-medium">Update</label>
          </NavLink>
        </div>*/}
        <div className="w-full h-full rounded-2xl  p-5 bg-white/50 shadow-md  grid grid-rows-none justify-center items-center text-lg ">
          <center>
            <label className="text-2xl font-semibold ">
              View Grid Syllabus
            </label>
          </center>
          <p className="indent-7 pb-4 ">
            here you can see the actually see the grid syllabus.
          </p>
          <NavLink
            to="/StudGridView"
            className={
              "w-full h-auto p-4 rounded-2xl flex flex-row justify-evenly bg-white1 text-black items-center hover:bg-[#65dfc9]  transition ease-in-out duration-500 "
            }
          >
            <label className="text-xl font-medium">view Syllabus</label>
          </NavLink>
        </div>
  
      </div>
    </div>
  );
}

export default StudServices;
