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
    console.log("cứu tôi: ", detailContract.roomId);
  }, [detailContract]);

  const formatYMDtoDMY = (dateString) => {
    if (!dateString) return "";
    console.log(selectedDate);
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const time = date.toTimeString().split(" ")[0];
    return `${day}/${month}/${year} ${time}`;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-11/12 place-self-center place-items-center py-10">
        <div className="w-4/6 ">
          <h2 className="font-bold text-xl py-5">Thông tin liên hệ</h2>
          <div className="flex flex-col w-full gap-5 p-5 bg-white rounded-lg shadow-xl">
            <div className="flex flex-row w-full gap-3">
              <div className="flex flex-col w-full gap-1">
                <input
                  value={name}
                  disabled
                  type="text"
                  className=" w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400"
                />
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
              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Email</p>
                <input
                  disabled
                  value={email}
                  type="text"
                  className="w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400"
                />
              </div>
            </div>
            <div className="flex flex-row"></div>
          </div>
        </div>

        <div className="w-4/6 mt-5">
          <h2 className="font-bold text-xl py-5">Thông tin chi tiết hợp đồng #{detailContract?._id}</h2>
          <div className="flex flex-col w-full gap-5 p-5 bg-white rounded-lg shadow-xl">
            
          <div className="flex flex-col w-full gap-1">
                <p className="px-2 font-semibold">Thông tin phòng</p>
                <div className="px-4 py-4 flex flex-row w-full gap-3 border-stroke border rounded-lg">
                <p className=" font-semibold w-2/3">
                  Căn hộ chung cư Phòng số{" "}
                  {detailContract?.roomId?.roomNumber || "N/A"} - Tầng{" "}
                  {detailContract?.roomId?.floor || "N/A"}
                </p>

                <p className="w-1/3 px-2 font-bold text-end">
                  {Number(detailContract?.roomId?.price).toLocaleString()}VNĐ /
                  tháng
                </p>
              </div>
              </div>

            <div className="flex flex-row w-full gap-3">
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Ngày bắt đầu thuê</p>
                <p className="w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400">
                  {formatDate(detailContract.startDay)}
                </p>
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
              </div>
            </div>

            <div className="flex flex-row w-full gap-3">
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Ngày hết hạn dự kiến</p>
                <p className="w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400">
                  {formatDate(detailContract.endDay)}
                </p>
              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Số tiền cọc</p>
                <p className="font-bold w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400">
                  {detailContract.deposit?.toLocaleString()} VNĐ
                </p>
              </div>
            </div>

            <div className="flex flex-row w-full gap-3">
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Tổng giá tiền:</p>
                <p className="font-bold w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400">
                  {detailContract.total?.toLocaleString()} VNĐ
                </p>
              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <p className="px-2 font-semibold">Trạng thái hợp đồng</p>
                <p className="font-bold w-full rounded-lg border border-stroke px-4 py-4 text-black outline-none focus:border-orange-400">
                  {detailContract.state == "Pending"?"Chờ xét duyệt":detailContract.state == "Done"?"Thành công":detailContract.state == "Cancel"?"Đã hủy":"Hết hạn"} 
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
