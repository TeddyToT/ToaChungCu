import React from "react";
import FilterSidebar from "./FilterSidebar";
import RoomList from "./RoomList";

const Search = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1">
            <FilterSidebar />
        </div>
        <div className="col-span-3">
            <RoomList />
        </div>
      </div>
    </div>
  );
};

export default Search;