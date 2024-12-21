import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';
const ConfirmCode = () => {
	
	const location = useLocation();
	const { email } = location.state || {};
	const [code, setCode] = useState("")
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	  const [showPassword, setShowPassword] = useState(false);
	  const [showPassword2, setShowPassword2] = useState(false);
	  const togglePasswordVisibility = () => {
		setShowPassword((prevState) => !prevState);
	  };
	  const togglePasswordVisibility2 = () => {
		setShowPassword2((prevState) => !prevState);
	  };

	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault();
	  
		  axios.post('http://localhost:8081/v1/api/confirmCode', {
			email: email,
			code: code,
			newPassword: password
		  }
		  )
			.then((res) => {
			  console.log(res);
			  if (res.data.success === false) {
				localStorage.clear();
				toast.error('Sai mã xác nhận, vui lòng kiểm tra lại', {
				  position: "top-right",
				  autoClose: 2000,
				  hideProgressBar: false,
				  closeOnClick: true,
				  pauseOnHover: true,
				  draggable: false,
				  progress: undefined,
				  theme: "light",
				});
			  } else {

				  toast.success('Xác nhận thành công, vui lòng đăng nhập lại', {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: false,
					progress: undefined,
					theme: "light",
					});
					localStorage.setItem('userID', res.data.id)
					  navigate("/dang-nhap");
					  
				
				
				
			  }
			})
			.catch((err) => console(err));
		console.log(`Email: ${email}, Password: ${password}, Remember Me: ${rememberMe}`);
	};

	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="w-full max-w-md p-8 space-y-4 bg-white shadow-md">
				<h1 className="text-2xl font-bold">Xác nhận mã</h1>
			
				<form className='flex flex-col gap-5' onSubmit={handleSubmit}>
			
					<div className="mb-4 text-left">
						<label className="block mb-2 text-sm font-bold text-gray-700">
							Email
						</label>
						<input
							type="email"
							value={email}
							disabled
							placeholder="Hãy nhập email"
							className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring"
							required
						/>
					</div>
				
					<div className="mb-2 text-left relative">
						<label className="block mb-2 text-sm font-bold text-gray-700">
							Mã xác nhận
						</label>
						<input
							type="text"
							value={code}
							onChange={(e) => setCode(e.target.value)}
							placeholder="Nhập mã xác nhận"
							className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring"
							required
						/>
					</div>

                    <div className="mb-4 text-left relative">
								<label className="block mb-2 text-sm font-bold text-gray-700">
								  Mật khẩu mới
								</label>
								<input
								  type={showPassword ? "text" : "password"}
								  value={password}
								  onChange={(e)=>setPassword(e.target.value)}
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
								  Xác nhận mật khẩu mới
								</label>
								<input
								  type={showPassword2 ? "text" : "password"}
								  value={password2}
								  onChange={(e)=>setPassword2(e.target.value)}
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
							className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring mb-4"
						>
							Tạo mật khẩu mới
						</button>
					</div>
				
					<div className="flex justify-between mt-4 text-sm">
						<a href="/dang-nhap" className="text-blue-500 font-bold hover:underline">Đăng nhập ngay</a>
					</div>
					
				</form>
			</div>
		</div>
	);
};

export default ConfirmCode