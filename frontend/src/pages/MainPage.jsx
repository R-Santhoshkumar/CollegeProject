import React from "react";
import SideTitleBar from "../components/SideTitleBar";
import { NavLink } from "react-router-dom";

function MainPage() {
  return (
    <div className="m-0 p-8 box-border flex flex-1  bg-gradient-to-tr from-[#65dfc9]  to-[#6cdbeb]  justify-center items-center font-inter w-full h-screen">
      <div className="w-full h-auto justify-center items-center">
        <SideTitleBar />
      </div>
      <div className="w-[40%] h-full flex flex-col  justify-center items-center p-5 rounded-2xl">
        <div className="w-full h-auto bg-gradient-to-br from-white/70  to-white/30 backdrop-blur-sm flex flex-col justify-center gap-3 items-center p-5 rounded-2xl">
          <div className="w-full justify-center items-center flex pt-3">
            <NavLink
              to="/StudentLogin"
              className="p-2 rounded-lg px-10 text-xl bg-white/80 font-semibold border-none hover:bg-[#65dfc9] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Student Login
            </NavLink>
          </div>
          <div className="w-full justify-center items-center flex pt-3">
            <NavLink
              to="/FacultyLogin"
              className="p-2 rounded-lg px-10 text-xl bg-white/80 font-semibold border-none hover:bg-[#65dfc9] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Faculty Login
            </NavLink>
          </div>
          <div className="w-full justify-center items-center flex pt-3">
            <NavLink
              to="/AdminLogin"
              className="p-2 rounded-lg px-10 text-xl bg-white/80 font-semibold border-none hover:bg-[#65dfc9] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Admin Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
