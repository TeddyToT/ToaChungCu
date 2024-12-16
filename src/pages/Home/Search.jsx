import React from "react";

const App = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-yellow-500">GEN.G</div>
          <nav className="flex space-x-6">
            <a href="#" className="hover:text-yellow-500">Trang Chủ</a>
            <a href="#" className="text-yellow-500 font-semibold">Căn Hộ</a>
            <a href="#" className="hover:text-yellow-500">Giới Thiệu</a>
          </nav>
          <div>
            <button className="border px-4 py-1 rounded mr-2">Đăng Nhập</button>
            <button className="bg-yellow-500 text-white px-4 py-1 rounded">Đăng Ký</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-6 flex gap-6">
        {/* Filter Section */}
        <aside className="w-1/4 bg-white p-4 rounded-md shadow-md">
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Lọc theo khoảng giá</h3>
            <ul>
              <li><input type="radio" name="price" /> <label>0 - 3 triệu</label></li>
              <li><input type="radio" name="price" /> <label>3 - 5 triệu</label></li>
              <li><input type="radio" name="price" /> <label>5 - 8 triệu</label></li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Lọc theo diện tích</h3>
            <ul>
              <li><input type="radio" name="area" /> <label>0 - 40 m²</label></li>
              <li><input type="radio" name="area" /> <label>40 - 60 m²</label></li>
              <li><input type="radio" name="area" /> <label>60 - 80 m²</label></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Lọc theo số phòng</h3>
            <ul>
              <li><input type="radio" name="rooms" /> <label>1 PN</label></li>
              <li><input type="radio" name="rooms" /> <label>2 PN</label></li>
              <li><input type="radio" name="rooms" /> <label>3 PN</label></li>
            </ul>
          </div>
        </aside>

        {/* Apartment List */}
        <section className="w-3/4">
          <div className="mb-4 flex space-x-4">
            <select className="border px-4 py-2 rounded">
              <option>Mức giá</option>
              <option>0 - 3 triệu</option>
              <option>3 - 5 triệu</option>
            </select>
            <select className="border px-4 py-2 rounded">
              <option>Diện tích</option>
              <option>40 - 60 m²</option>
              <option>60 - 80 m²</option>
            </select>
            <select className="border px-4 py-2 rounded">
              <option>Số phòng ngủ</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          {/* Apartment Card */}
          {Array(3).fill(0).map((_, index) => (
            <div key={index} className="flex bg-white rounded-md shadow-md p-4 mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Apartment"
                className="w-32 h-32 rounded-md"
              />
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">
                  Cho thuê căn hộ chung cư GEN.G Grandpark quận 9
                </h3>
                <p className="text-gray-500">3 PN • 2 WC • Chung cư</p>
                <p className="text-red-500 font-bold">3,5 triệu/tháng</p>
                <p className="text-gray-600">81 m²</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-6 p-6">
        <div className="container mx-auto flex justify-between">
          <div>
            <h3 className="text-yellow-500 font-bold mb-2">GEN GROUP</h3>
            <p>Địa chỉ: UIT</p>
            <p>SĐT: +84 44444444</p>
            <p>Email: gen@gmail.com</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Liên kết</h4>
            <ul>
              <li>Trang chủ</li>
              <li>Căn hộ</li>
              <li>Thông tin</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
