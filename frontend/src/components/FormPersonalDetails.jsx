import React from "react";

const FormPersonalDetails = ({ nextStep, prevStep, handleChange, values }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <div className=" flex flex-1 min-w-[500px] justify-center items-center pb-3">
        <label className="text-[27px] font-semibold text-black">
          Personal Details
        </label>
      </div>
      <div className="pt-5 flex flex-1 gap-4 w-full ">
        <form onSubmit={handleSubmit}>
          <div className="flex w-full h-auto pb-3 justify-left items-center">
            <div className="flex flex-auto w-full h-auto  justify-center items-center">
              <label for="name" className="text-[18px]  pr-5 whitespace-nowrap">
                1. Name :
              </label>
              <input
                required
                type="text"
                className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                placeholder="Name"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange("name")}
                autoFocus
              />
            </div>
            <div className="flex flex-row w-full h-auto ps-5  justify-left items-center">
              <label for="DOB" className=" text-[18px]  pr-5 whitespace-nowrap">
                2. Date of Birth :
              </label>
              <input
                required
                type="date"
                className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                name="DOB"
                id="DOB"
                value={values.DOB}
                onChange={handleChange("DOB")}
              />
            </div>
            <div className="flex flex-row w-full h-auto ps-5 justify-center items-center">
              <label
                for="gender"
                className="text-[18px]  pr-5 whitespace-nowrap"
              >
                3. Gender :{" "}
              </label>
              <select
                className="w-full  bg-white/80 rounded-xl p-2 mt-1 "
                name="gender"
                id="gender"
                value={values.gender}
                onChange={handleChange("gender")}
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="flex flex-auto w-full h-auto pb-3 justify-center items-center">
            <label
              for="address"
              className="text-[18px]  pr-5 whitespace-nowrap"
            >
              4. Address :
            </label>
            <input
              required
              type="text"
              placeholder="Address"
              className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
              name="address"
              id="address"
              value={values.address}
              onChange={handleChange("address")}
            />
          </div>
          <div className="flex w-full h-auto pb-3 justify-left items-center">
            <div className="flex flex-row w-full h-auto  pr-3 justify-center items-center">
              <label
                for="father_name"
                className="text-[18px]  pr-5 whitespace-nowrap"
              >
                5. Father Name :
              </label>

              <input
                required
                type="text"
                placeholder="Father Name"
                className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                name="father_name"
                id="father_name"
                value={values.father_name}
                onChange={handleChange("father_name")}
              />
            </div>
            <div className="flex flex-row w-full h-auto  justify-center items-center">
              <label
                for="mother_name"
                className="text-[18px]  pr-5 whitespace-nowrap"
              >
                6. Mother Name :
              </label>

              <input
                required
                type="text"
                placeholder="Mother Name"
                className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                name="mother_name"
                id="mother_name"
                value={values.mother_name}
                onChange={handleChange("mother_name")}
              />
            </div>
            <div className="flex flex-row w-full h-auto  ps-3 justify-center items-center">
              <label
                for="gaurdian_name"
                className="text-[18px]  pr-5 whitespace-nowrap"
              >
                7. Gaurdian Name :
              </label>

              <input
                required
                type="text"
                placeholder="Gaurdian Name"
                className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                name="gaurdian_name"
                id="gaurdian_name"
                value={values.gaurdian_name}
                onChange={handleChange("gaurdian_name")}
              />
            </div>
          </div>
          <div className="flex w-full h-auto pb-3 justify-left items-center">
            <div className="flex flex-row w-full h-auto  pr-3 justify-center items-center">
              <label
                for="father_occupation"
                className="text-[18px]  pr-5 whitespace-nowrap"
              >
                8. Father Occupation :
              </label>

              <input
                required
                type="text"
                placeholder="Father Occupation"
                className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                name="father_occupation"
                id="father_occupation"
                value={values.father_occupation}
                onChange={handleChange("father_occupation")}
              />
            </div>
            <div className="flex flex-row w-full h-auto  pr-3 justify-center items-center">
              <label
                for="mobile_number"
                className="text-[18px]  pr-5 whitespace-nowrap"
              >
                9. Mobile Number :
              </label>

              <input
                required
                type="text"
                placeholder="Mobile Number"
                className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                name="mobile_number"
                id="mobile_number"
                value={values.mobile_number}
                onChange={handleChange("mobile_number")}
              />
            </div>
            <div className="flex flex-row w-full h-auto  pr-3 justify-center items-center">
              <label
                for="parents_mob_no"
                className="text-[18px]  pr-5 whitespace-nowrap"
              >
                10. Parents Mobile Number :
              </label>

              <input
                required
                type="text"
                placeholder="Parents Mob. Number"
                className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                name="parents_mob_no"
                id="parents_mob_no"
                value={values.parents_mob_no}
                onChange={handleChange("parents_mob_no")}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 w-full h-auto pb-3 justify-left items-center">
            <div className="flex flex-row  col-span-1 w-full h-auto  justify-center items-center">
              <label
                for="blood_group"
                className="text-[18px]  pr-5  whitespace-nowrap"
              >
                11. Blood Group:
              </label>

              <select
                className="w-full  bg- overflow-auto rounded-xl p-2 mt-1 "
                name="blood_group"
                id="blood_group"
                value={values.blood_group}
                onChange={handleChange("blood_group")}
                required
              >
                <option value="">Select Blood Group</option>
                <option value="A +ve">A +ve</option>
                <option value="A -ve">A -ve</option>
                <option value="B +ve">B +ve</option>
                <option value="B -ve">B -ve</option>
                <option value="AB +ve">AB +ve</option>
                <option value="AB -ve">AB -ve</option>
                <option value="O +ve">O +ve</option>
                <option value="O -ve">O -ve</option>
              </select>
            </div>
            <div className="flex flex-row col-span-2 w-full h-auto  ps-3 justify-center items-center">
              <label
                for="email"
                className="text-[18px]  pr-5 whitespace-nowrap"
              >
                12. Email-id :
              </label>

              <input
                required
                type="text"
                placeholder="Enter your Email-Id"
                className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange("email")}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 w-full h-auto pb-3 justify-left items-center">
            <div className="flex flex-row w-full h-auto  pr-3 justify-center items-center">
              <label
                for="religion"
                className="text-[18px]  pr-5 whitespace-nowrap"
              >
                13. Religion :
              </label>

              <input
                required
                type="text"
                placeholder="Religion"
                className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                name="religion"
                id="religion"
                value={values.religion}
                onChange={handleChange("religion")}
              />
            </div>
            <div className="flex flex-row w-full h-auto  pr-3 justify-center items-center">
              <label
                for="caste"
                className="text-[18px]  pr-5 whitespace-nowrap"
              >
                14. Caste :
              </label>

              <input
                required
                type="text"
                placeholder="Caste"
                className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                name="caste"
                id="caste"
                value={values.caste}
                onChange={handleChange("caste")}
              />
            </div>
            <div className="flex flex-row w-full h-auto  pr-3 justify-center items-center">
              <label
                for="nationality"
                className="text-[18px]  pr-5 whitespace-nowrap"
              >
                15. Nationality :
              </label>

              <input
                required
                type="text"
                placeholder="Nationality"
                className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                name="nationality"
                id="nationality"
                value={values.nationality}
                onChange={handleChange("nationality")}
              />
            </div>
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

export default FormPersonalDetails;
