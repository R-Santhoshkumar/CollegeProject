import React from "react";
import axios from "axios";

const Confirm = ({ nextStep, prevStep, values }) => {

  
  async function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to backend
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      values
    );
    if (response.data.success) {
      nextStep();
    }
  }

  return (
    <>
      <div className=" flex flex-1 min-w-[500px] justify-center items-center pb-5">
        <label className="text-[27px] font-semibold text-black">
          Registration Details Preview
        </label>
      </div>
      <div className="flex flex-1 w-full flex-col items-center justify-center">
        <table className="table-auto w-full bg-white/80 border border-black border-collapse">
          <tbody>
            <tr>
              <th
                colSpan="2"
                className="font-bold text-lg border border-black p-2 bg-gray-200"
              >
                User Details
              </th>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">Email-Id :</td>
              <td className=" border border-black p-2">{values.email}</td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">Password :</td>
              <td className=" border border-black p-2">{values.password}</td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">Confirm Password :</td>
              <td className=" border border-black p-2">{values.confirmPassword}</td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">Role :</td>
              <td className=" border border-black p-2">{values.role}</td>
            </tr>
            <tr>
              <th
                colSpan="2"
                className="font-bold text-lg border border-black p-2 bg-gray-200"
              >
                Personal Details
              </th>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">Name :</td>
              <td className=" border border-black p-2">{values.name}</td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">
                Date of Birth :
              </td>
              <td className=" border border-black p-2">{values.DOB}</td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">
                Gender :
              </td>
              <td className=" border border-black p-2">{values.gender}</td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">
                Address :
              </td>
              <td className=" border border-black p-2">{values.address}</td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">
                Father Name :
              </td>
              <td className=" border border-black p-2">{values.father_name}</td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">
                Mother Name :
              </td>
              <td className=" border border-black p-2">{values.mother_name}</td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">
                Guardian Name :
              </td>
              <td className=" border border-black p-2">
                {values.gaurdian_name}
              </td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">
                Father Occupation :
              </td>
              <td className=" border border-black p-2">
                {values.father_occupation}
              </td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">
                Mobile Number :
              </td>
              <td className=" border border-black p-2">
                {values.mobile_number}
              </td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">
                Parents Mobile Number :
              </td>
              <td className=" border border-black p-2">
                {values.parents_mob_no}
              </td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">
                Blood Group :
              </td>
              <td className=" border border-black p-2">{values.blood_group}</td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">
                Religion :
              </td>
              <td className=" border border-black p-2">{values.religion}</td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">Caste:</td>
              <td className=" border border-black p-2">{values.caste}</td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">
                Nationality :
              </td>
              <td className=" border border-black p-2">{values.nationality}</td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">Email:</td>
              <td className=" border border-black p-2">{values.email}</td>
            </tr>
            <tr>
              <th
                colSpan="2"
                className="font-bold text-lg border border-black p-2 bg-gray-200"
              >
                Academic Details
              </th>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">
                Registration Number :
              </td>
              <td className=" border border-black p-2">
                {values.register_number}
              </td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">
                Programme :
              </td>
              <td className=" border border-black p-2">{values.programme}</td>
            </tr>
            <tr>
              <td className=" font-semibold border border-black p-2">Batch:</td>
              <td className=" border border-black p-2">{values.batch}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex gap-5 justify-center items-center pt-3">
          <button
            className="p-2 rounded-lg px-10 text-xl bg-white/80 font-semibold border-none hover:bg-[#65dfc9] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            type="button"
            onClick={prevStep}
          >
            Back
          </button>
          <button
            className="p-2 rounded-lg px-10 text-xl bg-white/80 font-semibold border-none hover:bg-[#65dfc9] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            type="submit"
            onClick={handleSubmit}
          >
            Confirm & Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Confirm;
