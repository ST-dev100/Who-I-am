import React, { useRef, useState , Suspense, useEffect } from "react";
import { Canvas, useFrame ,  useLoader, useThree } from "@react-three/fiber";
import {OrbitControls,useAnimations,useFBX,Preload} from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { PointLight, Scene } from "three";

const Earth = () => {
  return (
    
       <Canvas  
          shadows
          dpr={[1, 2]}
          camera={{ position: [1, 1, 8], fov: 8 }}
          gl={{ preserveDrawingBuffer: true }}>
          <ambientLight color={"white"} intensity={0.01} />
          <hemisphereLight groundColor={'black'} intensity={1}/>
          <pointLight intensity={1}/>
            <OrbitControls enableZoom={false} />
            <NewMapModel/>
           
            
      </Canvas>

    
  )
}

const NewMapModel = (props) => {
  const group = useRef()
  const { scene } =  useLoader(GLTFLoader,'public/desktop_pc/desktop_computer.glb');
  scene.scale.x = 1.2
  scene.scale.y = 1.2
  scene.scale.z = 1.2

  console.log(scene.position)

  return (
    <Suspense fallback={null}>
      <group >
        <primitive object={scene} position={[1,0,0]} rotation={[-0.01,-0.2,-0.1]}/>
      </group>
    </Suspense>  
  );
};
export default Earth