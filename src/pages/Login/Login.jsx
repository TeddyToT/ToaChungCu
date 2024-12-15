import React, { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle login logic here
		console.log(`Email: ${email}, Password: ${password}, Remember Me: ${rememberMe}`);
	};

	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="w-full max-w-md p-8 space-y-4 bg-white shadow-md">
				<h1 className="text-2xl font-bold">Đăng nhập</h1>
			
				<form onSubmit={handleSubmit}>
			
					<div className="mb-4 text-left">
						<label className="block mb-2 text-sm font-bold text-gray-700">
							Email
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Hãy nhập email"
							className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring"
							required
						/>
					</div>
				
					<div className="mb-2 text-left relative">
						<label className="block mb-2 text-sm font-bold text-gray-700">
							Mật khẩu
						</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Hãy nhập mật khẩu"
							className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring"
							required
						/>
					</div>
					
					<div className="mb-2 text-center">
						<label className="inline-flex items-center">
							<input
								type="checkbox"
								checked={rememberMe}
								onChange={(e) => setRememberMe(e.target.checked)}
								className="form-checkbox"
							/>
							<span className="ml-2 text-sm text-gray-700">Ghi nhớ mật khẩu</span>
						</label>
					</div>
				
					<div className="flex items-center justify-end">
						<button
							type="submit"
							className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring mb-4"
						>
							Đăng nhập
						</button>
					</div>
				
					<div className="flex justify-between mt-4 text-sm">
						<a href="#" className="text-blue-500 font-bold hover:underline">Đăng ký tài khoản</a>
						<a href="#" className="text-blue-500 font-bold hover:underline">Quên mật khẩu?</a> 
					</div>
					
				</form>
			</div>
		</div>
	);
};

export default Login