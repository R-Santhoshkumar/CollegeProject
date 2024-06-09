import React from "react";
import BDULOGO from "../assets/img/BDU_logo.svg";

function TopTitleBar() {
  return (
    <div className="flex flex-rows h-auto w-full p-3 justify-left items-center">
      
        <div className="pr-5 ">
          <img src={BDULOGO} alt="BDULogo" className="w-[100px] l-0" />
        </div>

        <div className="w-full h-full flex flex-col justify-left">
          <span className=" font-semibold  text-3xl">
            Bharathidasan University, Tiruchirappalli
          </span>

          <span className=" font-semibold  text-3xl">
            Department of Computer Science, Engineering and Application
          </span>
        </div>
    </div>
  );
}

export default TopTitleBar;
