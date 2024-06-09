import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {validateEmail,validatePassword} from "./Validation";

const FormUserDetails = ({ nextStep, handleChange, values }) => {
  //const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {

    e.preventDefault();
    // Add your validation logic here if needed
    const isValidEmail = validateEmail(values.email);
      const isValidPassword = validatePassword(values.password);
      const isValidConfirmPassword = validatePassword(values.confirmPassword);

      if (!isValidEmail || !isValidPassword || !isValidConfirmPassword) {
        alert(
          "Invalid email or password format. Please try again. The Password must contain minimum 8 character, 1 capital letter, 1 small letter, 1 number ,1 special character"
        );
        return;
      }

      if (isValidPassword !== isValidConfirmPassword) {
        alert("The password and confrim password not matching!");
        return;
    }
    
    nextStep();
  };

  return (
    <><div className=" w-full flex items-center left-0 top-0 justify-start">
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
      <div className=" flex flex-1 min-w-[500px] justify-center items-center ">
        <label className="text-[27px] font-semibold text-black">
          User Details
        </label>
      </div>
    </div>
      
      <div className="flex flex-1 w-full items-center justify-center pt-5">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-3 items-center pb-3">
            <label
              for="email"
              className="text-lg text-black font-medium whitespace-nowrap"
            >
              Email-id :
            </label>
            <input
              type="email"
              className="w-full text-black bg-white/80 rounded-xl p-2 mt-1 focus:outline-none focus:bg-white"
              placeholder="Email-id"
              name="email"
              id="email"
              required
              value={values.email}
              onChange={handleChange("email")}
            />
          </div>
          <div className="flex gap-3 items-center pb-3">
            <label
              for="password"
              className="text-lg text-black font-medium whitespace-nowrap"
            >
              Password:
            </label>
            <input
              type="password"
              className="w-full text-black bg-white/80 rounded-xl p-2 mt-1 focus:outline-none focus:bg-white"
              placeholder="Password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange("password")}
              required
            />
          </div>
          <div className="flex gap-3 items-center pb-3">
            <label
              for="confirmPassword"
              className="text-lg text-black font-medium whitespace-nowrap"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              className="w-full text-black bg-white/80 rounded-xl p-2 mt-1 focus:outline-none focus:bg-white"
              placeholder="Confirm Password"
              name="confirmPassword"
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              required
            />
          </div>
          <div className="flex gap-3 items-center pb-3">
              <label
                for="role"
                className="text-lg text-black font-medium whitespace-nowrap"
              >
                Role:
              </label>
              <select
                className="w-full text-black bg-white/80 rounded-xl p-2 mt-1 focus:outline-none focus:bg-white"
                name="role"
                id="role"
                value={values.role}
                onChange={handleChange("role")}
                required
              >
                <option value="">Select Role</option>
                <option value="student">Student</option>
              </select>
            </div>
          <center>
            <button
              className="p-2 rounded-lg px-10 text-xl bg-white/80 font-semibold border-none hover:bg-[#65dfc9]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              type="submit"
            >
              Next
            </button>
          </center>
        </form>
      </div>
    </>
  );
};

export default FormUserDetails;
