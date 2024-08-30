import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import "./style.css";
import MacContainer from './MacContainer';

const App = () => {
  return (
    <div className='w-full h-screen relative'>
      <div className='absolute flex flex-col items-center top-40 left-1/2 -translate-x-1/2 text-white font-[Helvetica_Now_Display]'>
        <h3 className='text-7xl tracking-tighter font-bold'>MacBook Pro.</h3>
        <h5 className='text-lg'>Oh So Pro!</h5>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <OrbitControls />
        <Environment
          files="https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;