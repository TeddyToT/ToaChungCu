import React, { useState } from "react";


const FilterSection = ({ title, options, selectedValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-6">
      {/* Header - Toggle Show/Hide */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-semibold">{title}</h2>
        <span>{isOpen ? "−" : "+"}</span>
      </div>

      {/* Filter Options */}
      {isOpen && (
        <ul className="space-y-2 mt-2">
          {options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name={title} // Unique name per filter
                  value={option.label}
                  checked={selectedValue === option.value}
                  onChange={() => onChange(option)} // Update parent state
                />{" "}
                {option.label}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterSection;
