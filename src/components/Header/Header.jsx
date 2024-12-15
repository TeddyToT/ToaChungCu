import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import axios from "axios";
// import {NavLink} from "react-router"
import logo from "../../assets/react.svg";
const Header = () => {
  const userID = localStorage.getItem("id");

  const location = useLocation();

  const [isLogin, setIsLogin] = useState(true);
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
  if (location.pathname === "/" || location.pathname === "/trang-chu") {
    return (
      <div className="absolute z-50 w-full p-5 ">
        <div className=" h-auto place-items-center w-full flex flex-row justify-between">
          <div className="text-center w-1/5 h-auto flex border-bg-red col-lg justify-center items-center ">
            <Link to="/trang-chu">
              <img className="w-1/2 h-[100px]" src={logo} />
            </Link>
          </div>

          <div className=" flex flex-row w-4/5 items-center h-auto justify-center">
            <div
              className={
                "h-full text-black  flex flex-row justify-around w-3/5"
              }
            >
              <div>
                <Link to="/">
                  <a
                    href="#"
                    className={`cursor-pointer hover:text-red-500 text-white ${
                      location.pathname === "/" ||
                      location.pathname === "/trang-chu"
                        ? "underline"
                        : ""
                    }`}
                  >
                    TRANG CHỦ
                  </a>{" "}
                </Link>
              </div>

              <div className="">
                <Link to="/">
                  <a
                    href="#"
                    className="cursor-pointer hover:text-red-500 text-white"
                  >
                    CĂN HỘ
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/">
                  <a
                    href="#"
                    className="cursor-pointer hover:text-red-500 text-white"
                  >
                    GIỚI THIỆU
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-1/3 flex  justify-center items-center relative">
              {isLogin ? (
                <div className="relative w-full">
                  <div className="flex justify-center">
                    <FaUser size={50} onClick={toogleUserDropdown} />
                  </div>
                  {userDropdown && (
                    <div
                      ref={userRef}
                      className="mt-2 bg-slate-50 rounded-xl w-1/2 inset-x-32 absolute flex flex-col justify-center items-center"
                    >
                      <ul className="w-full font-semibold">
                        <Link to="/">
                          <li className="w-full rounded-md py-5 hover:text-zinc-100 hover:bg-cyan-700 pl-2">
                            Thông tin tài khoản
                          </li>
                        </Link>
                        <Link to="/">
                          <li className="w-full rounded-md py-5 hover:text-zinc-100 hover:bg-cyan-700 pl-2">
                            Thông tin phòng đã thuê
                          </li>
                        </Link>

                        <li
                          onClick={handleLogOut}
                          className="cursor-pointer pl-2 w-full rounded-md py-5 hover:text-zinc-100 hover:bg-cyan-700"
                        >
                          Đăng xuất
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full  flex flex-row gap-10">
                  <button className="border border-red-400 hover:bg-red-400 rounded-xl px-3 py-3 text-center w-1/2">
                    {" "}
                    Đăng nhập
                  </button>
                  <button className="border border-red-400 hover:bg-red-400 rounded-xl px-3 py-3 text-center w-1/2">
                    {" "}
                    Đăng ký
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full p-5 bg-white shadow-md shadow-slate-600">
        <div className=" h-auto place-items-center w-full flex flex-row justify-between">
          <div className="text-center w-1/5 h-auto flex border-bg-red col-lg justify-center items-center ">
            <Link to="/trang-chu">
              <img className="w-1/2 h-[100px]" src={logo} />
            </Link>
          </div>

          <div className=" flex flex-row w-4/5 items-center h-auto justify-center">
            <div
              className={
                "h-full text-black  flex flex-row justify-around w-3/5"
              }
            >
              <div>
                <Link to="/">
                  <a
                    href="#"
                    className={`cursor-pointer hover:text-red-500  text-black ${
                      location.pathname === "/" ||
                      location.pathname === "/trang-chu"
                        ? "underline"
                        : ""
                    }`}
                  >
                    TRANG CHỦ
                  </a>{" "}
                </Link>
              </div>

              <div className="">
                <Link to="/">
                  <a
                    href="#"
                    className="cursor-pointer hover:text-red-500  text-black"
                  >
                    CĂN HỘ
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/">
                  <a
                    href="#"
                    className="cursor-pointer hover:text-red-500  text-black"
                  >
                    GIỚI THIỆU
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-1/3 flex  justify-center items-center relative">
              {isLogin ? (
                <div className="relative w-full">
                  <div className="flex justify-center">
                    <FaUser size={50} onClick={toogleUserDropdown} />
                  </div>
                  {userDropdown && (
                    <div
                      ref={userRef}
                      className="mt-2 bg-slate-50 rounded-xl w-1/2 inset-x-32 absolute flex flex-col justify-center items-center"
                    >
                      <ul className="w-full font-semibold">
                        <Link to="/">
                          <li className="w-full rounded-md py-5 hover:text-zinc-100 hover:bg-cyan-700 pl-2 border-b">
                            Thông tin tài khoản
                          </li>
                        </Link>
                        <Link to="/">
                          <li className="w-full rounded-md py-5 hover:text-zinc-100 hover:bg-cyan-700 pl-2 border-b">
                            Thông tin phòng đã thuê
                          </li>
                        </Link>

                        <li
                          onClick={handleLogOut}
                          className="cursor-pointer pl-2 w-full rounded-md py-5 hover:text-zinc-100 hover:bg-cyan-700 border-b"
                        >
                          Đăng xuất
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full  flex flex-row gap-10">
                  <button className="border border-red-400 hover:bg-red-400 rounded-xl px-3 py-3 text-center w-1/2">
                    {" "}
                    Đăng nhập
                  </button>
                  <button className="border border-red-400 hover:bg-red-400 rounded-xl px-3 py-3 text-center w-1/2">
                    {" "}
                    Đăng ký
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Header;
