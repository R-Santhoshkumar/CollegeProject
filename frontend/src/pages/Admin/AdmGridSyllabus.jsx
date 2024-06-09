import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function GridSyllabus() {
  const [regulations, setRegulations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRegulations = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/task/fetch_regulation');
        setRegulations(response.data);
      } catch (error) {
        console.error('Error fetching regulations:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRegulations();
  }, []);

  const handleRegulationClick = (regulationId) => {
    navigate(`/AdmGridSyllabusView?regulationId=${regulationId}`);
  };

  return (
    <div className="w-full h-full flex flex-col flex-1 p-5  bg-gradient-to-br from-white/50  to-white/30 backdrop-blur-sm  rounded-r-3xl">
      <span className="font-semibold pb-5 text-3xl">Grid Syllabus</span>
      <p className="indent-7 pb-4">
        Here you can view the grid syllabus by selecting the regulation below and click to see the syllabus.
      </p>
      <div className="w-full h-full pt-5 grid grid-cols-2 gap-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          regulations.map((regulationId) => (
            <button
              key={regulationId}
              className="p-2 rounded-lg text-xl bg-white/80 font-semibold border-none hover:bg-[#65dfc9] shadow-md transition ease-in-out duration-500"
              onClick={() => handleRegulationClick(regulationId)}
            >
              {regulationId}
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default GridSyllabus;
