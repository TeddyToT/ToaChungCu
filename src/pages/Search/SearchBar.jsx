import { React, useState } from 'react';

import SearchDropdown from './SearchDropdown';

const SearchBar = ({ filters, setFilters }) => {

    const [searchFilters, setSearchFilters] = useState({
        price: "",
        size: "",
        bedrooms: "",
    });

    const handleOnChange = (name, value) => {
        setSearchFilters({
            ...searchFilters,
            [name]: value,
        });
    }

    return (
        <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex w-full">
                <SearchDropdown
                    label="Khoảng giá"
                    options={[
                        { label: "Dưới 1 triệu", value: "0-1000000" },
                        { label: "1 đến 5 triệu", value: "1000000-5000000" },
                        { label: "5 đến 10 triệu", value: "5000000-10000000" },
                        { label: "10 đến 20 triệu", value: "10000000-20000000" },
                    ]}
                    name="price"
                    value={filters.price}
                    onChange={handleOnChange}
                />

                <SearchDropdown
                    label="Diện tích"
                    options={[
                        { label: "Dưới 20m2", value: "0-20" },
                        { label: "20 đến 50m2", value: "20-50" },
                        { label: "50 đến 80m2", value: "50-80" },
                        { label: "80 đến 100m2", value: "80-100" },
                    ]}
                    name="size"
                    value={filters.size}
                    onChange={handleOnChange}
                />

                <SearchDropdown
                    label="Số phòng ngủ"
                    options={[
                        { label: "1 phòng", value: "1" },
                        { label: "2 phòng", value: "2" },
                        { label: "3 phòng", value: "3" },
                        { label: "4 phòng", value: "4" },
                    ]}
                    name="bedrooms"
                    value={filters.bedrooms}
                    onChange={handleOnChange}
                />
                <button
                    className="flex flex-col-1 w-96 bg-blue-500 text-white rounded justify-center items-center"
                    onClick={() => setFilters(searchFilters)}
                >
                    Tìm kiếm
                </button>
            </div>
        </div>
    )
};

export default SearchBar;
