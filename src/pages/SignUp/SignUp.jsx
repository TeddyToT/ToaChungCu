import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Handle signup logic here
    console.log(`Email: ${email}, Password: ${password}`);
  };

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
          <div className="mb-4 text-left">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Mật khẩu
            </label>
            <input
              type="password"
              value={password}
              onChange={handleInputChange(setPassword)}
              placeholder="Hãy nhập mật khẩu mới"
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring"
              required
            />
          </div>
          <div className="mb-6 text-left">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Xác nhận mật khẩu
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleInputChange(setConfirmPassword)}
              placeholder="Nhập lại mật khẩu"
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring"
              required
            />
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