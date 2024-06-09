import React, { useState } from "react";

const FormUserDetails = ({ nextStep, handleChange, values }) => {
  const [showPassword, setShowPassword] = useState(false);
  //const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your validation logic here if needed
    nextStep();
  };

  return (
    <>
      <div className=" flex flex-1 min-w-[500px] justify-center items-center pb-5">
        <label className="text-[27px] font-semibold text-black">
          User Details
        </label>
      </div>
      <div className="flex flex-1 w-full items-center justify-center">
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
