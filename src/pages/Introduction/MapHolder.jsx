import React, { useEffect, useRef } from "react";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";
import BuildingSceneLayer from "@arcgis/core/layers/BuildingSceneLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import esriRequest from "@arcgis/core/request";


const MapHolder = () => {
  const viewDivRef = useRef(null);

  useEffect(() => {
    let view;

    const initializeMap = async () => {
      const webscene = new WebScene({
        portalItem: {
          id: "c7470b0e4e4c44288cf287d658155300",
        },
      });

      view = new SceneView({
        container: viewDivRef.current,
        map: webscene,
        // camera: {
        //   position: [106.720264, 10.786162, 300], // Long, Lat, Elevation
        //   heading: 0, // Camera heading
        //   tilt: 75, // Camera tilt
        // },
      });

      const buildingLayer = new BuildingSceneLayer({
        url: "https://tiles.arcgis.com/tiles/V6ZHFr6zdgNZuVG0/arcgis/rest/services/BSL__4326__US_Redlands__EsriAdminBldg_PublicDemo/SceneServer",
        title: "Administration Building, Redlands - Building Scene Layer",
      });
      webscene.layers.add(buildingLayer);

      var createGraphic = function(data) {
        return new Graphic({
          geometry : data,
          symbol : data.symbol,
          attributes : data,
          popupTemplate : data.popupTemplate
        });
      };

      const json_options = {
        query : {
          f : "json"
        },
        responseType : "json"
      };

      esriRequest("/data.json", json_options).then(function(response) {
        console.log(response);
        var graphicLayer = new GraphicsLayer();
        response.data.forEach(function(feature) {
          graphicLayer.add(createGraphic(feature));
        });
        view.map.add(graphicLayer);
      });
    };

    


    initializeMap();

    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div ref={viewDivRef}></div>
    </div>
  );
};

export default MapHolder;
