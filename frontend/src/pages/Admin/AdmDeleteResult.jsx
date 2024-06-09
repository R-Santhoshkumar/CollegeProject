import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdmDeleteResult() {
    const [regulations, setRegulations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      regulation: "",
      semester: "",
      batch: "",
    });
  
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
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleDelete = async (event) => {
      event.preventDefault(); // Prevent default form submission behavior
      
      const { regulation, semester, batch } = formData;
      if (!regulation || !semester || !batch) {
        alert("Please select all fields.");
        return;
      }
  
      if (window.confirm("Are you sure you want to delete this result?")) {
        try {
          const response = await axios.delete(`http://localhost:5000/api/task/delete_result`, { data: { regulation, semester, batch } });
          if (response.data.success) {
            alert('Result deleted successfully!'); // or any other page
          } else {
            alert('Failed to delete the result.');
          }
        } catch (error) {
          console.error("Error deleting the result:", error);
          alert('Error deleting the result.');
        }
      }
    };
    
  
    return (
      <div className="w-full h-full flex flex-col flex-1 p-5  bg-gradient-to-br from-white/50  to-white/30 backdrop-blur-sm  rounded-r-3xl">
        <span className="font-semibold pb-5 text-3xl">
          Delete Results
        </span>
        <p className="text-xl indent-10 ">
          This page is used to Delete the result.
        </p>
        <div className="w-full flex flex-col h-full gap-5 pt-5 ">
          <form onSubmit={handleDelete}>
            <div className="grid grid-cols-none bg-white/50 p-5 rounded-3xl gap-3 w-full h-auto pb-5 justify-left items-center">
              <div className="grid grid-cols-3 gap-5 w-full h-auto pb-5 justify-left items-center">
                <div className="flex flex-row w-full h-auto justify-center items-center">
                  <label className="text-[18px]  pr-5 whitespace-nowrap">
                    Regulation:
                  </label>
                  <select
                    className="w-full shadow-md bg-white/80 rounded-xl p-2 mt-1"
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
                    className="w-full shadow-md bg-white/80 rounded-xl p-2 mt-1"
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
                <div className="flex flex-row w-full h-auto justify-center items-center">
                <label className="text-[18px]  pr-5 whitespace-nowrap">
                  Batch:
                </label>
                <select
                  className="w-full bg-white/80 shadow-md rounded-xl p-2 mt-1"
                  name="batch"
                  onChange={handleChange}
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
              </div>
              <div className="flex flex-row w-full h-auto justify-center items-center">
                <button
                  type="submit"
                  className="p-2 rounded-lg px-10 text-xl bg-white/80 font-semibold border-none hover:bg-[#65dfc9] transition ease-in-out duration-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  

export default AdmDeleteResult