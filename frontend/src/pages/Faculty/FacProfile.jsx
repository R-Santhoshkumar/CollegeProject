import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function FacProfile() {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const sessionId = Cookies.get("sessionId");
        console.log("Session ID:", sessionId);

        if (!sessionId) {
          setError("sessionId not found"); // Handle case where sessionId is not found in cookies
          return;
        }

        const response = await axios.post(
          "http://localhost:5000/api/task/faculty_profileinfo",
          { sessionId }
          // Pass sessionId in headers
        );

        if (response.data.success) {
          setUserData(response.data.userData);
        } else {
          setError(response.data.message); // Handle server error message
        }
      } catch (error) {
        console.error(error);
        setError("An error occurred while fetching user data.");
      }
    };

    fetchUserData();
  }, []);

  return (
    
      <div className="w-full h-full flex flex-col flex-1 p-5  bg-gradient-to-br from-white/50  to-white/30 backdrop-blur-sm  rounded-r-3xl">
        <span className="text-black font-semibold text-3xl pb-5">
          Faculty Profile
        </span>
        <div className="grid grid-cols-2 gap-5 pt-5 mt-5">
        <div className="flex flex-col w-full h-auto  p-3 rounded-3xl bg-white/70 shadow-md ">
          <label className="text-[22px] text-black font-semibold ">Name:</label>
          <label className="text-[22px] text-black p-3">{userData.name}</label>
        </div>

        <div className="flex flex-col w-full h-auto  p-3 rounded-3xl bg-white/70 shadow-md">
          <label className="text-[22px] text-black font-semibold ">Faculty ID:</label>
          <label className="text-[22px] text-black p-3">{userData.faculty_id}</label>
        </div>

        <div className="flex flex-col w-full h-auto  p-3 rounded-3xl bg-white/70 shadow-md">
          <label className="text-[22px] text-black font-semibold ">Year of Join:</label>
          <label className="text-[22px] text-black p-3">{userData.year_of_join}</label>
        </div>

        <div className="flex flex-col w-full h-auto  p-3 rounded-3xl bg-white/70 shadow-md">
          <label className="text-[22px] text-black font-semibold ">Department:</label>
          <label className="text-[22px] text-black p-3">{userData.department}</label>
        </div>

        <div className="flex flex-col w-full h-auto  p-3 rounded-3xl bg-white/70 shadow-md">
          <label className="text-[22px] text-black font-semibold ">Email:</label>
          <label className="text-[22px] text-black p-3">{userData.email}</label>
        </div>

        <div className="flex flex-col w-full h-auto  p-3 rounded-3xl bg-white/70 shadow-md">
          <label className="text-[22px] text-black font-semibold ">Designation:</label>
          <label className="text-[22px] text-black p-3">{userData.designation}</label>
        </div>
        </div>
      </div>
    
  );
}

export default FacProfile;
