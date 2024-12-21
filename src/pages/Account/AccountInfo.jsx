import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/Contexts";
import { toast } from "react-toastify";
import axios from "axios";
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
        setName(userInfo.name)
      }
      if (userInfo.phone) {
        setPhone(userInfo.phone)
      }

      if (userInfo.email) {
        setEmail(userInfo.email)
      }
      }

    
  }, [userInfo]);

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const regexPhoneNumber = /(?:\+84|0084|0)[235789][0-9]{1,2}[0-9]{7}(?:[^\d]+|$)/g;
    if(!phone.match(regexPhoneNumber)){
    toast.warning('Sai định dang số điện thoại Việt Nam', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
          return
    }

        if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
          toast.warning('Email không hợp lệ', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
          return;
        }
        axios.put("http://localhost:8081/v1/api/updateUser", {
          id: userID,
          name: name,
          email: email,
          phone: phone,
        })
          .then((res) => {
            if (res.data.success == false) {
              toast.error(`Sửa thông tin thất bại ${res.data.message}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: false,
                progress: undefined,
                theme: "light",
              });
    
            }
            else {
              toast.success('Sửa thông tin thành công', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: false,
                progress: undefined,
                theme: "light",
              });
              fetchUserInfo(userID)
              
            }
          }
          )
          .catch(err => {
            console.log(err)
          })

  };

  return (
    <div className="flex flex-col w-full ">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-11/12 place-self-center py-10">
        <h2 className="text-xl font-bold mb-4">Thông tin liên hệ</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">
              Họ và tên (vd: Nguyễn Thị Ngọc Anh)
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full py-3 px-5 border border-gray-300 rounded mt-1"
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
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
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
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
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
