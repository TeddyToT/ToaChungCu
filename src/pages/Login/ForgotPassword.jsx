import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(false); 

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		axios
		.post("http://localhost:8081/v1/api/forgotPassword", {
		  email: email,
		})
		.then((res) => {
		  if (res.data.success == false) {
			toast.error("Email chưa được đăng kí", {
			  position: "top-right",
			  autoClose: 3000,
			  hideProgressBar: false,
			  closeOnClick: true,
			  pauseOnHover: true,
			  draggable: false,
			  progress: undefined,
			  theme: "light",
			});
		  } else {
			toast.success(
			  "Xác nhận yêu cầu lấy lại mật khẩu thành công. Xin hãy kiểm tra mail gửi về",
			  {
				position: "top-right",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
				theme: "light",
			  }
			);
			navigate("/quen-mat-khau/xac-nhan", { state: { email } });
			setIsLoading(false)
		  }
		})
		.catch((err) => {
		  console.log(err);
		});
		;
	};


	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			 {isLoading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
			<div className="w-full max-w-md p-8 space-y-4 bg-white shadow-md">
				<h1 className="text-2xl font-bold">Quên mật khẩu</h1>
			
				<form onSubmit={handleSubmit}>
			
					<div className="mb-4 text-left">
						<label className="block mb-2 text-sm font-bold text-gray-700">
							Email đã đăng ký
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Hãy nhập email đã đăng ký"
							className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring"
							required
						/>
					</div>

				
					<div className="flex items-center justify-end">
						<button
							type="submit"
							className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring mb-4"
						>
							Nhận mã xác nhận
						</button>
					</div>
				
					<div className="flex justify-between mt-4 text-sm">
						<a href="/dang-nhap" className="text-blue-500 font-bold hover:underline">Đăng nhập ngay</a>					</div>
					
				</form>
			</div>
		</div>
	);
};

export default ForgotPassword