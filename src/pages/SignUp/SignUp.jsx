import React, { useState } from 'react';
// import { CiUser, CiLock, CiMail } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const navigate = useNavigate()
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2((prevState) => !prevState);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password) {
      toast.warning('Chưa nhập mật khẩu', {
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
    if (!password2) {
      toast.warning('Chưa nhập xác nhận mật khẩu', {
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
    if (!email) {
      toast.warning('Chưa nhập email', {
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
    if (password != password2) {
      toast.warning('Mật khẩu chưa trùng khớp', {
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
    else if (password.length < 6) {
      toast.warning('Yêu cầu mật khẩu hơn 6 kí tự', {
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


    axios.post("http://localhost:8081/v1/api/signUp", {
      password: password,
      email: email,
      role: "Customer",
    })
      .then((res) => {
        if (res.data.success == false) {
          toast.error('Đăng kí tài khoản thất bại', {
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
          toast.success('Đăng kí tài khoản thành công, mời đăng nhập', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
          navigate("/dang-nhap")
        }
      }
      )
      .catch(err => {
        console.log(err)
      })


  }

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    if (error) {
      setError(''); // Clear error message when input changes
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center">Đăng ký</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-left">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={handleInputChange(setEmail)}
              placeholder="Hãy nhập tài khoản email"
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring"
              required
            />
          </div>
          <div className="mb-4 text-left relative">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Mật khẩu
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handleInputChange(setPassword)}
              placeholder="Hãy nhập mật khẩu mới"
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring"
              required
            />
            {password && (<span
                      className="absolute right-4 top-9 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FaRegEye size={24} />
                      ) : (
                        <FaRegEyeSlash size={24} />
                      )}
                    </span>)}
          </div>
          <div className="mb-6 text-left relative">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Xác nhận mật khẩu
            </label>
            <input
              type={showPassword2 ? "text" : "password"}
              value={password2}
              onChange={handleInputChange(setPassword2)}
              placeholder="Nhập lại mật khẩu"
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring"
              required
            />
            {password2 && (<span
                      className="absolute right-4 top-9 cursor-pointer"
                      onClick={togglePasswordVisibility2}
                    >
                      {showPassword2 ? (
                        <FaRegEye size={24} />
                      ) : (
                        <FaRegEyeSlash size={24} />
                      )}
                    </span>)}
            
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring"
            >
              Đăng ký
            </button>
          </div>
          <p className="mt-4 text-xs text-center text-gray-600">
            Bằng cách nhấp vào Đăng ký, bạn đồng ý với
            <a href="/terms" className="text-blue-500 hover:underline ml-1">
              điều khoản dịch vụ
            </a>
			<span> và</span>
            <a href="/privacy" className="text-blue-500 hover:underline ml-1">
              chính sách bảo mật
            </a>
			<span> của chúng tôi.</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;