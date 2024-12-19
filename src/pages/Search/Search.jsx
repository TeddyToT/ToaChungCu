import React from "react";
import FilterSidebar from "./FilterSidebar";
import RoomList from "./RoomList";
import SearchBar from "./SearchBar";
import { AppContext } from "../../context/Contexts";
import { useContext } from "react";
const Search = () => {
  const {rooms} = useContext(AppContext)
  const [filters, setFilters] = React.useState({
    price: "",
    size: "",
    bedrooms: "",
  });

  // const rooms = [
  //   {
  //     id: 1,
  //     title: "Cho thuê căn hộ chung cư GENG Grandpark quận 9",
  //     image: "",
  //     price: "8.5",
  //     size: "80",
  //     bedrooms: "2",
  //   },
  //   {
  //     id: 2,
  //     title: "Cho thuê căn hộ chung cư Vinhomes Grand Park quận 9",
  //     image: "",
  //     price: "12",
  //     size: "100",
  //     bedrooms: "3",
  //   },
  //   {
  //     id: 3,
  //     title: "Cho thuê căn hộ chung cư The Sun Avenue quận 2",
  //     image: "",
  //     price: "15",
  //     size: "120",
  //     bedrooms: "3",
  //   },
  //   {
  //     id: 4,
  //     title: "Cho thuê căn hộ chung cư Vinhomes Central Park quận Bình Thạnh",
  //     image: "",
  //     price: "20",
  //     size: "150",
  //     bedrooms: "4",
  //   },
  //   //add to 10
  //   {
  //     id: 5,
  //     title: "Cho thuê căn hộ chung cư GENG Grandpark quận 9",
  //     image: "",
  //     price: "8.5",
  //     size: "80",
  //     bedrooms: "2",
  //   },
  //   {
  //     id: 6,
  //     title: "Cho thuê căn hộ chung cư Vinhomes Grand Park quận 9",
  //     image: "",
  //     price: "12",
  //     size: "100",
  //     bedrooms: "3",
  //   },
  //   {
  //     id: 7,
  //     title: "Cho thuê căn hộ chung cư The Sun Avenue quận 2",
  //     image: "",
  //     price: "15",
  //     size: "120",
  //     bedrooms: "3",
  //   },
  //   {
  //     id: 8,
  //     title: "Cho thuê căn hộ chung cư Vinhomes Central Park quận Bình Thạnh",
  //     image: "",
  //     price: "20",
  //     size: "150",
  //     bedrooms: "4",
  //   },
  //   {
  //     id: 9,
  //     title: "Cho thuê căn hộ chung cư GENG Grandpark quận 9",
  //     image: "",
  //     price: "8.5",
  //     size: "80",
  //     bedrooms: "2",
  //   },
  //   {
  //     id: 10,
  //     title: "Cho thuê căn hộ chung cư Vinhomes Grand Park quận 9",
  //     image: "",
  //     price: "12",
  //     size: "100",
  //     bedrooms: "3",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mb-4">
        <SearchBar 
          filters={filters}
          setFilters={setFilters}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
          />
        </div>
        <div className="col-span-3">
          <RoomList
            rooms={
              rooms.filter((room) => {
                const priceRange = filters.price.split("-");
                const sizeRange = filters.size.split("-");
                if (filters.price && (parseFloat(room.price) < parseFloat(priceRange[0]) || parseFloat(room.price) > parseFloat(priceRange[1]))) {
                  return false;
                }
                if (filters.size && (parseFloat(room.size) < parseFloat(sizeRange[0]) || parseFloat(room.size) > parseFloat(sizeRange[1]))) {
                  return false;
                }
                if (Number(filters.bedrooms) && room.bedRoom !== Number(filters.bedrooms)) {
                  return false;
                }
                return true;
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Search;