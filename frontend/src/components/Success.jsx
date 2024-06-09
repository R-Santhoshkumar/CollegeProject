import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the student login page after 3 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className=" flex flex-1 flex-col min-w-[500px] justify-center items-center pb-5">
      <label className="text-[27px] font-semibold text-black">Thank You!</label>
      <br/>
      <p className="text-[24px] font-semibold text-black">
        Your submission has been received. Registered Successfully.
      </p>
    </div>
  );
};

export default Success;
