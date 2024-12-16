import React from "react";

const RoomList = ({ rooms }) => {

  const handleClick = (room) => {
  };

  return (
    <div className="space-y-4">
      {rooms.map((room) => (
        <div
          key={room._id}
          onClick={() => handleClick(room)}
          className="flex bg-white p-4 rounded shadow-md cursor-pointer transform transition duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
        >
          <img
            src={room.images[0]}
            alt="Room"
            className="w-32 h-32 object-cover rounded mr-4"
          />
          <div>
            <h2 className="font-semibold text-lg mb-1"> Phòng {room.roomNumber} - Tầng {room.floor}</h2>
            <p className="text-red-500 font-bold mt-2">
              {room.price.toLocaleString()} triệu đồng/tháng
            </p>
            <p className="text-gray-500">{room.size} m2</p>
            <p className="text-gray-500">{room.bedRoom} phòng ngủ</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomList;
