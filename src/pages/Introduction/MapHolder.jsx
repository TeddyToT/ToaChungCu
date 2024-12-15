import {React} from "react";

import { ArcgisScene } from "@arcgis/map-components-react";
import {defineCustomElements as defineMapElements} from "@arcgis/map-components/dist/loader";


defineMapElements(window, {
    resourcesUrl: "https://js.arcgis.com/4.30/assets",
});

const MapHolder = () => {
    return (
        <div className="mt-8 bg-white p-4 rounded shadow">

            <ArcgisScene
                center={[106.660172, 10.762622]}
                zoom={15}
                camera={{
                    position: [106.660172, 10.762622, 1000], // Longitude, Latitude, and altitude for 3D perspective
                    tilt: 70, // Tilt angle of the camera
                    heading: 0, // Camera rotation around the vertical axis
                }}
            >
            </ArcgisScene>

            <p className="text-xl font-bold mb-4 mt-16">
                Mô hình tổng thể toà nhà
            </p>

        </div>
    );
};

export default MapHolder;