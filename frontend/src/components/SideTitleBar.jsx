import React from "react";
import BDULOGO from "../assets/img/BDU_logo.svg";

function SideTitleBar() {
  return (
    <div className="flex flex-col h-full w-full  justify-center items-center">
      <img src={BDULOGO} alt="BDULogo" />
      <span className=" font-semibold text-black text-[28px]">
        Bharathidasan University, Tiruchirappalli
      </span>
      <span className=" font-semibold text-black text-[26px]">
        Department of Computer Science, Engineering and Application
      </span>
    </div>
  );
}

export default SideTitleBar;
