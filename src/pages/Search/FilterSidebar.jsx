import React, { useState } from "react";
import FilterSection from "./FilterSection";

const FilterSidebar = () => {
  // State lưu bộ lọc
  const [filters, setFilters] = useState({
    price: "",
    area: "",
    rooms: "",
  });

  // Hàm cập nhật bộ lọc
  const handleFilterChange = (type, value) => {
    setFilters({ ...filters, [type]: value });
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      {/* Filter by Price */}
      <FilterSection
        title="Lọc theo khoảng giá"
        options={[
          "Giá dưới 5 triệu",
          "Giá 5 - 10 triệu",
          "Giá 10 - 15 triệu",
          "Giá 15 - 20 triệu",
          "Giá trên 20 triệu",
        ]}
        selectedValue={filters.price}
        onChange={(value) => handleFilterChange("price", value)}
      />

      {/* Filter by Area */}
      <FilterSection
        title="Lọc theo diện tích"
        options={["Dưới 40 m2", "40 - 60 m2", "60 - 80 m2", "80 - 100 m2", "Trên 100 m2"]}
        selectedValue={filters.area}
        onChange={(value) => handleFilterChange("area", value)}
      />

      {/* Filter by Rooms */}
      <FilterSection
        title="Lọc theo số phòng"
        options={["1 PN", "2 PN", "3 PN", "4 PN", "Trên 4 PN"]}
        selectedValue={filters.rooms}
        onChange={(value) => handleFilterChange("rooms", value)}
      />

      {/* Display Selected Filters */}
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Bộ lọc đã chọn:</h3>
        <ul>
          <li>Khoảng giá: {filters.price || "Chưa chọn"}</li>
          <li>Diện tích: {filters.area || "Chưa chọn"}</li>
          <li>Số phòng: {filters.rooms || "Chưa chọn"}</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterSidebar;
