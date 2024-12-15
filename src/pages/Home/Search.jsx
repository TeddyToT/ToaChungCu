import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { loadModules } from "esri-loader";


const Search = () => {
  const [timKiem, setTimKiem] = useState("");
  const [ketQua, setKetQua] = useState([]);
  const [map, setMap] = useState(null);

  const danhSachChungCu = [
    { id: 1, ten: "Chung cư A", viTri: "Trung tâm", gia: 1200, lat: 10.7769, lon: 106.7009 },
    { id: 2, ten: "Chung cư B", viTri: "Ngoại ô", gia: 1500, lat: 10.8231, lon: 106.6297 },
    { id: 3, ten: "Chung cư C", viTri: "Vùng ven", gia: 1000, lat: 10.8500, lon: 106.7600 },
  ];

  const xuLyTimKiem = () => {
    const ketQuaLoc = danhSachChungCu.filter(
      (chungCu) =>
        chungCu.ten.toLowerCase().includes(timKiem.toLowerCase()) ||
        chungCu.viTri.toLowerCase().includes(timKiem.toLowerCase())
    );
    setKetQua(ketQuaLoc);
    if (map) {
      map.graphics.removeAll();
      ketQuaLoc.forEach((chungCu) => {
        map.graphics.add(
          new map.Graphic({
            geometry: {
              type: "point",
              longitude: chungCu.lon,
              latitude: chungCu.lat,
            },
            symbol: {
              type: "simple-marker",
              color: "blue",
              size: "10px",
            },
            attributes: chungCu,
            popupTemplate: {
              title: chungCu.ten,
              content: `Vị trí: ${chungCu.viTri}<br>Giá: $${chungCu.gia}`,
            },
          })
        );
      });
    }
  };

  useEffect(() => {
    loadModules(["esri/Map", "esri/views/MapView", "esri/Graphic"]).then(
      ([Map, MapView, Graphic]) => {
        const mapInstance = new Map({ basemap: "streets-navigation-vector" });
        const mapView = new MapView({
          container: "mapView",
          map: mapInstance,
          center: [106.7009, 10.7769],
          zoom: 12,
        });
        setMap({ mapInstance, mapView, Graphic });
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4 text-gray-800">Tìm kiếm chung cư</h1>
        <input
          type="text"
          placeholder="Nhập tên hoặc vị trí chung cư..."
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
              {ketQua.map((chungCu) => (
                <li
                  key={chungCu.id}
                  className="p-4 border border-gray-300 rounded-lg shadow-sm"
                >
                  <h2 className="text-lg font-semibold text-gray-700">
                    {chungCu.ten}
                  </h2>
                  <p className="text-gray-500">Vị trí: {chungCu.viTri}</p>
                  <p className="text-gray-500">Giá: ${chungCu.gia}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Không tìm thấy kết quả nào.</p>
          )}
        </div>
      </div>
      {/* <div id="mapView" className="mt-10 h-96 w-full rounded-lg shadow-lg"></div> */}
    </div>
  );
};
export default Search;
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
