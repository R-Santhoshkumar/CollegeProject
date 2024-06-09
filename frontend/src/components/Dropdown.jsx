import React, { useState } from "react";

const options = ["Student", "Faculty", "Admin"];

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOPtion] = useState(null);
  const toggling = () => setIsOpen(!isOpen);
  const onoptionClicked = (value) => () => {
    setSelectedOPtion(value);
    setIsOpen(false);
  };
  return (
    <div className="inline-flex">
      <div className="min-w-[200px] relative inline-flex rounded-md bg-white">
        <button
          onClick={toggling}
          href="javascript"
          className="w-full rounded-l-md px-4 py-2"
        >
          {selectedOption || "Select Technology"}
        </button>
        <div className="relative">
          <button
            type="button"
            className={`button-${isOpen ? 'danger' : 'success'} hover:text-gray-700 inline-flex h-full items-center justify-center rounded-r-md border-1 border-gray-10 px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="main-w-[200px] absolute top-6 right-0 z-10 mt-4 min-w-[200px] origin-top-right rounded-md border border-gray-100 bg-white shadow-lg">
            {options.map((option) => (
              <button
                key={Math.random()}
                type="button"
                onClick={onoptionClicked(option)}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 no-underline hover:bg-gray-50"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
