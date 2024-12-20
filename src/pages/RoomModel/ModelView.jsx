import React, { useRef, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from "@react-three/drei";

const ModelView = () => {
    const model = useGLTF("/model/room.glb");

    return (
        <>
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full h-[700px]">
                <Canvas
                    frameloop="demand"
                    orthographic
                    camera={{
                        position: [10, 10, 10],
                        zoom: 70,
                        near: 0.1,
                        far: 200,
                    }}
                >
                    <OrbitControls 
                        autoRotate 
                        enableZoom={false} 
                        maxPolarAngle={Math.PI / 4} 
                        minPolarAngle={Math.PI / 4} 
                        enablePan={false} 
                    />
                    <primitive object={model.scene} scale={1} />
                    <ambientLight intensity={1} />
                    <directionalLight 
                        intensity={1} 
                        position={[10, 10, 10]} 
                        castShadow 
                    />
                </Canvas>
            </div>
        </>
    );
};

export default ModelView;
