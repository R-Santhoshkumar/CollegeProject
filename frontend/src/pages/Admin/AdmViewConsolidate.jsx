import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import * as XLSX from "xlsx";

function ViewConsolidate() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [courseHeaders, setCourseHeaders] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const regulation = searchParams.get("regulation");
  const semester = searchParams.get("semester");
  const batch = searchParams.get("batch");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/task/fetch_consolidate`,
          {
            params: { regulation, semester, batch },
          }
        );
        if (response.data.success) {
          const {
            InternalStudentMarks,
            ExternalStudentMarks,
            StudentsDetails,
          } = response.data;
          const courseCodes = [
            ...new Set([
              ...Object.keys(InternalStudentMarks[0]),
              ...Object.keys(ExternalStudentMarks[0]),
            ]),
          ].filter(
            (key) =>
              ![
                "id",
                "createdAt",
                "updatedAt",
                "register_number",
                "name",
              ].includes(key)
          );
          setResults(
            combineMarksData(
              StudentsDetails,
              InternalStudentMarks,
              ExternalStudentMarks,
              courseCodes
            )
          );
          setCourseHeaders(courseCodes);
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

  const combineMarksData = (students, internalMarks, externalMarks, courseHeaders) => {
    return students.map((student) => {
      const result = {
        registerNumber: student.register_number,
        name: student.name,
      };

      courseHeaders.forEach((header) => {
        const internal =
          parseInt(
            internalMarks.find(
              (mark) => mark.register_number === student.register_number
            )[header],
            10
          ) || 0;
        console.log(internal);
        const external =
          parseInt(
            externalMarks.find(
              (mark) => mark.register_number === student.register_number
            )[header],
            10
          ) || 0;
        result[`${header}_int`] = internal;
        result[`${header}_ext`] = external;
        result[`${header}_total`] = internal + external;
        result[`${header}_status`] =
          internal + external >= 38 ? "Pass" : "Fail";
      });

      return result;
    });
  };

  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(
      results.map((result, index) => {
        const data = {
          "S.No": index + 1,
          "Register Number": result.registerNumber,
          Name: result.name,
        };
        courseHeaders.forEach((header) => {
          data[`${header}_Int`] = result[`${header}_int`] || 0;
          data[`${header}_Ext`] = result[`${header}_ext`] || 0;
          data[`${header}_Total`] = result[`${header}_total`] || 0;
          data[`${header}_Status`] = result[`${header}_status`] || "Fail";
        });
        return data;
      })
    );

    XLSX.utils.book_append_sheet(workbook, worksheet, "Results");
    const fileName = `Results_${regulation}_${semester}_${batch}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div className="w-full h-full flex flex-col  p-5  bg-gradient-to-br from-white/50  to-white/30 backdrop-blur-sm  rounded-r-3xl">
      <span className="text-black font-semibold pb-5 text-3xl">
        Consolidate Results
      </span>
      <h3 className="mb-2">
        Consolidated results for {regulation} - Semester {semester} - Batch{" "}
        {batch}
      </h3>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div
          className="w-full mt-5 overflow-auto"
          style={{ maxWidth:"155vh"}}
        >
          <table className="w-full table-auto border-collapse border border-black">
            <thead>
              <tr className="sticky top-0 z-10 bg-[#65dfc9]">
                <th className="border border-black p-3">S.No</th>
                <th className="border border-black p-3">Register Number</th>
                <th className="border border-black p-3">Name</th>
                {courseHeaders.map((header) => (
                  <React.Fragment key={header}>
                    <th className="border border-black p-3">{header}_Int</th>
                    <th className="border border-black p-3">{header}_Ext</th>
                    <th className="border border-black p-3">{header}_Total</th>
                    <th className="border border-black p-3">{header}_Status</th>
                  </React.Fragment>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index} className="text-center bg-white/70">
                  <td className="border border-black p-3">{index + 1}</td>
                  <td className="border border-black p-3">
                    {result.registerNumber}
                  </td>
                  <td className="border border-black p-3">{result.name}</td>
                  {courseHeaders.map((header) => (
                    <React.Fragment key={header}>
                      <td className="border border-black p-3">
                        {result[`${header}_int`]}
                      </td>
                      <td className="border border-black p-3">
                        {result[`${header}_ext`]}
                      </td>
                      <td className="border border-black p-3">
                        {result[`${header}_total`]}
                      </td>
                      <td
                        className={`border border-black p-3 ${
                          result[`${header}_status`] === "Fail"
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {result[`${header}_status`]}
                      </td>
                    </React.Fragment>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className=" mt-5 gap-5 flex flex-row items-center">
        <p>Download this result in excel : </p>
        <button
          className="p-2 rounded-lg px-10 text-xl text-black bg-white/80 font-semibold border-none hover:bg-[#65dfc9] transition ease-in-out duration-500"
          onClick={exportToExcel}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default ViewConsolidate;
