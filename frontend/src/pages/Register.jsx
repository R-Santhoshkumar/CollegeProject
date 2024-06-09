import React, { useState } from "react";
import TopTitleBar from "../components/TopTitleBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormAcademicDetails from "../components/FormAcademicDetails";
import FormPersonalDetails from "../components/FormPersonalDetails";
import FormUserDetails from "../components/FormUserDetails";
import Confirm from "../components/Confirm";
import Success from "../components/Success";

function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role:'',
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
    RegisterPage_number: '',
    programme: '',
    batch: ''
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
}

export default RegisterPage;
