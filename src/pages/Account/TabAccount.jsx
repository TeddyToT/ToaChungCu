import React, { useState, useEffect } from "react";
import avt from '../../assets/react.svg'
import AccountButton from "./AccountButton";
import { useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { toast } from 'react-toastify';

const Account = () => {
    const [select, setSelect] = useState(1);
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {

        if (location.pathname.includes("/tai-khoan/hop-dong")) {
            setSelect(2);
        } else if (location.pathname === "/tai-khoan") {
            setSelect(1);
        }
    }, [location]);

    function Choose(choose) {
        setSelect(choose);
    }

    const handleLogout = () => {
        Choose(3);
        localStorage.removeItem("userID");
        toast.success("Đăng xuất thành công", {
            position: "top-right",
            autoClose: 700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            onClose: () => {
                navigate('/trang-chu', {replace: true})
            }
        });
    }

    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20 ">
            <div className="w-full h-auto bg-transparent flex flex-row justify-between gap-6 p-6 rounded-xl relative">
                <div className="md:w-1/3 h-[100vh] bg-white flex flex-col items-center border border-gray-300 shadow-2xl rounded-lg p-5 pt-10">
                    <div className="w-2/5 flex flex-col gap-3">
                        <img
                            src={avt}   
                            className="w-full"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-5 mt-10">
                        <AccountButton
                            icon={"fa-solid fa-user"}
                            name={"Thông tin người dùng"}
                            position={1}
                            select={select}
                            onclick={() => Choose(1)}
                            path={"/tai-khoan"}
                        />
                        <AccountButton
                            icon={"fa-solid fa-truck-fast"}
                            name={"Thông tin hợp đồng"}
                            position={2}
                            select={select}
                            onclick={() => Choose(2)}
                            path={"/tai-khoan/hop-dong"}
                        />
                        <AccountButton
                            icon={"fa-solid fa-sign-out"}
                            name={"Đăng xuất"}
                            position={3}
                            select={select}
                            onclick={handleLogout}
                        />
                    </div>
                </div>

                <div className="md:w-2/3 lg:w-3/4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Account;
