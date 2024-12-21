import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import axios from "axios";
// import {NavLink} from "react-router"
import logo from "../../assets/images/geng.png";
import logoBlack from "../../assets/images/gengBlack.png";
const Header = () => {
  const userID = localStorage.getItem("userID");

  const location = useLocation();

 
  const [userDropdown, setUserDropdown] = useState(false);
  const navigate = useNavigate();
  function toogleUserDropdown() {
    setUserDropdown(!userDropdown);
  }
  function handleLogOut() {
    localStorage.clear();
    navigate("/");
  }
  let userRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!userRef.current.contains(e.target)) setUserDropdown(false);
    };
    document.addEventListener("mousedown", handler);
  });
  return (
    <div className={` z-50 w-full p-5 ${location.pathname === "/" || location.pathname === "/trang-chu" ? "absolute mb-20" : " bg-white shadow-md shadow-slate-600 mb-2"}`}>
  <div className="h-auto place-items-center w-full flex flex-row justify-between font-bold text-xl">
    <div className="text-center w-1/5 h-auto flex border-bg-red col-lg justify-center items-center ">
      <Link to="/trang-chu">
        <img className={ `w-[6vw]`} 
        
        src={location.pathname === "/trang-chu" || location.pathname === "/"?logo:logoBlack} />
      </Link>
    </div>

    <div className="flex flex-row w-4/5 items-center h-auto justify-center">
      <div className="h-full text-black flex flex-row justify-around w-3/5">
        
          <div >
            <Link to="/trang-chu">
              <p
                className={`cursor-pointer hover:text-red-500 ${location.pathname === "/trang-chu" || location.pathname === "/" ? "underline text-white" : "text-black"}`}
              >
                TRANG CHỦ
              </p>
            </Link>
          </div>
       
        <div>
          <Link to="/tim-kiem">
            <p
              href="/tim-kiem"
              className={`cursor-pointer hover:text-red-500 ${location.pathname === "/tim-kiem" ? "border-b-2 border-black hover:border-red-500 pb-2" 
                : location.pathname === "/" || location.pathname === "/trang-chu" ? "text-white":""}`}
            >
              CĂN HỘ
            </p>
          </Link>
        </div>
        <div>
          <Link to="/gioi-thieu">
            <p
              className={`cursor-pointer hover:text-red-500 ${location.pathname === "/gioi-thieu" ? "border-b-2 border-black hover:border-red-500 pb-2" 
                : location.pathname === "/" || location.pathname === "/trang-chu" ? "text-white":""}`}
            >
              GIỚI THIỆU
            </p>
          </Link>
        </div>
      </div>

      <div className="w-1/3 flex justify-center items-center relative">
        {userID ? (
          <div className="relative w-full">
            <div className={`flex justify-center cursor-pointer ${location.pathname ==="/" || location.pathname === "/trang-chu" ? "text-white":""}`}>
              <FaUser size={40} onClick={toogleUserDropdown} />
            </div>
            {userDropdown && (
              <div ref={userRef} className="mt-2 z-50 bg-slate-50 bg-opacity-70 rounded-xl w-1/2 inset-x-32 absolute flex flex-col justify-center items-center">
                <ul className="w-full font-semibold">
                  <Link to="/tai-khoan">
                    <li className="w-full rounded-md py-5 border-b border-black hover:text-zinc-100 hover:bg-cyan-700 pl-2 text-sm">
                      Thông tin tài khoản
                    </li>
                  </Link>
                  <Link to="/tai-khoan/hop-dong">
                    <li className="w-full rounded-md py-5 border-b border-black hover:text-zinc-100 hover:bg-cyan-700 pl-2 text-sm">
                      Thông tin phòng đã thuê
                    </li>
                  </Link>
                  <li onClick={handleLogOut} className="border-b border-black cursor-pointer pl-2 w-full rounded-md py-5 hover:text-zinc-100 hover:bg-cyan-700 text-sm">
                    Đăng xuất
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full flex flex-row gap-10">
            <button onClick={() => navigate("/dang-nhap")} 
            className= {`${location.pathname ==="/" || location.pathname === "/trang-chu" ? "text-white ":""}border border-red-400 hover:bg-red-400 rounded-xl px-3 py-3 text-center w-1/2`}>
              Đăng nhập
            </button>
            <button onClick={() => navigate("/dang-ky")} 
            className= {`${location.pathname ==="/" || location.pathname === "/trang-chu" ? "text-white ":""}border border-red-400 hover:bg-red-400 rounded-xl px-3 py-3 text-center w-1/2`}>
              Đăng ký
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
</div>

  );
};
export default Header;
