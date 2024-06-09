import React, { useState } from "react";
import axios from "axios";

function AdmResultUploading() {
  const [selectedInternalFile, setSelectedInternalFile] = useState(null);
  const [selectedExternalFile, setSelectedExternalFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleInternalFileChange = (event) => {
    setSelectedInternalFile(event.target.files[0]);
    setUploadMessage(""); // Clear previous message
  };

  const handleExternalFileChange = (event) => {
    setSelectedExternalFile(event.target.files[0]);
    setUploadMessage(""); // Clear previous message
  };

  const handleInternalFileUpload = async () => {
    handleFileUpload(selectedInternalFile, "internal");
  };

  const handleExternalFileUpload = async () => {
    handleFileUpload(selectedExternalFile, "external");
  };

  const handleFileUpload = async (file, type) => {
    if (!file) {
      setUploadMessage("Please select an Excel file to upload.");
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const endpoint =
        type === "internal"
          ? "http://localhost:5000/api/task/upload_internal_marks"
          : "http://localhost:5000/api/task/upload_external_marks";

      const response = await axios.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(response.data.message);
      setSelectedInternalFile(null); // Clear file selection after upload
      setSelectedExternalFile(null);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadMessage("An error occurred while uploading the file.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col flex-1 p-5  bg-gradient-to-br from-white/50  to-white/30 backdrop-blur-sm  rounded-r-3xl">
      <span className="text-black font-semibold pb-3 text-3xl">
        Result Upload
      </span>
      <form>
        <div className="w-full h-full flex flex-col flex-1 gap-5 overflow overflow-auto ">
          <div className="w-full h-full flex flex-col bg-white/50 p-5 rounded-2xl shadow-md">
            <span className=" font-semibold pb-5 text-2xl">Upload Internal Consolidate </span>
            <div className="flex flex-col  pb-5">
              <input
                type="file"
                accept=".xlsx,.xls"
                onChange={handleInternalFileChange}
              />
              <label htmlFor="file" className="pt-5">
                Choose Excel File to add the Marks
              </label>
            </div>
            <button
              onClick={handleInternalFileUpload}
              disabled={isLoading}
              className=
                "w-full h-auto p-4 rounded-2xl flex flex-row justify-evenly bg-white/80 text-black items-center hover:bg-[#65dfc9] transition ease-in-out duration-500 "
              
            >
              {isLoading ? "Uploading..." : "Upload"}
            </button>
          </div>
          <div className="w-full h-full flex flex-col bg-white/50 p-5 rounded-2xl shadow-md">
            <span className=" font-semibold pb-5 text-2xl">Upload External Consolidate </span>
            <div className="flex flex-col  pb-5">
              <input
                type="file"
                accept=".xlsx,.xls"
                onChange={handleExternalFileChange}
              />
              <label htmlFor="file" className="pt-5">
                Choose Excel File to add the Marks
              </label>
            </div>
            <button
              onClick={handleExternalFileUpload}
              disabled={isLoading}
              className=
                "w-full h-auto p-4 rounded-2xl flex flex-row justify-evenly bg-white/80 text-black items-center hover:bg-[#65dfc9] transition ease-in-out duration-500 "
              
            >
              {isLoading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdmResultUploading;
