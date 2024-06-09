import React from 'react'
import { NavLink } from 'react-router-dom'

function AdmServices() {
  return (
    <div className="w-full h-full flex flex-col flex-1 p-5  bg-gradient-to-br from-white/50  to-white/30 backdrop-blur-sm  rounded-r-3xl">
      <span className="text-black font-semibold pb-5 text-3xl">Services</span>
      <p className="text-xl indent-10 ">
        The Services Page Provide services like Adding result, Updating result add can view the grid syllabus in it.
      </p>
      <div className="w-full h-full grid grid-cols-3 gap-10 p-3 overflow-auto" style={{ maxHeight: "69vh" }}>
        <div className="w-full h-full rounded-2xl  p-5 bg-white/50 shadow-md  grid grid-rows-none justify-center items-center text-lg  ">
          <center>
            <label className="text-2xl font-semibold ">
              Add Result 
            </label>
          </center>
          <p className="indent-7 pb-4 ">
            Here You can add the new exam result to the database. you can add the result through uploading the results in excel sheets.
          </p>
          <NavLink
            to="/AdmResultUploading"
            className={
              "w-full h-auto p-4 rounded-2xl flex flex-row justify-evenly bg-white/80 text-black items-center hover:bg-[#65dfc9] transition ease-in-out duration-500 "
            }
          >
            <label className="text-xl font-medium">Add Result</label>
          </NavLink>
        </div>
        <div className="w-full h-full rounded-2xl  p-5 bg-white/50 shadow-md  grid grid-rows-none justify-center items-center text-lg  ">
          <center>
            <label className="text-2xl font-semibold ">
              Update or Edit Result
            </label>
          </center>
          <p className="indent-7 pb-4 ">
            Here you can able to update the result in case for wrong entry.
          </p>
          <NavLink
            to="/AdmUpdateResult"
            className={
              "w-full h-auto p-4 rounded-2xl flex flex-row justify-evenly bg-white/80 text-black items-center hover:bg-[#65dfc9] transition ease-in-out duration-500 "
            }
          >
            <label className="text-xl font-medium">Update</label>
          </NavLink>
        </div>
        <div className="w-full h-full rounded-2xl  p-5 bg-white/50 shadow-md  grid grid-rows-none justify-center items-center text-lg  ">
          <center>
            <label className="text-2xl font-semibold ">
              View Grid Syllabus
            </label>
          </center>
          <p className="indent-7 pb-4 ">
            here you can see the actually see the grid syllabus.
          </p>
          <NavLink
            to="/AdmGridSyllabus"
             className={
              "w-full h-auto p-4 rounded-2xl flex flex-row justify-evenly bg-white/80 text-black items-center hover:bg-[#65dfc9] transition ease-in-out duration-500 "
            }
          >
            <label className="text-xl font-medium">view Syllabus</label>
          </NavLink>
        </div>
        {/*<div className="w-full h-full rounded-2xl  p-5 bg-white/50 shadow-md  grid grid-rows-none justify-center items-center text-lg  ">
          <center>
            <label className="text-2xl font-semibold ">
              View Result
            </label>
          </center>
          <p className="indent-7 pb-4 ">
            here you can see the actually see the results you want and can download it.
          </p>
          <NavLink
            to="/Adm"
             className={
              "w-full h-auto p-4 rounded-2xl flex flex-row justify-evenly bg-white/80 text-black items-center hover:bg-[#65dfc9] transition ease-in-out duration-500 "
            }
          >
            <label className="text-xl font-medium">view Result</label>
          </NavLink>
          </div>*/}
        <div className="w-full h-full rounded-2xl  p-5 bg-white/50 shadow-md  grid grid-rows-none justify-center items-center text-lg  ">
          <center>
            <label className="text-2xl font-semibold ">
              View Consolidate Marksheet
            </label>
          </center>
          <p className="indent-7 pb-4 ">
            here you can see the actually see the Consolidate results you want and can download it.
          </p>
          <NavLink
            to="/AdmConsolidateResult"
             className={
              "w-full h-auto p-4 rounded-2xl flex flex-row justify-evenly bg-white/80 text-black items-center hover:bg-[#65dfc9] transition ease-in-out duration-500 "
            }
          >
            <label className="text-xl font-medium">view Consolidate</label>
          </NavLink>
        </div>
        <div className="w-full h-full rounded-2xl  p-5 bg-white/50 shadow-md  grid grid-rows-none justify-center items-center text-lg  ">
          <center>
            <label className="text-2xl font-semibold ">
              Add Regulation
            </label>
          </center>
          <p className="indent-7 pb-4 ">
            here you can add New Regulation syllabus which will be implemented.
          </p>
          <NavLink
            to="/AdmUploadRegulation"
             className={
              "w-full h-auto p-4 rounded-2xl flex flex-row justify-evenly bg-white/80 text-black items-center hover:bg-[#65dfc9] transition ease-in-out duration-500 "
            }
          >
            <label className="text-xl font-medium">Add Regulation</label>
          </NavLink>
        </div>
        <div className="w-full h-full rounded-2xl  p-5 bg-white/50 shadow-md  grid grid-rows-none justify-center items-center text-lg  ">
          <center>
            <label className="text-2xl font-semibold ">
              Delete Result
            </label>
          </center>
          <p className="indent-7 pb-4 ">
            here you can delete entire result table for the particular semester and batch.
          </p>
          <NavLink
            to="/AdmDeleteResult"
             className={
              "w-full h-auto p-4 rounded-2xl flex flex-row justify-evenly bg-white/80 text-black items-center hover:bg-[#65dfc9] transition ease-in-out duration-500 "
            }
          >
            <label className="text-xl font-medium">Delete Result</label>
          </NavLink>
        </div>
        {/*<div className="w-full h-full rounded-2xl  p-5 bg-white/50 shadow-md  grid grid-rows-none justify-center items-center text-lg  ">
          <center>
            <label className="text-2xl font-semibold ">
              Subject Allocation
            </label>
          </center>
          <p className="indent-7 pb-4 ">
            here you can add faculty details in which the subjects are allocated to.
          </p>
          <NavLink
            to="/AdmSubjectAllocation"
             className={
              "w-full h-auto p-4 rounded-2xl flex flex-row justify-evenly bg-white/80 text-black items-center hover:bg-[#65dfc9] transition ease-in-out duration-500 "
            }
          >
            <label className="text-xl font-medium">Subject Allocation</label>
          </NavLink>
          </div>*/}
  
      </div>
    </div>
  )
}

export default AdmServices