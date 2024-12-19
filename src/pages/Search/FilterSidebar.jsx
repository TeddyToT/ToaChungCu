import React, { useState } from "react";
import FilterSection from "./FilterSection";

const FilterSidebar = ({filters, setFilters}) => {
  const handleFilterChange = (key, option) => {
    setFilters({
      ...filters,
      [key]: option.value,
    });
    console.log(option.value);
  };

  const priceValueToLabel = (value) => {
    if (value === "0-1") return "Dưới 1 triệu";
    else return `${value} triệu`;
  }

  const sizeValueToLabel = (value) => {
    if (value === "0-20") return "Dưới 20m2";
    else return `${value}m2`;
  }

  return (
    <div className="bg-white p-4 rounded shadow-md sticky top-4">
      {/* Display Selected Filters */}
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Bộ lọc đã chọn:</h3>
        <ul>
          <li>Khoảng giá: {
            filters.price
              ? priceValueToLabel(filters.price)
              : "Chưa chọn"
          }</li>
          <li>Diện tích: {
            filters.size
              ? sizeValueToLabel(filters.size)
              : "Chưa chọn"
            }</li>
          <li>Số phòng ngủ: {filters.bedrooms || "Chưa chọn"}</li>
          <li>
            <button
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
              onClick={() => setFilters({
                price: "",
                size: "",
                bedrooms: "",
              })}
            >
              Xóa tất cả bộ lọc
            </button>
          </li>
        </ul>
      </div>

      <FilterSection
        title="Lọc theo khoảng giá"
        options={[
          { label: "Dưới 1 triệu", value: "0-1000000" },
          { label: "1 đến 5 triệu", value: "1000000-5000000" },
          { label: "5 đến 10 triệu", value: "5000000-10000000" },
          { label: "10 đến 20 triệu", value: "10000000-20000000" },
        ]}
        selectedValue={filters.price}
        onChange={(option) => handleFilterChange("price", option)}
      />

      <FilterSection
        title="Lọc theo diện tích"
        options={[
          { label: "Dưới 20m2", value: "0-20" },
          { label: "20 đến 50m2", value: "20-50" },
          { label: "50 đến 80m2", value: "50-80" },
          { label: "80 đến 100m2", value: "80-100" },
        ]}
        selectedValue={filters.size}
        onChange={(option) => handleFilterChange("size", option)}
      />

      <FilterSection
        title="Lọc theo số phòng ngủ"
        options={[
          { label: "1 phòng", value: "1" },
          { label: "2 phòng", value: "2" },
          { label: "3 phòng", value: "3" },
          { label: "4 phòng", value: "4" },
        ]}
        selectedValue={filters.bedrooms}
        onChange={(option) => handleFilterChange("bedrooms", option)}
      />


      
    </div>
  );
};

export default FilterSidebar;
