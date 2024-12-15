import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { loadModules } from "esri-loader";
import "./index.css";

const ChungCuDetails = ({ chungCu }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">{chungCu.ten}</h2>
    <p className="text-gray-600 mb-2">Vị trí: {chungCu.viTri}</p>
    <p className="text-gray-600 mb-2">Giá: ${chungCu.gia}</p>
    <p className="text-gray-600">Mô tả: Đây là một chung cư cao cấp với đầy đủ tiện nghi.</p>
  </div>
);

const App = () => {
  const [selectedChungCu, setSelectedChungCu] = useState(null);
  const [map, setMap] = useState(null);

  const danhSachChungCu = [
    { id: 1, ten: "Chung cư A", viTri: "Trung tâm", gia: 1200, lat: 10.7769, lon: 106.7009 },
    { id: 2, ten: "Chung cư B", viTri: "Ngoại ô", gia: 1500, lat: 10.8231, lon: 106.6297 },
    { id: 3, ten: "Chung cư C", viTri: "Vùng ven", gia: 1000, lat: 10.8500, lon: 106.7600 },
  ];

  useEffect(() => {
    loadModules(["esri/Map", "esri/views/MapView", "esri/Graphic", "esri/layers/GraphicsLayer"]).then(
      ([Map, MapView, Graphic, GraphicsLayer]) => {
        const mapInstance = new Map({ basemap: "streets-navigation-vector" });
        const graphicsLayer = new GraphicsLayer();
        mapInstance.add(graphicsLayer);

        const mapView = new MapView({
          container: "mapView",
          map: mapInstance,
          center: [106.7009, 10.7769],
          zoom: 12,
        });

        danhSachChungCu.forEach((chungCu) => {
          const pointGraphic = new Graphic({
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
          });

          pointGraphic.popupTemplate = {
            title: chungCu.ten,
            content: [
              {
                type: "fields",
                fieldInfos: [
                  { fieldName: "viTri", label: "Vị trí" },
                  { fieldName: "gia", label: "Giá" },
                ],
              },
            ],
          };

          graphicsLayer.add(pointGraphic);
          pointGraphic.on("click", () => setSelectedChungCu(chungCu));
        });

        setMap(mapView);
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 p-5">
        {selectedChungCu ? (
          <ChungCuDetails chungCu={selectedChungCu} />
        ) : (
          <div className="text-gray-500 text-center p-6">
            <p>Chọn một chung cư trên bản đồ để xem thông tin chi tiết.</p>
          </div>
        )}
      </div>
      <div id="mapView" className="w-full md:w-2/3 h-screen"></div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
