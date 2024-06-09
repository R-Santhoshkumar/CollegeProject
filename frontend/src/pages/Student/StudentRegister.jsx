/*import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SideTitleBar from "../../components/SideTitleBar";
import axios from "axios";
import { validateEmail, validatePassword } from "../../components/Validation";
import FormAcademicDetails from "../../components/FormAcademicDetails";
import FormPersonalDetails from "../../components/FormPersonalDetails";
import FormUserDetails from "../../components/FormUserDetails";
import Confirm from "../../components/Confirm";
import Success from "../../components/Success";

function RegisterPage() {
  

  /*const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [success, setSuccess] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // **Basic input validation (can be enhanced):**
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword 
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const isValidEmail = validateEmail(formData.email);
      const isValidPassword = validatePassword(formData.password);
      const isValidConfirmPassword = validatePassword(formData.password);

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

      const response = await axios.post(
        "http://localhost:5000/api/auth/student_signup",
        formData
      );

      //alert("Registration Successfull! ");
      navigate("/StudDetails");
      setSuccess(response.data.message); // Assuming the server returns a success message
      //setFormData({ email_id: "", name: "", password: "", confirmPassword: "" }); // Clear form
    } catch (error) {
      console.error(error);
      // Display a generic error message to the user
    }
  };

  return (
    <div className="m-0 p-8 box-border flex flex-1  bg-gradient-to-tr from-[#65dfc9]  to-[#6cdbeb]  justify-center items-center font-inter w-full h-screen">
      <div className="w-full h-auto justify-center items-center">
        <SideTitleBar />
      </div>
      <div className="w-[40%]  h-full flex flex-col col-span-2 justify-center items-center p-3 rounded-lg">
        <div className="w-full h-auto  bg-gradient-to-br from-white/70  to-white/30 backdrop-blur-sm flex flex-col justify-center gap-3 items-center p-5 rounded-lg">
          <div className=" w-full flex items-center left-0 top-0 justify-start">
            <NavLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-black "
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
                Student Register
              </label>
            </div>
          </div>

          <form className="w-full h-full" onSubmit={handleSubmit}>
            <div className="flex flex-col pb-3">
              <label className="text-lg text-black font-medium">Name :</label>
              <input
                type="text"
                className="w-full text-black bg-white/80 rounded-xl p-2 mt-1 focus:outline-none focus:bg-white"
                placeholder="Enter the Name"
                name="name"
                required
                autoFocus
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col pb-3">
              <label className="text-lg text-black font-medium">
                Email-id :
              </label>
              <input
                type="email"
                className="w-full text-black bg-white/80 rounded-xl p-2 mt-1 focus:outline-none focus:bg-white"
                placeholder="Enter the Email-id"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col pb-3">
              <label className="text-lg text-black font-medium">
                Password :
              </label>
              <input
                type="password"
                className="w-full text-black bg-white/80 rounded-xl p-2 mt-1 focus:outline-none focus:bg-white"
                placeholder="Enter the Password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col pb-3">
              <label className="text-lg text-black font-medium">
                Confirm Password :
              </label>
              <input
                type="password"
                className="w-full text-black bg-white/80 rounded-xl p-2 mt-1 focus:outline-none focus:bg-white"
                placeholder="Enter the Password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="w-full justify-center items-center flex pt-3">
              <button
                type="submit"
                className="p-2 rounded-lg px-10 text-xl bg-white/80 font-semibold border-none hover:bg-[#65dfc9]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Register
              </button>
            </div>

            <div className="w-full justify-center items-center flex pt-3 text-lg">
              <label className="text-black">
                Already a Member?
                <NavLink
                  to="/StudentLogin"
                  className=" hover:text-lg hover:cursor-pointer pl-2 transition ease-in-out duration-500"
                >
                  Login
                </NavLink>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;*/
