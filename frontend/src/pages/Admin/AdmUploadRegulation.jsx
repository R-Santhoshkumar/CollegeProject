import React, { useState } from "react";
import axios from "axios";

function AdmUploadRegulation() {
  const [selectedRegulationFile, setSelectedRegulationFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegulationChange = (event) => {
    setSelectedRegulationFile(event.target.files[0]); // Clear previous message
  };

  const handleRegulationUpload = async (event) => {
    event.preventDefault();  // Prevent the default form submission behavior
    if (!selectedRegulationFile) {
      alert("Please select an Excel file to upload.");
      return;
    }
    handleFileUpload(selectedRegulationFile);
  };

  const handleFileUpload = async (file) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/api/task/upload_regulation", formData, {
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
      setSelectedRegulationFile(null); // Clear file selection after upload
    }
  };

  return (
    <div className="w-full h-full flex flex-col flex-1 p-5  bg-gradient-to-br from-white/50  to-white/30 backdrop-blur-sm  rounded-r-3xl">
      <span className="font-semibold pb-5 text-3xl">
        Add Regulation
      </span>
      <form onSubmit={handleRegulationUpload}>  {/* Changed to onSubmit */}
        <div className="w-full h-full grid grid-rows-2 gap-7">
          <div className="w-full h-full flex flex-col bg-white/50 p-5 rounded-2xl shadow-2xl">
            <span className="font-semibold pb-5 text-2xl">
              Upload Regulation Syllabus{" "}
            </span>
            <div className="flex flex-col  pb-5">
              <input
                type="file"
                accept=".xlsx,.xls"
                onChange={handleRegulationChange}
              />
              <label htmlhtmlFor="file" className="pt-5">
                Choose Excel File to add the Regulation
              </label>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="p-2 rounded-lg px-10 text-xl text-black bg-white/80 font-semibold border-none hover:bg-[#65dfc9] transition ease-in-out duration-500"
            >
              {isLoading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdmUploadRegulation;
