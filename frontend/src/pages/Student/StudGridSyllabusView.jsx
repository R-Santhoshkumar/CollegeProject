import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function StudGridSyllabusView() {
    const [gridSyllabus, setGridSyllabus] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const regulationId = searchParams.get('regulationId');
  
    useEffect(() => {
      const fetchGridSyllabus = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/task/fetch_gridsyllabus?regulation=${regulationId}`);
          if (response.data.success) {
            setGridSyllabus(response.data.gridSyllabus);
          } else {
            console.log('Failed to fetch grid syllabus');
          }
        } catch (error) {
          console.error('Error fetching grid syllabus:', error);
        }
      };
      fetchGridSyllabus();
    }, [regulationId]);
  
    return (
      <div className="w-full h-full flex flex-col flex-1  p-5  bg-gradient-to-br from-white/50  to-white/30 backdrop-blur-sm  rounded-r-3xl">
        <span className="text-black font-semibold pb-5 text-3xl">Grid Syllabus</span>
        <h3 className="mb-2 text-black">Grid Syllabus of the Regulation {regulationId} :</h3>
        <div className="text-black bg-white/60 mt-5 overflow-auto" >
          {gridSyllabus.length > 0 ? (
            <>
              
              <table className="w-full border-collapse border border-black">
                <thead>
                  <tr>
                    {Object.keys(gridSyllabus[0]).map((key) => (
                      // Exclude 'createdAt' and 'updatedAt' from table headers
                      key !== 'createdAt' && key !== 'updatedAt' && (
                        <th key={key} className="text-black text-center bg-[#65dfc9] font-bold border border-black p-2">{key}</th>
                      )
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {gridSyllabus.map((row, index) => (
                    <tr key={index}>
                      {Object.entries(row).map(([key, value], cellIndex) => (
                        // Exclude 'createdAt' and 'updatedAt' from table cells
                        key !== 'createdAt' && key !== 'updatedAt' && (
                          <td key={cellIndex} className="text-black text-center border border-black p-2">{value}</td>
                        )
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    );
  }
  

export default StudGridSyllabusView