import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import * as XLSX from "xlsx"; // Import the function to update marks

function UpdateResult() {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const regulation = searchParams.get("regulation");
    const semester = searchParams.get("semester");
    const batch = searchParams.get("batch");
    const courseId = searchParams.get("courseId");
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get(
            `http://localhost:5000/api/task/fetch_marks`,
            {
              params: { regulation, semester, batch, courseId },
            }
          );
          if (response.data.success) {
            const combinedResults = combineMarksData(response.data);
            setResults(combinedResults);
          } else {
            alert("Failed to fetch results");
          }
        } catch (error) {
          console.error(error);
          alert("An error occurred while fetching the results.");
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [location.search]);
  
    const combineMarksData = (data) => {
      const { StudentsDetails, InternalStudentMarks, ExternalStudentMarks } =
        data;
      return StudentsDetails.map((student) => {
        const internal = InternalStudentMarks.find(
          (im) => im.register_number === student.register_number
        );
        const external = ExternalStudentMarks.find(
          (em) => em.register_number === student.register_number
        );
  
        // Convert string marks to integers
        const internalMark = internal ? parseInt(internal[courseId], 10) : 0;
        const externalMark = external ? parseInt(external[courseId], 10) : 0;
  
        // Calculate total marks as an integer sum
        const totalMarks = internalMark + externalMark;
  
        return {
          registerNumber: student.register_number,
          internalMark, // Already converted to integer
          externalMark, // Already converted to integer
          totalMarks, // Sum of internal and external, as integers
          passStatus: totalMarks >= 38 ? "Pass" : "Fail",
          isEditable: false // Add new field for editing status
        };
      });
    };
  
    const handleEdit = (index) => {
      // Toggle the editable status of the result at the specified index
      const updatedResults = [...results];
      updatedResults[index].isEditable = !updatedResults[index].isEditable;
      setResults(updatedResults);
    };
  
    const handleSave = async (index, registerNumber, courseId, internalMark, externalMark) => {
      // Update the marks for the specified result and save to backend
      await updateMarks(registerNumber, courseId, internalMark, externalMark);
      handleEdit(index); // Toggle editable status back after saving
    };
    
    const updateMarks = async (registerNumber, courseId, internalMark, externalMark) => {
      try {
          const response = await axios.post(
              'http://localhost:5000/api/task/update_marks',
              { registerNumber, courseId, internalMark, externalMark, regulation, semester, batch },
          );
          if (response.data.success) {
              console.log('Marks updated successfully');
              // Handle success, such as displaying a success message or updating state
          } else {
              console.error('Failed to update marks:', response.data.message);
              // Handle failure, such as displaying an error message
          }
      } catch (error) {
          console.error('Error updating marks:', error);
          // Handle error, such as displaying an error message
      }
  };
  
    
  
    return (
      <div className="w-full h-full flex flex-col flex-1 p-5  bg-gradient-to-br from-white/50  to-white/30 backdrop-blur-sm  rounded-r-3xl">
        <span className="font-semibold pb-5 text-3xl">
          Results
        </span>
        <h3 className="mb-2">The result of the course {courseId} :</h3>
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div
            className=" mt-5 overflow-auto"
            
          >
            <table className="w-full table-auto border-collapse border border-black">
              <thead>
                <tr className="bg-[#6cdbeb]">
                  <th className="border border-black p-3">S.No</th>{" "}
                  {/* Serial Number column */}
                  <th className="border border-black p-3">Register Number</th>
                  <th className="border border-black p-3">Internal</th>
                  <th className="border border-black p-3">External</th>
                  <th className="border border-black p-3">Total</th>
                  <th className="border border-black p-3">Status</th>
                  <th className="border border-black p-3">Edit</th> {/* New column for edit button */}
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr key={index} className="text-center bg-white/80">
                    <td className="border border-black p-3">{index + 1}</td>{" "}
                    {/* Displaying S.No */}
                    <td className="border border-black p-3">
                      {result.registerNumber}
                    </td>
                    <td className="border border-black p-3">
                      {result.isEditable ? (
                        <input
                          type="text"
                          className=" bg-[#44475A] w-20 items-center h-auto p-3 border border-black rounded-lg "
                          value={result.internalMark}
                          onChange={(e) => {
                            const updatedResults = [...results];
                            updatedResults[index].internalMark = e.target.value;
                            setResults(updatedResults);
                          }}
                        />
                      ) : (
                        result.internalMark
                      )}
                    </td>
                    <td className="border border-black p-3">
                      {result.isEditable ? (
                        <input
                          type="text"
                          className=" bg-white/80 w-20 items-center h-auto p-3 border border-black rounded-lg"
                          value={result.externalMark}
                          onChange={(e) => {
                            const updatedResults = [...results];
                            updatedResults[index].externalMark = e.target.value;
                            setResults(updatedResults);
                          }}
                        />
                      ) : (
                        result.externalMark
                      )}
                    </td>
                    <td className="border border-black p-3">
                      {result.totalMarks}
                    </td>
                    <td
                      className="border border-black font-semibold p-3"
                      style={{
                        color:
                          result.passStatus === "Pass" ? "#50fa7b" : "#ff5555",
                      }}
                    >
                      {result.passStatus}
                    </td>
                    <td className="border text-white border-black p-3">
                      {result.isEditable ? (
                        <button
                          className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded"
                          onClick={() =>
                            handleSave(
                              index,
                              result.registerNumber,
                              courseId,
                              result.internalMark,
                              result.externalMark
                            )
                          }
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
       
      </div>
    );
  }

export default UpdateResult;
