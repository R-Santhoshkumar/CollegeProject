import React, { useState } from "react";
import axios from "axios";

function AdmSubjectAllocation() {
    const [selectedAllocationFile, setSelectedAllocationFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    const handleRegulationChange = (event) => {
      setSelectedAllocationFile(event.target.files[0]); // Clear previous message
    };
  
    const handleAllocationUpload = async (event) => {
      event.preventDefault();  // Prevent the default form submission behavior
      if (!selectedAllocationFile) {
        alert("Please select an Excel file to upload.");
        return;
      }
      handleFileUpload(selectedAllocationFile);
    };
  
    const handleFileUpload = async (file) => {
      setIsLoading(true);
  
      const formData = new FormData();
      formData.append("file", file);
  
      try {
        const response = await axios.post("http://localhost:5000/api/task/subject_allocation", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
  
        alert(response.data.message); // Use the upload message state to display feedback
      } catch (error) {
        const errorMessage = error.response?.data?.message || "An error occurred while uploading the file.";
        console.error("Error uploading file:", error);
        alert(errorMessage);
      } finally {
        setIsLoading(false);
        setSelectedAllocationFile(null); // Clear file selection after upload
      }
    };
  
    return (
      <div className="w-full h-full flex flex-col flex-1 bg-[#44475A] p-5 rounded-2xl shadow-2xl">
        <span className="text-[#FF79C6] font-semibold pb-5 text-3xl">
          Subject Allocation
        </span>
        <form onSubmit={handleAllocationUpload}>  {/* Changed to onSubmit */}
          <div className="w-full h-full grid grid-rows-2 gap-7">
            <div className="w-full h-full flex flex-col bg-[#282A36] p-5 rounded-2xl shadow-2xl">
              <span className="text-[#FF79C6] font-semibold pb-5 text-2xl">
                Upload Subject Allocation{" "}
              </span>
              <div className="flex flex-col text-white pb-5">
                <input
                  type="file"
                  accept=".xlsx,.xls"
                  onChange={handleRegulationChange}
                />
                <label htmlhtmlFor="file" className="pt-5">
                  Choose Excel File to add the Allocation details.
                </label>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="p-2 rounded-lg px-10 text-xl bg-blue1 font-semibold border-none hover:bg-[#FF79C6] transition ease-in-out duration-500"
              >
                {isLoading ? "Uploading..." : "Upload"}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

export default AdmSubjectAllocation