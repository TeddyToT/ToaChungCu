import React from "react";

function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex justify-between items-center bg-white shadow-md px-6 py-3">
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            className="w-10"
          />
          <h1 className="text-2xl font-bold text-gray-700">GEN.G</h1>
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-black">
            TRANG CHỦ
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            CÁ NHÂN
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            GIỚI THIỆU
          </a>
          <button className="border rounded-md px-4 py-1 hover:bg-gray-100">
            ĐĂNG NHẬP
          </button>
          <button className="bg-yellow-400 text-white rounded-md px-4 py-1">
            ĐĂNG KÝ
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 mt-6 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Thông tin liên hệ</h2>
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600">Họ và tên</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Nhập họ và tên"
            />
          </div>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full border p-2 rounded"
              placeholder="Nhập email"
            />
          </div>
          <div>
            <label className="block text-gray-600">Số điện thoại</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div>
            <label className="block text-gray-600">Địa chỉ</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Nhập địa chỉ"
            />
          </div>
        </form>

        {/* Chi tiết giỏ hàng */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Chi tiết giỏ hàng</h3>
          <div className="flex justify-between border-t border-b py-2">
            <span>Sản phẩm:</span>
            <span>1.500.000 VNĐ</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>Tổng cộng:</span>
            <span className="text-red-600 font-bold">1.500.000 VNĐ</span>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 mt-4 rounded">
            Thanh toán
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white mt-8 p-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-lg font-semibold">GEN GROUP</h4>
            <p className="text-gray-400">Hotline: 090-4444444</p>
            <p className="text-gray-400">Email: support@gmail.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Liên hệ</h4>
            <p className="text-gray-400">Trang chủ</p>
            <p className="text-gray-400">Cá nhân</p>
            <p className="text-gray-400">Giới thiệu</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <span className="text-gray-500">&copy; 2024 GEN Group</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
