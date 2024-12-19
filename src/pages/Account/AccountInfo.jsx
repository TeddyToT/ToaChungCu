import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/Contexts";
const AccountInfo = () => {
  const { userInfo, fetchUserInfo } = useContext(AppContext);
  const userID = localStorage.getItem("userID");
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (userID && firstLoad) {
      fetchUserInfo(userID);
      setFirstLoad(false);
    }
  }, [fetchUserInfo, firstLoad, userID]);

  useEffect(() => {
    if (userInfo) {
      if (userInfo.name) {
        setContactInfo((prevState) => ({
			...prevState, 
			name: userInfo.name, 
		  }));
      }
      if (userInfo.phone) {
        setContactInfo((prevState) => ({
			...prevState,
			phone: userInfo.phone,
		  }));
      }
      if (userInfo.email){
		setContactInfo((prevState) => ({
			...prevState,
			email: userInfo.email,
		  }));
	  }
    }
  }, [userInfo]);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    citizenId: "",
    phone: "",
    email: "",
  });

  const handleContactChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Info:", contactInfo);
  };

  return (
    <div className="flex flex-col w-full ">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-11/12 place-self-center py-10">
        <h2 className="text-xl font-bold mb-4">Thông tin liên hệ</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">
              Họ và tên (vd: Nguyen Thi Ngoc Anh)
            </label>
            <input
              type="text"
              name="name"
              value={contactInfo.name}
              onChange={handleContactChange}
              className="w-full uppercase py-3 px-5 border border-gray-300 rounded mt-1"
              required
            />
            <p className="px-2 text-sm text-gray-400">
              Như trên thẻ CCCD
            </p>
          </div>

          {/* <div className="mb-4">
            <label className="block text-gray-700">Căn cước công dân</label>
            <input
              type="text"
              name="citizenId"
              value={contactInfo.citizenId}
              onChange={handleContactChange}
              className=" py-3 px-5 w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
            <p className="px-2 text-sm text-gray-400">Phải đủ 12 số</p>
          </div> */}

          <div className="mb-4">
            <label className="block text-gray-700">Điện thoại di động</label>
            <input
              type="text"
              name="phone"
              value={contactInfo.phone}
              onChange={handleContactChange}
              className="py-3 px-5 w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
            <p className="px-2 text-sm text-gray-400">Ví dụ: 0904444444</p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={contactInfo.email}
              onChange={handleContactChange}
              className="py-3 px-5 w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
            <p className="px-2 text-sm text-gray-400">
              Ví dụ: email@example.com
            </p>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-4 rounded float-right"
          >
            Lưu thông tin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountInfo;
