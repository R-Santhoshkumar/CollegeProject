import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import * as XLSX from "xlsx";

function ViewResult() {
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
    console.log(StudentsDetails);
    return StudentsDetails.map((student) => {
      const internal = InternalStudentMarks.find(
        (im) => im.register_number === student.register_number
      );
      const external = ExternalStudentMarks.find(
        (em) => em.register_number === student.register_number
      );

      const internalMark = internal ? parseInt(internal[courseId], 10) : 0;
      const externalMark = external ? parseInt(external[courseId], 10) : 0;
      const totalMarks = internalMark + externalMark;

      return {
        registerNumber: student.register_number,
        name: student.name, // Make sure 'name' is included here
        internalMark,
        externalMark,
        totalMarks,
        passStatus: totalMarks >= 38 ? "Pass" : "Fail",
      };
    });
  };

  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(
      results.map((result, index) => ({
        "S.No": index + 1,
        "Register Number": result.registerNumber,
        Name: result.name, // Include name in export
        "Internal Mark": result.internalMark,
        "External Mark": result.externalMark,
        "Total Marks": result.totalMarks,
        Status: result.passStatus,
      }))
    );

    XLSX.utils.book_append_sheet(workbook, worksheet, "Results");
    const fileName = `Results_${courseId}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div className="w-full h-full flex flex-col flex-1  p-5  bg-gradient-to-br from-white/50  to-white/30 backdrop-blur-sm  rounded-r-3xl">
      <span className="text-black font-semibold pb-5 text-3xl">
        Results
      </span>
      <h3 className="mb-2">The result of the course {courseId} :</h3>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div
          className=" mt-5 overflow-auto"
        >
          <table className="w-full table-auto  border-collapse border border-black">
            <thead>
              <tr className="sticky top-0 bg-[#65dfc9] z-10">
                <th className="border border-black p-3">S.No</th>{" "}
                {/* Serial Number column */}
                <th className="border border-black p-3">Register Number</th>
                <th className="border border-black p-3">Name</th>
                <th className="border border-black p-3">Internal</th>
                <th className="border border-black p-3">External</th>
                <th className="border border-black p-3">Total</th>
                <th className="border border-black p-3">Status</th>
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
                  <td className="border border-black p-3">{result.name}</td>
                  <td className="border border-black p-3">
                    {result.internalMark}
                  </td>
                  <td className="border border-black p-3">
                    {result.externalMark}
                  </td>
                  <td className="border border-black p-3">
                    {result.totalMarks}
                  </td>
                  <td
                    className="border border-black font-semibold p-3"
                    style={{
                      color:
                        result.passStatus === "Pass" ? "#4CAF50" : "#ff5555",
                    }}
                  >
                    {result.passStatus}
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

export default ViewResult;
