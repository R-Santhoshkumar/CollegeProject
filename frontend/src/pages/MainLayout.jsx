import React, { useState, useEffect } from "react";
import BDULogo from "./../assets/img/BDU_logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import StudentNavBar from "./../components/StudentNavBar.json";
import FacultyNavBar from "./../components/FacultyNavBar.json";
import AdminNavBar from "./../components/AdminNavBar.json";

function MainLayout() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [navLinks, setNavLinks] = useState([]);

  // useEffect(() => {
  //   async function fetchUserInfo() {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/task/userinfo");
  //       if (response.data.role) {
  //         setRole(response.data.role);
  //       } else {
  //         console.error("No Data");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user info:", error);
  //     }
  //   }
  //   fetchUserInfo();
  // }, []);

  useEffect(() => {
    async function CheckUserInfo() {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/check-session");
        if (response.data.success) {
          setRole(response.data.success);
        } else {
          console.error("No Data");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    }
    CheckUserInfo();
  }, []);

  useEffect(() => {
    function roleUser(role) {
      switch (role) {
        case "Student":
          setNavLinks(StudentNavBar);
          break;
        case "Faculty":
          setNavLinks(FacultyNavBar);
          break;
        case "Admin":
          setNavLinks(AdminNavBar);
          break;
        default:
          break;
      }
    }
    if (role) {
      roleUser(role);
    }
  }, [role]);

  async function handleLogout() {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/logout");
      if (response.data.success) {
        Cookies.remove("sessionId");
        console.log("Logout Successful!");
        navigate("/");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }

  return (
    <div className="m-0 p-8 box-border flex flex-1  bg-gradient-to-tr from-[#65dfc9]  to-[#6cdbeb]  justify-center items-center font-inter w-full h-screen">
      <div className="flex flex-row h-full w-full rounded-3xl ">
        <div className=" grid grid-rows-5  justify-center items-center font-sans w-1/6 bg-white/80 rounded-l-3xl h-full max-h-screen ">
          <div className=" flex flex-col w-full h-full justify-center items-center">
            <img className="h-[90px] top-2" src={BDULogo} alt="BDULOGO" />
          </div>
          <div className="w-full h-full grid grid-rows-6 gap-5 row-span-3">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="justify-start flex gap-3 text-center rounded-lg items-center p-2 hover:shadow-md hover:bg-[#65dfc9] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <svg
                  xmlns={link.svgNamespace}
                  viewBox={link.svgViewBox}
                  fill="currentColor"
                  className="w-7 h-7 hover:cursor-pointer"
                >
                  <path d={link.svgPath} />
                </svg>
                <label className="text-lg font-medium hover:cursor-pointer">
                  {link.label}
                </label>
              </NavLink>
            ))}
          </div>
          <div className=" grid grid-cols-none w-full h-full justify-center items-center">
            <button
              className="justify-start flex gap-3 text-center rounded-lg items-center p-2 hover:shadow-2xl hover:cursor-pointer hover:bg-[#65dfc9] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              onClick={handleLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
              <label className="text-lg font-medium hover:cursor-pointer">
                Logout
              </label>
            </button>
          </div>
        </div>
        <div className="w-full h-full bg-transparent">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
