import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const SearchDropdown = ({ label, options, name, value, onChange }) => {
  return (
    <div className="flex flex-col-2 w-full" key={name}>
      <Dropdown
        key={name}
        className='w-full'
        options={options}
        onChange={(selected) => {
          if (onChange) {
            onChange(name, selected.value);
          }
        }}
        value={value}
        placeholder={label}
      />
    </div>
  );
};

export default SearchDropdown;
