import React, { useEffect, useRef } from "react";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";
import BuildingSceneLayer from "@arcgis/core/layers/BuildingSceneLayer";
import Slice from "@arcgis/core/widgets/Slice";
import SlicePlane from "@arcgis/core/analysis/SlicePlane";
import LayerList from "@arcgis/core/widgets/LayerList";
import { watch } from "@arcgis/core/core/reactiveUtils";


const MapHolder = () => {
  const viewDivRef = useRef(null);

  useEffect(() => {
    let view;
    let sliceWidget;

    const initializeMap = async () => {
      const webscene = new WebScene({
        portalItem: {
          id: "c7470b0e4e4c44288cf287d658155300",
        },
      });

      view = new SceneView({
        container: viewDivRef.current,
        map: webscene,
      });

      const buildingLayer = new BuildingSceneLayer({
        url: "https://tiles.arcgis.com/tiles/V6ZHFr6zdgNZuVG0/arcgis/rest/services/BSL__4326__US_Redlands__EsriAdminBldg_PublicDemo/SceneServer",
        title: "Administration Building, Redlands - Building Scene Layer",
      });
      webscene.layers.add(buildingLayer);

      const excludedLayers = [];
      const plane = new SlicePlane({
        position: {
          latitude: 34.0600460070941,
          longitude: -117.18669237418565,
          z: 417.75,
        },
        tilt: 32.62,
        width: 29,
        height: 29,
        heading: 0.46,
      });

      let doorsLayer = null;
      let sliceTiltEnabled = true;

      view.ui.add("menu", "top-right");

      buildingLayer.when(() => {
        buildingLayer.allSublayers.forEach((layer) => {
          switch (layer.modelName) {
            case "FullModel":
              layer.visible = true;
              break;
            case "Overview":
            case "Rooms":
              layer.visible = false;
              break;
            case "Doors":
              doorsLayer = layer;
              excludedLayers.push(layer);
              break;
            default:
              layer.visible = true;
          }
        });

        setSliceWidget();
      });

      function setSliceWidget() {
        sliceWidget = new Slice({
          view: view,
          container: "sliceContainer",
        });
        sliceWidget.viewModel.excludedLayers.addMany(excludedLayers);
        sliceWidget.viewModel.tiltEnabled = sliceTiltEnabled;
        sliceWidget.viewModel.shape = plane;

        watch(
            () => sliceWidget.viewModel.state,
            (state) => {
              if (state === "ready") {
                document.getElementById("clearPlaneBtn").style.display = "none";
              } else {
                document.getElementById("clearPlaneBtn").style.display = "inherit";
              }
            }
          );
          
      }

      document.getElementById("resetPlaneBtn").addEventListener("click", () => {
        document.getElementById("tiltEnabled").checked = true;
        sliceTiltEnabled = true;
        sliceWidget.viewModel.tiltEnabled = sliceTiltEnabled;
        sliceWidget.viewModel.shape = plane;
      });

      document.getElementById("clearPlaneBtn").addEventListener("click", () => {
        sliceWidget.viewModel.clear();
      });

      document.getElementById("tiltEnabled").addEventListener("change", (event) => {
        sliceTiltEnabled = event.target.checked;
        sliceWidget.viewModel.tiltEnabled = sliceTiltEnabled;
      });

      document.getElementById("color").addEventListener("change", (event) => {
        if (event.target.checked) {
          doorsLayer.renderer = {
            type: "simple",
            symbol: {
              type: "mesh-3d",
              symbolLayers: [
                {
                  type: "fill",
                  material: {
                    color: "red",
                  },
                },
              ],
            },
          };
        } else {
          doorsLayer.renderer = null;
        }
      });

      const layerList = new LayerList({
        view: view,
      });
      view.ui.empty("top-left");
      view.ui.add(layerList, "top-left");
    };

    initializeMap();

    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div ref={viewDivRef}></div>
      <div id="menu" className="esri-widget">
        <input type="checkbox" id="color" />
        <label htmlFor="color"> Display all doors with a red color</label>
        <div id="sliceContainer"></div>
        <div id="sliceOptions">
          <button
            className="esri-button esri-button--secondary"
            id="resetPlaneBtn"
            type="button"
            title="Reset slice plane"
          >
            Reset slice plane
          </button>
          <button
            className="esri-button esri-button--secondary"
            id="clearPlaneBtn"
            type="button"
            title="Clear slice plane"
          >
            Clear slice
          </button>
          <input type="checkbox" id="tiltEnabled" defaultChecked />
          <label htmlFor="tiltEnabled">Allow tilt on slice plane</label>
        </div>
      </div>
    </div>
  );
};

export default MapHolder;
