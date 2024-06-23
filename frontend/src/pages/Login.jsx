import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SideTitleBar from "../components/SideTitleBar";
import { validateEmail, validatePassword } from "../components/Validation";
import axios from "axios";
import Cookies from "js-cookie";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role:""
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Check if user is logged in after component mounts

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      // Input validation with robust functions
      const isValidEmail = validateEmail(formData.email);
      const isValidPassword = validatePassword(formData.password);

      if (!isValidEmail || !isValidPassword) {
        alert("Invalid email or password format. Please try again.");
        return;
      }

      // Include credentials in request with `withCredentials`
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      if (response.data.success) {
        let token = response.data.token;
        console.log(token);
        Cookies.set("sessionId", token, {
          path: "/", // Set path as needed
          sameSite: "strict", // Secure option
          secure: true, // Set for HTTPS
          //httpOnly: true
        });
        alert("Login successful!");
        navigate("/StudHome"); // Redirect as desired
      } else {
        alert("Login failed. Incorrect credentials or other error.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while processing the login request.");
    }
  }
  return (
    <div className="m-0 p-8 box-border flex flex-1  bg-gradient-to-tr from-[#65dfc9]  to-[#6cdbeb]  justify-center items-center font-inter w-full h-screen">
      <div className="w-full h-auto justify-center items-center">
        <SideTitleBar />
      </div>
      <div className="w-[40%] h-full flex flex-col col-span-2 justify-center items-center p-3 rounded-lg">
        <div className="w-full h-auto bg-gradient-to-br from-white/70  to-white/30 backdrop-blur-sm flex flex-col justify-center gap-3 items-center p-5 rounded-lg">
          <div className=" w-full flex items-center left-0 top-0 justify-start">
            <NavLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink>
            <div className="flex w-full justify-center items-center">
              <label className="text-[27px] font-semibold text-black">
                Login
              </label>
            </div>
          </div>

          <form className="w-full h-full" onSubmit={handleSubmit}>
            <div className="flex flex-col pb-3">
              <label htmlFor="email" className="text-lg text-black font-medium">
                Email-id :
              </label>
              <input
                type="email"
                className="w-full text-black bg-white/80 rounded-xl p-2 mt-1 focus:outline-none focus:bg-white"
                placeholder="Enter the Email-id"
                name="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                required
                autoFocus
              />
            </div>
            <div className="flex flex-col pb-3">
              <label htmlFor="password" className="text-lg text-black font-medium">
                Password :
              </label>
              <input
                type="password"
                className="w-full text-black bg-white/80 rounded-xl p-2 mt-1 focus:outline-none focus:bg-white"
                placeholder="Enter the Password"
                name="password"
                id="password"
                onChange={handleChange}
                value={formData.password}
                required
              />
            </div>
            <div className="flex flex-col pb-3">
              <label
                htmlFor="role"
                className="text-lg text-black font-medium whitespace-nowrap"
              >
                Role:
              </label>
              <select
                className="w-full text-black bg-white/80 rounded-xl p-2 mt-1 focus:outline-none focus:bg-white"
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select Role</option>
                <option value="Student">Student</option>
                <option value="Faculty">Faculty</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div className="justify-end items-center flex">
              <label className="mt-1 hover:cursor-pointer text-black  hover:text-lg text-lg text-medium py-2 transition ease-in-out duration-500">
                Forget Password ?
              </label>
            </div>
            <div className="w-full justify-center items-center flex pt-3">
              <button
                type="submit"
                className="p-2 rounded-lg px-10 text-xl bg-white/80 font-semibold border-none hover:bg-[#65dfc9] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Login
              </button>
            </div>
            <div className="w-full justify-center items-center flex pt-3 text-lg">
              <label className="text-black">
                Not a Member?
                <NavLink
                  to="/Register"
                  className=" hover:text-lg hover:cursor-pointer pl-2 transition ease-in-out duration-500"
                >
                  Register Now
                </NavLink>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
