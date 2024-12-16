import React, { useState, useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { FreeMode, Thumbs } from "swiper/modules";
import axios from "axios";
import { AppContext } from "../../context/Contexts";
import { useNavigate } from "react-router-dom";
const Contract = () => {

    const [familyName, setFamilyName] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

  const { roomID, setRoomID, fetchRoomID,
    userInfo, setUserInfo, fetchUserInfo
    } = useContext(AppContext);
  const [firstLoad, setFirstLoad] = useState(true);
  const id = "6759e8174e506d595bad4042";
  const userId = "675ee07fcc1eae3ddecbfb2b";

  const navigate = useNavigate();
  useEffect(() => {
    if (id && firstLoad) {
      fetchRoomID(id);
      fetchUserInfo(userId)
      setFirstLoad(false);
    }
  }, [fetchRoomID, fetchUserInfo, firstLoad]);

  useEffect(() => {
    if (userInfo) {
        if(userInfo.name)
        {
            setFamilyName(userInfo.name)
        setName(userInfo.name)
        }
        if(userInfo.phone)
            {
                setPhone(userInfo.phone)

            }
            if(userInfo.email)
                    setEmail(userInfo.email)
    
                }
        
    },
   [userInfo]);


  const [selectedDate, setSelectedDate] = useState("");
  const [monthsToAdd, setMonthsToAdd] = useState(0);
  const [resultDate, setResultDate] = useState("");
  const [monthsDeposit, setMonthsDeposit] = useState(0);
  useEffect(() => {
    if (selectedDate && monthsToAdd >= 0) {
      try {
        const date = new Date(selectedDate);

        // Cộng thêm số tháng vào ngày ban đầu
        const year = date.getFullYear();
        const month = date.getMonth() + parseInt(monthsToAdd);

        date.setMonth(month);

        const formattedDate = date.toISOString().split("T")[0];
        setResultDate(formattedDate);

        // Tính số tháng cần cọc (nửa giá trị monthsToAdd)
        const deposit = Math.floor(monthsToAdd / 2);
        setMonthsDeposit(deposit); // Lưu vào state

        console.log(`Số tháng cần cọc: ${deposit}`);
      } catch (error) {
        console.error("Lỗi khi tính toán ngày:", error);
        setResultDate("");
        setMonthsDeposit(0);
      }
    }
  }, [selectedDate, monthsToAdd, resultDate]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-11/12 place-self-center place-items-center py-10">
        <div className="w-4/6 ">
          <h2 className="font-bold text-xl py-5">Thông tin liên hệ</h2>
          <div className="flex flex-col w-full gap-5 p-5 bg-white rounded-lg shadow-xl">
            <div className="flex flex-row w-full gap-3">
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Họ (VD: Nguyen)</p>
                <input
                value={familyName}
                  type="text"
                  className="w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400"
                />
                <p className=" px-2 text-sm text-gray-400">
                  Như trên CCCD (không dấu)
                </p>
              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">
                  Tên đệm & Tên (vd: Thi Ngoc Anh)
                </p>
                <input
                value={name}
                  type="text"
                  className="w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400"
                />
                <p className=" px-2 text-sm text-gray-400">
                  Như trên CCCD (không dấu)
                </p>
              </div>
            </div>
            <div className="flex flex-row w-full gap-3">
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Điện thoại di động</p>
                <input
                value={phone}
                  type="text"
                  className="w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400"
                />
                <p className=" px-2 text-sm text-gray-400">Ví dụ: 0904444444</p>
              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Email</p>
                <input
                value={email}
                  type="text"
                  className="w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400"
                />
                <p className=" px-2 text-sm text-gray-400">
                  Ví dụ: email@example.com
                </p>
              </div>
            </div>
            <div className="flex flex-row"></div>
          </div>
        </div>

        <div className="w-4/6 mt-5">
          <h2 className="font-bold text-xl py-5">Thời gian thuê căn hộ</h2>
          <div className="flex flex-col w-full gap-5 p-5 bg-white rounded-lg shadow-xl">
            <div className="flex flex-row w-full gap-3">
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Chọn ngày bắt đầu thuê</p>
                <input
                  type="date"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400"
                />
                <p className=" px-2 text-sm text-gray-400">
                  Cách ngày hiện tại ít nhất 2 ngày
                </p>
              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Số tháng thuê</p>
                <input
                  type="text"
                  placeholder="Số tháng"
                  value={monthsToAdd}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    setMonthsToAdd(isNaN(value) ? 0 : value);
                  }}
                  className="w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400"
                />

                <p className=" px-2 text-sm text-gray-400">Số tháng thuê</p>
              </div>
            </div>

            <div className="flex flex-row w-full gap-3">
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Ngày hết hạn dự kiến</p>
                <input
                  disabled
                  type="text"
                  value={resultDate}
                  className="w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400"
                />
                <p className=" px-2 text-sm text-gray-400">
                  Ngày hết hạn dự kiến
                </p>
              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Số tháng cần cọc</p>
                <input
                  disabled
                  type="text"
                  value={monthsDeposit}
                  className="w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400"
                />
                <p className=" px-2 text-sm text-gray-400">Số tháng cần cọc</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/6 mt-5">
          <h2 className="font-bold text-xl py-5">Chi tiết giá</h2>
          <div className="flex flex-col w-full gap-5 p-5 bg-white rounded-lg shadow-xl">
            <div className="w-full flex flex-col gap-5 border-b-2 border-gray-700 pb-5">
              <div className="flex flex-row w-full gap-3">
                <p className="px-2 font-semibold w-1/2">
                  Căn hộ chung cư Phòng số {roomID.roomNumber} - Tầng{" "}
                  {roomID.floor}
                </p>

                <p className="w-1/2 px-2 font-semibold text-end">
                  {Number(roomID.price).toLocaleString()}VNĐ / tháng
                </p>
              </div>

              <div className="flex flex-row w-full gap-3">
                <p className="px-2 w-1/2 font-semibold">Số tháng cần cọc </p>

                <p className="px-2 w-1/2 font-semibold text-end">
                  {monthsDeposit} tháng
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-5 ">
              <div className="flex flex-row w-full gap-3">
                <p className="px-2 font-semibold w-1/2">Tổng giá tiền</p>
                <p className="w-1/2 px-2 font-semibold text-end">
                  {(Number(roomID.price) * monthsDeposit).toLocaleString()}VNĐ
                </p>
              </div>
              <p className="w-full md:w-2/3 2xl:w-1/3 place-self-end  text-right"> Bằng việc nhấn thanh toán bạn đồng ý <span><a className="text-blue-500" href="#">Terms & Conditions</a></span> và <span><a className="text-blue-500" href="#">Privacy Policy.</a></span></p>

              <button onClick={() => navigate("/tim-kiem/:id/tao-hop-dong")} 
            className="border font-bold text-white hover:bg-orange-700  border-red-400 bg-[#ff5e1e] rounded-xl px-3 py-3 text-center place-self-end w-full sm:w-1/3">
              {" "}
              THANH TOÁN
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
