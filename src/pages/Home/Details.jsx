import React from "react";

const App = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <div className="flex justify-between items-center container mx-auto">
          <div className="text-2xl font-bold text-yellow-600">GEN.G</div>
          <nav className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-yellow-600">
              Trang Chủ
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-600">
              Căn Hộ
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-600">
              Giới Thiệu
            </a>
          </nav>
          <div className="space-x-2">
            <button className="px-4 py-1 border border-gray-300 rounded-md">
              Đăng Nhập
            </button>
            <button className="bg-yellow-500 text-white px-4 py-1 rounded-md">
              Đăng Ký
            </button>
          </div>
        </div>
      </header>

      {/* Apartment Section */}
      <main className="container mx-auto p-6 bg-white shadow-lg my-6 rounded-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Cho thuê căn hộ chung cư GEN.G Grandpark quận 9
        </h1>

        {/* Image Gallery */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          <div className="col-span-3">
            <img
              src="apartment-main.jpg"
              alt="Main"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-2">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <img
                  key={i}
                  src={`apartment-${i + 1}.jpg`}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-auto rounded-md"
                />
              ))}
          </div>
        </div>

        {/* Price & Details */}
        <p className="text-lg text-red-500 font-bold">3,5 triệu/tháng</p>
        <p className="text-gray-600 mb-4">81 m²</p>

        {/* Features Table */}
        <table className="w-full border-t border-gray-200">
          <tbody>
            <tr>
              <td className="p-2 text-gray-700">Số phòng ngủ:</td>
              <td className="p-2 font-semibold text-gray-800">3 Phòng ngủ</td>
            </tr>
            <tr>
              <td className="p-2 text-gray-700">Số phòng vệ sinh:</td>
              <td className="p-2 font-semibold text-gray-800">2 Phòng vệ sinh</td>
            </tr>
            <tr>
              <td className="p-2 text-gray-700">Diện tích:</td>
              <td className="p-2 font-semibold text-gray-800">81 m²</td>
            </tr>
            <tr>
              <td className="p-2 text-gray-700">Giá thuê:</td>
              <td className="p-2 font-semibold text-gray-800">3,5 triệu</td>
            </tr>
            <tr>
              <td className="p-2 text-gray-700">Tiện ích:</td>
              <td className="p-2 font-semibold text-gray-800">2 Tháng</td>
            </tr>
          </tbody>
        </table>

        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
            Thuê Căn Hộ
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
            Mô Hình 3D
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 mt-6">
        <div className="container mx-auto flex justify-between">
          <div>
            <h3 className="font-bold mb-2 text-yellow-500">GEN GROUP</h3>
            <p>Địa chỉ: UIT</p>
            <p>SĐT: +84 44444444</p>
            <p>Email: gen@gmail.com</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Liên kết</h4>
            <ul>
              <li>Trang chủ</li>
              <li>Thông tin</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
