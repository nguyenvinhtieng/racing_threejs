/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 public/models/Car.gltf -o src/components/Car.jsx -r public
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Car(props) {
  const { nodes, materials } = useGLTF('/models/Car.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.849, 0.596, -0.063]}>
        <mesh geometry={nodes.Cube005.geometry} material={materials.Orange} />
        <mesh geometry={nodes.Cube005_1.geometry} material={materials.DarkOrange} />
        <mesh geometry={nodes.Cube005_2.geometry} material={materials.Windows} />
        <mesh geometry={nodes.Cube005_3.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Cube005_4.geometry} material={materials.Headlights} />
        <mesh geometry={nodes.Cube005_5.geometry} material={materials.TailLights} />
      </group>
      <group position={[0.852, 0.845, -1.318]}>
        <mesh geometry={nodes.Cylinder004.geometry} material={materials.Black} />
        <mesh geometry={nodes.Cylinder004_1.geometry} material={materials.Grey} />
      </group>
      <group position={[1.569, 0.845, 1.125]}>
        <mesh geometry={nodes.Cylinder013.geometry} material={materials.Black} />
        <mesh geometry={nodes.Cylinder013_1.geometry} material={materials.Grey} />
      </group>
      <group position={[0.135, 0.845, 1.125]}>
        <mesh geometry={nodes.Cylinder014.geometry} material={materials.Black} />
        <mesh geometry={nodes.Cylinder014_1.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Car.gltf')
