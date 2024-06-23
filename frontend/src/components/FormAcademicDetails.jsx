import React from "react";

const FormAcademicDetails = ({ nextStep, prevStep, handleChange, values }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <div className=" flex flex-1 min-w-[500px] justify-center items-center pb-5">
        <label className="text-[27px] font-semibold text-black">
          Academic Details
        </label>
      </div>
      <div className="flex flex-1 w-full items-center justify-center">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-3 items-center pb-3">
            <label htmlFor="register_number" className="text-lg text-black font-medium whitespace-nowrap">Register Number:</label>
            <input
              type="text"
              className="w-full text-black bg-white/80 rounded-xl p-2 mt-1 focus:outline-none focus:bg-white"
              name="register_number"
              id="register_number"
              placeholder="Register number"
              value={values.register_number}
              onChange={handleChange("register_number")}
              required
              autoFocus
            />
          </div>
          <div className="flex gap-3 items-center pb-3">
            <label htmlFor="programme" className="text-lg text-black font-medium whitespace-nowrap">Programme:</label>
            <select
              className="w-full text-black bg-white/80 rounded-xl p-2 mt-1 focus:outline-none focus:bg-white"
              name="programme"
              id="programme"
              value={values.programme}
              onChange={handleChange("programme")}
              required
            >
              <option value="">Select Programme</option>
              <option value="M.Tech">M.Tech</option>
              <option value="MCA">MCA</option>
              <option value="M.Sc AI">M.Sc AI</option>
              <option value="M.Sc CS">M.Sc CS</option>
              <option value="M.Sc DS">M.Sc DS</option>
            </select>
          </div>
          <div className="flex gap-3 items-center pb-3">
            <label htmlFor="batch" className="text-lg text-black font-medium whitespace-nowrap">Batch:</label>
            <select
              className="w-full text-black bg-white/80 rounded-xl p-2 mt-1 focus:outline-none focus:bg-white"
              name="batch"
              id="batch"
              value={values.batch}
              onChange={handleChange("batch")}
              required
            >
              <option value="">Select Batch</option>
              <option value="2019">2019 - 2025</option>
              <option value="2020">2020 - 2026</option>
              <option value="2021">2021 - 2027</option>
              <option value="2022">2022 - 2028</option>
              <option value="2023">2023 - 2029</option>
              <option value="2024">2024 - 2030</option>
              <option value="2025">2025 - 2031</option>
              <option value="2023">2023 - 2025</option>
              <option value="2024">2024 - 2026</option>
              <option value="2025">2025 - 2027</option>
              <option value="2026">2026 - 2028</option>
              <option value="2027">2027 - 2029</option>
            </select>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <button
              className="p-2 rounded-lg px-10 text-xl bg-white/80 font-semibold border-none hover:bg-[#65dfc9]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              type="button"
              onClick={prevStep}
            >
              Back
            </button>
            <button
              className="p-2 rounded-lg px-10 text-xl bg-white/80 font-semibold border-none hover:bg-[#65dfc9]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormAcademicDetails;
