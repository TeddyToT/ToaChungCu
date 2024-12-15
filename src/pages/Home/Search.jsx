import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  const [timKiem, setTimKiem] = useState("");
  const [ketQua, setKetQua] = useState([]);

  const danhSachCanHo = [
    { id: 1, ten: "Căn hộ A", viTri: "Trung tâm", gia: 1200 },
    { id: 2, ten: "Căn hộ B", viTri: "Ngoại ô", gia: 1500 },
    { id: 3, ten: "Căn hộ C", viTri: "Vùng ven", gia: 1000 },
  ];

  const xuLyTimKiem = () => {
    const ketQuaLoc = danhSachCanHo.filter(
      (canHo) =>
        canHo.ten.toLowerCase().includes(timKiem.toLowerCase()) ||
        canHo.viTri.toLowerCase().includes(timKiem.toLowerCase())
    );
    setKetQua(ketQuaLoc);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4 text-gray-800">Tìm kiếm căn hộ</h1>
        <input
          type="text"
          placeholder="Nhập tên hoặc vị trí căn hộ..."
          value={timKiem}
          onChange={(e) => setTimKiem(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={xuLyTimKiem}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Tìm kiếm
        </button>

        <div className="mt-6">
          {ketQua.length > 0 ? (
            <ul className="space-y-4">
              {ketQua.map((canHo) => (
                <li
                  key={canHo.id}
                  className="p-4 border border-gray-300 rounded-lg shadow-sm"
                >
                  <h2 className="text-lg font-semibold text-gray-700">
                    {canHo.ten}
                  </h2>
                  <p className="text-gray-500">Vị trí: {canHo.viTri}</p>
                  <p className="text-gray-500">Giá: ${canHo.gia}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Không tìm thấy kết quả nào.</p>
          )}
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
