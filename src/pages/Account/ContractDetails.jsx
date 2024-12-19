import React, { useState, useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { FreeMode, Thumbs } from "swiper/modules";
import axios from "axios";
import { AppContext } from "../../context/Contexts";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
const ContractDetails = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [monthsToAdd, setMonthsToAdd] = useState(0);
  const [resultDate, setResultDate] = useState("");
  const [monthsDeposit, setMonthsDeposit] = useState(0);

  const { detailContract, setDetailContract, fetchDetailContract } =
    useContext(AppContext);
  const [firstLoad, setFirstLoad] = useState(true);

  const userID = localStorage.getItem("userID");

  const navigate = useNavigate();
  useEffect(() => {
    if (id && firstLoad) {
      fetchDetailContract(id);
      setFirstLoad(false);
    }
  }, [fetchDetailContract, firstLoad, id, userID]);

  useEffect(() => {
    if (detailContract) {
      if (detailContract.name) {
        setName(detailContract.name);
      }
      if (detailContract.phone) {
        setPhone(detailContract.phone);
      }
      if (detailContract.email) setEmail(detailContract.email);
    }
    console.log("cứu tôi: ",detailContract.roomId);
  }, [detailContract]);

  const formatYMDtoDMY = (dateString) => { 
    if (!dateString) return "";
    console.log(selectedDate);
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-11/12 place-self-center place-items-center py-10">
        <div className="w-4/6 ">
          <h2 className="font-bold text-xl py-5">Thông tin liên hệ</h2>
          <div className="flex flex-col w-full gap-5 p-5 bg-white rounded-lg shadow-xl">
            <div className="flex flex-row w-full gap-3">
              <div className="flex flex-col w-full gap-1">
                <p className="px-2 font-semibold">
                  Họ Tên (VD: Nguyễn Thị Ngọc Anh)
                </p>
                <input
                  value={name}
                  disabled
                  type="text"
                  className="uppercase w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400"
                />
                <p className=" px-2 text-sm text-gray-400">Như trên CCCD</p>
              </div>
            </div>
            <div className="flex flex-row w-full gap-3">
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Điện thoại di động</p>
                <input
                  value={phone}
                  disabled
                  type="text"
                  className="w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400"
                />
                <p className=" px-2 text-sm text-gray-400">Ví dụ: 0904444444</p>
              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Email</p>
                <input
                  disabled
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
                <p className="px-2 font-semibold">ngày bắt đầu thuê</p>
                <input
                disabled
                  type="text"
                  value={detailContract.startDay}
                  className="w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400"
                />
              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Số tháng thuê</p>
                <input
                  placeholder="Số tháng"
                  disabled
                  type="text"
                  value={detailContract.month}
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
                  value={detailContract.endDay}
                  className="w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400"
                />

              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Số tiền cọc</p>
                <input
                  disabled
                  type="text"
                  value={detailContract.deposit}
                  className="w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400"
                />

              </div>
              
            </div>
          </div>
        </div>

        <div className="w-4/6 mt-5">
          <h2 className="font-bold text-xl py-5">Chi tiết phòng</h2>
          <div className="flex flex-col w-full gap-5 p-5 bg-white rounded-lg shadow-xl">
            <div className="w-full flex flex-col gap-5 border-b-2 border-gray-700 pb-5">
              <div className="flex flex-row w-full gap-3">
              <p className="px-2 font-semibold w-1/2">
  Căn hộ chung cư Phòng số {detailContract?.roomId?.roomNumber || "N/A"} - Tầng{" "}
  {detailContract?.roomId?.floor || "N/A"}
</p>


                <p className="w-1/2 px-2 font-semibold text-end">
                  {Number(detailContract?.roomId?.price).toLocaleString()}VNĐ / tháng
                </p>
              </div>

            </div>
            <div className="w-full flex flex-col gap-5 ">
              <div className="flex flex-row w-full gap-3">
                <p className="px-2 font-semibold w-1/2">Tổng giá tiền</p>
                <p className="w-1/2 px-2 font-semibold text-end">
                  {Number(detailContract.total).toLocaleString()}VNĐ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractDetails;
