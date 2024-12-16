import React, { useState } from 'react';

const Account = () => {
	const [contactInfo, setContactInfo] = useState({
		name: '',
		citizenId: '',
		phone: '',
		email: '',
	});

	const [accountInfo, setAccountInfo] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleContactChange = (e) => {
		setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
	};

	const handleAccountChange = (e) => {
		setAccountInfo({ ...accountInfo, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Contact Info:', contactInfo);
		console.log('Account Info:', accountInfo);
	};

	return (
		<div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
			<div className="fixed left-0 top-1/4 w-1/4 flex flex-col items-start p-4 space-y-4">
				<button className="bg-yellow-500 text-white py-2 px-4 rounded w-full">
					Thông tin người dùng
				</button>
				<button className="bg-gray-200 text-black py-2 px-4 rounded w-full">
					Thông tin hợp đồng
				</button>
			</div>

			<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl ml-48 mt-8">
				<h2 className="text-xl font-bold mb-4">Thông tin liên hệ</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700">Họ và tên (vd: Nguyen Thi Ngoc Anh)</label>
						<input
							type="text"
							name="name"
							value={contactInfo.name}
							onChange={handleContactChange}
							className="w-full p-2 border border-gray-300 rounded mt-1"
							required
						/>
						<p className="px-2 text-sm text-gray-400">
							Như trên thẻ CCCD (không dấu)
						</p>
					</div>
					
					<div className="mb-4">
						<label className="block text-gray-700">Căn cước công dân</label>
						<input
							type="text"
							name="citizenId"
							value={contactInfo.citizenId}
							onChange={handleContactChange}
							className="w-full p-2 border border-gray-300 rounded mt-1"
							required
						/>
						<p className="px-2 text-sm text-gray-400">
							Phải đủ 12 số
						</p>
					</div>
					
					<div className="mb-4">
						<label className="block text-gray-700">Điện thoại di động</label>
						<input
							type="text"
							name="phone"
							value={contactInfo.phone}
							onChange={handleContactChange}
							className="w-full p-2 border border-gray-300 rounded mt-1"
							required
						/>
						<p className="px-2 text-sm text-gray-400">
							Ví dụ: 0904444444
						</p>
					</div>
					
					<div className="mb-4">
						<label className="block text-gray-700">Email</label>
						<input
							type="email"
							name="email"
							value={contactInfo.email}
							onChange={handleContactChange}
							className="w-full p-2 border border-gray-300 rounded mt-1"
							required
						/>
						<p className="px-2 text-sm text-gray-400">
							Ví dụ: email@example.com
						</p>
					</div>
					
					<button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded float-right">
						Lưu thông tin
					</button>
				</form>
			</div>

			<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl ml-48 mt-12 mb-12">
				<h2 className="text-xl font-bold mb-4">Thông tin tài khoản</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700">Email</label>
						<input
							type="email"
							name="email"
							value={accountInfo.username}
							onChange={handleAccountChange}
							className="w-full p-2 border border-gray-300 rounded mt-1"
							required
						/>
						<p className="px-2 text-sm text-gray-400">
							Ví dụ: email@example.com
						</p>
					</div>
					
					<div className="mb-4">
						<label className="block text-gray-700">Mật khẩu</label>
						<input
							type="password"
							name="password"
							value={accountInfo.password}
							onChange={handleAccountChange}
							className="w-full p-2 border border-gray-300 rounded mt-1"
							required
						/>
						<p className="px-2 text-sm text-gray-400">
							Tối thiểu 8 ký tự
						</p>
					</div>
					
					<div className="mb-4">
						<label className="block text-gray-700">Xác nhận mật khẩu</label>
						<input
							type="password"
							name="confirmPassword"
							value={accountInfo.confirmPassword}
							onChange={handleAccountChange}
							className="w-full p-2 border border-gray-300 rounded mt-1"
							required
						/>
						<p className="px-2 text-sm text-gray-400">
							Trùng khớp với mật khẩu
						</p>
					</div>
					
					<button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded float-right">
						Lưu thông tin
					</button>
				</form>
			</div>
		</div>
	);
};

export default Account;
