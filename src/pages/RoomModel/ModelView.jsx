import React, { useRef, useState } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ModelView = () => {
  const [modalLoaded, setModalLoaded] = useState(false);
  const modalRef = useRef();

  // Sử dụng useLoader để load file .jbx
  const gltf = useLoader(GLTFLoader, "/path/to/your/modal.jbx");

  // Callback khi file đã được load
  const onModalLoaded = () => {
    setModalLoaded(true);
  };

  return (
    <>
      {modalLoaded && (
        <>
          {/* Sử dụng OrbitControls để có thể quay vật thể */}
          <OrbitControls
            enableDamping
            dampingFactor={0.5}
            enableZoom={false}
            ref={modalRef}
          />
          {/* Hiển thị vật thể */}
          <primitive object={gltf.scene} onReady={onModalLoaded} />
        </>
      )}
    </>
  );
};

export default ModelView;
