import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import Cookies from "js-cookie";

function StudProfile() {
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
          "http://localhost:5000/api/task/student_profileinfo",
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
      
        <span className=" font-semibold text-3xl">Profile</span>
        <div className="overflow-x-auto mt-5" style={{ maxHeight: "73vh" }}>
          <table className="table-auto w-full bg-white/80 border border-black border-collapse">
            <tbody>
              <tr>
                <td className=" font-semibold border border-black p-2">Name:</td>
                <td className=" border border-black p-2">{userData.name}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Date of Birth:</td>
                <td className=" border border-black p-2">{userData.DOB}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Gender:</td>
                <td className=" border border-black p-2">{userData.gender}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Address:</td>
                <td className=" border border-black p-2">{userData.address}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Father Name:</td>
                <td className=" border border-black p-2">{userData.father_name}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Mother Name:</td>
                <td className=" border border-black p-2">{userData.mother_name}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Guardian Name:</td>
                <td className=" border border-black p-2">{userData.guardian_name}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Father Occupation:</td>
                <td className=" border border-black p-2">{userData.father_occupation}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Mobile Number:</td>
                <td className=" border border-black p-2">{userData.mobile_number}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Parents Mobile Number:</td>
                <td className=" border border-black p-2">{userData.parents_mob_no}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Blood Group:</td>
                <td className=" border border-black p-2">{userData.blood_group}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Religion:</td>
                <td className=" border border-black p-2">{userData.religion}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Caste:</td>
                <td className=" border border-black p-2">{userData.caste}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Nationality:</td>
                <td className=" border border-black p-2">{userData.nationality}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Email:</td>
                <td className=" border border-black p-2">{userData.email}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Registration Number:</td>
                <td className=" border border-black p-2">{userData.register_number}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Programme:</td>
                <td className=" border border-black p-2">{userData.programme}</td>
              </tr>
              <tr>
                <td className=" font-semibold border border-black p-2">Batch:</td>
                <td className=" border border-black p-2">{userData.batch}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    
  );
}

export default StudProfile;
