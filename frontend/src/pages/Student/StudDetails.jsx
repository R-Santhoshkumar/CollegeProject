import React, { useState } from "react";
import TopTitleBar from "../../components/TopTitleBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormAcademicDetails from "../../components/FormAcademicDetails";
import FormPersonalDetails from "../../components/FormPersonalDetails";
import FormUserDetails from "../../components/FormUserDetails";
import Confirm from "../../components/Confirm";
import Success from "../../components/Success";

function StudDetails() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    DOB: '',
    gender: '',
    address: '',
    father_name: '',
    mother_name: '',
    gaurdian_name: '',
    father_occupation: '',
    mobile_number: '',
    parents_mob_no: '',
    blood_group: '',
    religion: '',
    caste: '',
    nationality: '',
    register_number: '',
    programme: '',
    year: '',
    batch: '',
    semester: ''
  });

  // Proceed to next step
  const nextStep = () => setStep(step + 1);

  // Go back to prev step
  const prevStep = () => setStep(step - 1);

  // Handle fields change
  const handleChange = input => e => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={nextStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      case 3:
        return (
          <FormAcademicDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      case 4:
        return (
          <Confirm
            nextStep={nextStep}
            prevStep={prevStep}
            values={formData}
          />
        );
      case 5:
        return <Success />;
      default:
        return <div>This is a multi-step form built with React.</div>;
    }
  };

  return (
    <div className="m-0 p-0 box-border flex flex-1 flex-col bg-gradient-to-tr from-[#65dfc9] to-[#6cdbeb] font-sans min-h-screen">
      <div className="">
        <TopTitleBar />
      </div>
      <div className="px-5 py-2 flex flex-1 justify-center items-center">
        <div className="flex flex-col  bg-gradient-to-br from-white/50 to-white/30 rounded-3xl py-3 px-5">
          {renderStep()}
        </div>
      </div>
    </div>
  );

  
  /*const [formData, setFormData] = useState({
    name: "",
    DOB: "",
    gender: "",
    address: "",
    father_name: "",
    mother_name: "",
    gaurdian_name: "",
    father_occupation: "", // Corrected typo here
    mobile_number: "",
    parents_mob_no: "",
    blood_group: "",
    email: "",
    religion: "",
    caste: "",
    nationality: "",
    register_number: "",
    programme: "",
    year: "",
    batch: "",
    semester: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      // Log the formData to see if it's populated correctly
      const response = await axios.post(
        "http://localhost:5000/api/auth/student_details",
        formData
      );

      console.log("Response:", response.data); // Log the response to see what's returned from the server

      if (response.data.success) {
        alert("Registration Successfull! ");
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the request
      alert("Registration failed. Something went wrong!");
    }
  }

  return (
    <div className="m-0 p-0 box-border grid grid-rows-7 bg-gradient-to-tr from-[#65dfc9]  to-[#6cdbeb] font-sans w-full h-full min-h-screen">
      <div className="row-span-1">
        <TopTitleBar />
      </div>
      <div className="px-5 py-2 w-full row-span-6 h-full">
        <div className="w-full h-full bg-gradient-to-br from-white/50  to-white/30 rounded-3xl py-3 px-5">
          <label className="text-[30px] font-semibold">Student Details</label>
          <div className="pt-5 grid gap-4 w-full ">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex items-center pb-2  w-full">
                <h2 className="mr-2 text-xl">Basic Details</h2>
                <div className="flex-1 h-[2px] bg-white"></div>
              </div>
              <div className="grid grid-cols-3 w-full h-auto pb-3 justify-left items-center">
                <div className="flex flex-auto w-full h-auto  justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    1. Name :
                  </label>

                  <input
                    required
                    type="text"
                    className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                    placeholder="Enter your Name"
                    name="name"
                    onChange={handleChange}
                    autoFocus
                  />
                </div>
                <div className="flex flex-row w-full h-auto ps-5  justify-left items-center">
                  <label className=" text-[18px]  pr-5 whitespace-nowrap">
                    2. Date of Birth :
                  </label>

                  <input
                    required
                    type="date"
                    className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                    placeholder="Enter the Registration Number"
                    name="DOB"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-row w-full h-auto ps-5 justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    3. Gender :{" "}
                  </label>
                  <select
                    className="w-full  bg- rounded-xl p-2 mt-1 "
                    name="gender"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-auto w-full h-auto pb-3 justify-center items-center">
                <label className="text-[18px]  pr-5 whitespace-nowrap">
                  4. Address :
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your Address"
                  className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                  name="address"
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-3 w-full h-auto pb-3 justify-left items-center">
                <div className="flex flex-row w-full h-auto  pr-3 justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    5. Father Name :
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Father Name"
                    className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                    name="father_name"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-row w-full h-auto  justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    6. Mother Name :
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Mother Name"
                    className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                    name="mother_name"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-row w-full h-auto  ps-3 justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    7. Gaurdian Name :
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Gaurdian Name"
                    className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                    name="gaurdian_name"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 w-full h-auto pb-3 justify-left items-center">
                <div className="flex flex-row w-full h-auto  pr-3 justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    8. Father Occupation :
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Father Occupation"
                    className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                    name="father_occupation"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-row w-full h-auto  pr-3 justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    9. Mobile Number :
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Mobile Number"
                    className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                    name="mobile_number"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-row w-full h-auto  pr-3 justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    10. Parents Mobile Number :
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Parents Mob. Number"
                    className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                    name="parents_mob_no"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 w-full h-auto pb-3 justify-left items-center">
                <div className="flex flex-row  col-span-1 w-full h-auto  justify-center items-center">
                  <label className="text-[18px]  pr-5  whitespace-nowrap">
                    11. Blood Group:
                  </label>

                  <select
                    className="w-full  bg- overflow-auto rounded-xl p-2 mt-1 "
                    name="blood_group"
                    onChange={handleChange}
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
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    12. Email-id :
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Enter your Email-Id"
                    className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 w-full h-auto pb-3 justify-left items-center">
                <div className="flex flex-row w-full h-auto  pr-3 justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    13. Religion :
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Religion"
                    className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                    name="religion"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-row w-full h-auto  pr-3 justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    14. Caste :
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Caste"
                    className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                    name="caste"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-row w-full h-auto  pr-3 justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    15. Nationality :
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Nationality"
                    className="w-full h-auto  bg-white/80 rounded-xl px-3 p-2 mt-1"
                    name="nationality"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex items-center pb-5  w-full">
                <h2 className="mr-2 text-xl">Academic Details</h2>
                <div className="flex-1 h-[2px] bg-white"></div>
              </div>
              <div className="grid grid-cols-3 w-full h-auto pb-3 justify-left items-center">
                <div className="flex flex-auto w-full h-auto  justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    16. Register Number :
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full h-auto  bg- rounded-xl px-3 p-2 mt-1 "
                    placeholder="Enter your Register Number"
                    name="register_number"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-row w-full h-auto ps-5 justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    17. Programme :{" "}
                  </label>
                  <select
                    className="w-full  bg- rounded-xl p-2 mt-1 "
                    name="programme"
                    onChange={handleChange}
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
                <div className="flex flex-row w-full h-auto ps-5 justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    18. year :{" "}
                  </label>
                  <select
                    className="w-full  bg- rounded-xl p-2 mt-1 "
                    name="year"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 w-full h-auto pb-6 justify-left items-center">
                <div className="flex flex-row w-full h-auto  justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    19. Batch :{" "}
                  </label>
                  <select
                    className="w-full  bg- rounded-xl p-2 mt-1 "
                    name="batch"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Batch</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </select>
                </div>
                <div className="flex flex-row w-full h-auto ps-5 justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    20. Semester :{" "}
                  </label>
                  <select
                    className="w-full  bg- rounded-xl p-2 mt-1 "
                    name="semester"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Semester</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row w-full h-auto ps-5 justify-center items-center">
                <button
                  type="submit"
                  className="p-2 rounded-lg px-10 text-xl bg-white/80 font-semibold border-none hover:bg-[#65dfc9] transition ease-in-out duration-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );*/
}

export default StudDetails;
