import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FacViewResult() {
  const [regulations, setRegulations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    regulation: "",
    semester: "",
    batch: "",
  });
  const [showCourseAndBatch, setShowCourseAndBatch] = useState(false); // State to toggle visibility of course and batch selection

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const fetchCourseCodes = async (event) => {
    event.preventDefault();
    try {
      const url = new URL("http://localhost:5000/api/task/fetch_course");
      url.search = new URLSearchParams(formData).toString();

      const response = await axios.get(url.toString());
      if (response.data.success) {
        setCourses(response.data.courses);
        setShowCourseAndBatch(true); // Show course and batch selection
      } else {
        alert("Failed to fetch course codes");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while fetching the course codes.");
    }
  };

  useEffect(() => {
    fetchRegulations();
  }, []);

  const fetchRegulations = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:5000/api/task/fetch_regulation"
      );
      setRegulations(response.data);
    } catch (error) {
      console.error("Error fetching regulations:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResultClick = () => {
    const { regulation, semester, batch, courseId } = formData;
    if (regulation && semester && batch && courseId) {
      navigate(`/StudViewResultPage?regulation=${regulation}&semester=${semester}&batch=${batch}&courseId=${courseId}`);
    } else {
      alert("Please select all fields.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col flex-1 p-5  bg-gradient-to-br from-white/50  to-white/30 backdrop-blur-sm  rounded-r-3xl">
      <span className="font-semibold pb-5 text-3xl">
        View Results
      </span>
      <p className="text-xl indent-10 ">
        This page is used to view results and download them.
      </p>
      <div className="w-full flex flex-col h-full gap-5 pt-5 ">
        <form onSubmit={fetchCourseCodes}>
          <div className="grid grid-cols-none bg-white/60 p-5  rounded-3xl gap-3 w-full h-auto pb-5 justify-left items-center">
            <div className="grid grid-cols-2 gap-5 w-full h-auto pb-5 justify-left items-center">
              <div className="flex flex-row w-full h-auto justify-center items-center">
                <label className="text-[18px]  pr-5 whitespace-nowrap">
                  Regulation:
                </label>
                <select
                  className="w-full  bg-white rounded-xl p-2 mt-1"
                  name="regulation"
                  required
                  onChange={handleChange}
                >
                  <option value="">Select Regulation</option>
                  {isLoading ? (
                    <option value="loading">Loading...</option>
                  ) : (
                    regulations.map((regulationId) => (
                      <option key={regulationId} value={regulationId}>
                        {regulationId}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <div className="flex flex-row w-full h-auto justify-center items-center">
                <label className="text-[18px]  pr-5 whitespace-nowrap">
                  Semester:
                </label>
                <select
                  className="w-full  bg-white rounded-xl p-2 mt-1"
                  name="semester"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Semester</option>
                  {[...Array(12).keys()].map((index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div></div>
            <div className="flex flex-row w-full h-auto justify-center items-center">
              <button
                type="submit"
                className="p-2 rounded-lg px-10 text-xl bg-white/80 font-semibold border-none hover:bg-[#65dfc9] transition ease-in-out duration-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        {showCourseAndBatch && (
          <div className="grid grid-cols-none bg-white/50 p-5 rounded-3xl gap-3 w-full h-auto pb-5 justify-left items-center">
            <div className="grid grid-cols-2 gap-5 w-full h-auto pb-5 justify-left items-center">
              <div className="flex flex-row w-full h-auto justify-center items-center">
                <label className="text-[18px]  pr-5 whitespace-nowrap">
                  Courses:
                </label>
                <select
                  className="w-full  bg-white/80 rounded-xl p-2 mt-1"
                  name="courseId"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Course ID</option>
                  {courses.map((course) => (
                    <option
                      key={course.course_code}
                      value={course.course_code}
                    >
                      {course.course_code} - {course.course_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-row w-full h-auto justify-center items-center">
                <label className="text-[18px]  pr-5 whitespace-nowrap">
                  Batch:
                </label>
                <select
                  className="w-full  bg-white/80 rounded-xl p-2 mt-1"
                  name="batch"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Batch</option>
                  {/*[...Array(10).keys()].map((index) => (
                    <option key={index + 2019} value={index + 2019}>
                      {index + 2019}
                    </option>
                  ))*/}
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
            </div>
            <div className="flex flex-row w-full h-auto justify-center items-center">
              <button
                type="submit"
                onClick={handleResultClick}
                className="p-2 rounded-lg px-10 text-xl bg-white/80 font-semibold border-none hover:bg-[#65dfc9] transition ease-in-out duration-500"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FacViewResult;
