import React from "react";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
// import {NavLink} from "react-router"
import logo from '../../assets/react.svg'
const Footer = () => {
    return (
        <div className=" flex flex-col p-10 bg-black text-neutral-content bottom-0 w-full text-white">
            <div className="flex flex-row w-full border-b-2 pb-7">
                <div className="flex flex-row w-1/2 items-center gap-10">
                    <img src={logo} className="h-[100px]"/>
                    <p className="text-5xl font-semibold">GEN GROUP</p>
                </div>
                <div className="flex flex-row w-1/2 justify-end items-center gap-5 mr-10">
                <FaFacebook size={50}/>
                <FaYoutube size={50}/>
                </div>
            </div>
            <div className="flex flex-row w-full pb-2 mt-7">
                <div className="flex flex-col w-1/2 pl-12 gap-2">
                    <p className="text-xl font-semibold">Địa chỉ: UIT</p>
                    <p className="text-xl font-semibold">SĐT: +84 444444444</p>
                    <p className="text-xl font-semibold">Email: UIT@gmail.com</p>
                    <p className="text-xl font-semibold">CSKH: +84 333333333 - uit-cskh@gmail.com</p>


                </div>
                <div className="flex flex-col w-1/2 justify-end items-end gap-5">
                <div className="w-1/5"> 
                <p className="text-xl font-bold">Liên kết</p>

                    </div>
                
                    <div className="w-1/5 flex flex-col gap-2">
                <p className="text-xl ">Trang chủ</p>
                    <p className="text-xl ">Căn hộ</p>
                    <p className="text-xl ">Liên hệ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer