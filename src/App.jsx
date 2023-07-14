import React, { Suspense } from 'react'
import { useMemo } from 'react';
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { Physics } from '@react-three/rapier';
import { KeyboardControls, Loader, useProgress } from '@react-three/drei';

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

export default function App() {

  const map = useMemo( () => [
    { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
    { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
    { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
    { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    { name: Controls.jump, keys: ["Space"] },
  ],[]);

  const { progress } = useProgress();

  return (

    <KeyboardControls map={map}>
      <Canvas shadows camera={ { fov: 100, near: 0.1, far: 200, position: [ 4, 2, 6 ] } } >
        <color attach="background" args={["#e3daf7"]} />
        <Suspense>
          <Physics>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
      <Loader />
      {/* {progress === 100 && <Menu />} */}
      {/* <Menu /> */}
    </KeyboardControls>
  )
}
