import React from "react";

const RoomList = () => {
  const apartments = [
    {
      title: "Cho thuê căn hộ chung cư GENG Grandpark quận 9",
      details: "3 PN - 2 WC - Chung cư",
      price: "3,5 triệu/tháng",
      size: "81 m2",
      image: "/path-to-your-image/image.png", // Update with actual image path get some image from internet
    },
    {
      title: "Cho thuê căn hộ chung cư GENG Grandpark quận 9",
      details: "3 PN - 2 WC - Chung cư",
      price: "3,5 triệu/tháng",
      size: "81 m2",
      image: "/path-to-your-image/image.png",
    },
    {
      title: "Cho thuê căn hộ chung cư GENG Grandpark quận 9",
      details: "3 PN - 2 WC - Chung cư",
      price: "3,5 triệu/tháng",
      size: "81 m2",
      image: "/path-to-your-image/image.png",
    },
  ];

  return (
    <div className="space-y-4">
      {apartments.map((apartment, index) => (
        <div key={index} className="flex bg-white p-4 rounded shadow-md">
          <img
            src={apartment.image}
            alt="Apartment"
            className="w-32 h-32 object-cover rounded mr-4"
          />
          <div>
            <h2 className="font-semibold text-lg mb-1">{apartment.title}</h2>
            <p className="text-sm text-gray-600">{apartment.details}</p>
            <p className="text-red-500 font-bold mt-2">{apartment.price}</p>
            <p className="text-gray-500">{apartment.size}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomList;
