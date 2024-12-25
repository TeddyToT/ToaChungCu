import React, { useState, useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { FreeMode, Thumbs } from "swiper/modules";
import axios from "axios";
import { AppContext } from "../../context/Contexts";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const Details = () => {
  const { roomID, setRoomID, fetchRoomID } = useContext(AppContext);
  const [firstLoad, setFirstLoad] = useState(true);
  const userID = localStorage.getItem("userID");
  const {id} = useParams()
  const [phong, setPhong] = useState("")
  const [images, setImages] = useState([ 
  ]);
  const navigate = useNavigate()
  useEffect(() => {
    if (id && firstLoad) {
      fetchRoomID(id);
      setPhong(id)
      setFirstLoad(false);
    }
  }, [fetchRoomID, firstLoad, id]);

  useEffect(() => {
    if (roomID.images) {
      console.log("hinh ảnh: ",roomID.images);
      setImages(roomID.images)
    }
  }, [fetchRoomID, firstLoad, roomID.images]);

 
  

  const handleThue = () => {
    if(!userID){
      toast.warn("Yêu cầu đăng nhập để thuê")
      return;
    }
    const roomid = id; // Lấy giá trị id
    navigate('/thanh-toan', { state: { roomid } });
  };
  

  const [thumbsSwiper, setThumbsSwiper] = useState(null); // Swiper nhỏ
  const [swiperRef, setSwiperRef] = useState(null); // Swiper lớn

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-11/12 place-self-center py-10">
        <div className="w-full flex flex-row">
          <div className="w-3/4 flex gap-3">
            <div className="w-full md:w-1/2 h-[calc(100vh/2)]">
              <Swiper
                onSwiper={setSwiperRef}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="h-full rounded-lg"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Product ${index}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="hidden md:flex md:w-1/2 h-[calc(100vh/2)] overflow-y-auto ">
              <div className="grid grid-cols-2 gap-2 h-full">
                {images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => swiperRef.slideTo(index)} // Chuyển Swiper lớn tới ảnh tương ứng
                    className="h-full cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-1/4 flex flex-col items-center justify-center gap-10 text-lg font-bold">
            <button  onClick={handleThue} 
            className="border text-white hover:bg-orange-700  border-red-400 bg-[#ff5e1e] rounded-xl px-3 py-3 text-center w-5/6 h-1/4">
              
              THUÊ CĂN HỘ
            </button>
            <button onClick={() => navigate("/chi-tiet-phong")} 
            className="border bg-white border-red-400 hover:text-white hover:bg-orange-700 rounded-xl px-3 py-3 text-center w-5/6 h-1/4">
              {" "}
              MÔ HÌNH 3D
            </button>
          </div>
        </div>

        <div className="w-full py-10">
          <div className="w-full sm:w-3/4 md:w-2/3">
            <h2 className="text-blue-600 font-bold text-lg mb-2">
              Thông tin chung
            </h2>
            <table className="w-full border-collapse custom-table">
              <tbody className="">
              <tr className="">
                  <td className="p-3 text-gray-700">Phòng</td>
                  <td className="p-3 font-semibold">Phòng số {roomID.roomNumber}</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700">Tầng</td>
                  <td className="p-3 font-semibold">Tầng số {roomID.floor} </td>
                </tr>
                <tr className="">
                  <td className="p-3 text-gray-700">Số phòng ngủ</td>
                  <td className="p-3 font-semibold">{roomID.bedRoom} Phòng ngủ</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700">Số phòng vệ sinh</td>
                  <td className="p-3 font-semibold">{roomID.restRoom} Phòng vệ sinh</td>
                </tr>
                <tr className="">
                  <td className="p-3 text-gray-700">Loại hình căn hộ</td>
                  <td className="p-3 font-semibold">Chung cư cao cấp</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700">Diện tích</td>
                  <td className="p-3 font-semibold">{roomID.size} mét vuông</td>
                </tr>
                <tr className="">
                  <td className="p-3 text-gray-700">Giá thuê</td>
                  <td className="p-3 font-bold text-xl text-red-500">{Number(roomID.price).toLocaleString()} VNĐ / tháng</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
