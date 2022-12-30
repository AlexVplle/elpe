import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'

import { ModelTeeType } from '../interfacesAndTypes/modelHoodie'

export default function ModelTee(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/mascot/ELPEMascotTee.gltf') as unknown as ModelTeeType
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Ear_ring.geometry} material={materials.Material_ear_ring} position={[-0.68, 8.23, 0.24]} rotation={[-0.28, -0.71, -2.08]} />
      <mesh geometry={nodes.Hand.geometry} material={materials.Material_skin} position={[-1.75, 4.93, -0.26]} rotation={[0.07, -1.26, 0]} />
      <mesh geometry={nodes.Ear.geometry} material={materials.Material_skin} position={[-0.01, 8.41, 0.24]} rotation={[0.07, 0, 0]} />
      <mesh geometry={nodes.Neck.geometry} material={materials.Material_skin} position={[-0.01, 7.73, 0.19]} rotation={[0.07, 0, 0]} />
      <group position={[-0.01, 8.63, 0.49]} rotation={[0.07, 0, 0]} scale={5.14}>
        <mesh geometry={nodes.Geometry_head.geometry} material={materials.Material_skin2} />
        <mesh geometry={nodes.Geometry_head_1.geometry} material={materials.material_head} />
      </group>
      <mesh geometry={nodes.Tee.geometry} material={materials.Material_tee} position={[-0.02, 5.96, 0.07]} rotation={[Math.PI / 2, 0, 0]} />
      <group position={[0.94, -0.07, 0.11]} rotation={[1.64, 0, -0.38]} scale={0.47}>
        <mesh geometry={nodes.Geometry_shoes.geometry} material={materials.Material_shoe2} />
        <mesh geometry={nodes.Geometry_shoes_1.geometry} material={materials.Material_shoe1} />
        <mesh geometry={nodes.Geometry_shoes_2.geometry} material={materials.Material_shoe_laces} />
        <mesh geometry={nodes.Geometry_shoes_3.geometry} material={materials.Material_shoe3} />
      </group>
      <mesh geometry={nodes.Pants.geometry} material={materials.Material_pants} position={[-0.02, 4.85, 0.13]} rotation={[0.07, 0, 0]} scale={5.19} />
      <mesh geometry={nodes.Classic_logo.geometry} material={materials.Material_classic_logo} position={[-1.15, 5.39, 1.52]} rotation={[1.54, 0, 0]} scale={[8.1, 1.05, 8.1]} />
      <mesh geometry={nodes.World_logo.geometry} material={materials.Material_world_logo} position={[-0.75, 6.11, 1.01]} rotation={[1.25, 0, 0]} scale={[0.02, 0.08, 0.02]} />
      <mesh geometry={nodes.Spiral_logo.geometry} material={materials.Material_spiral_logo} position={[-0.83, 5.62, 3.53]} rotation={[1.56, 0, 0]} scale={[4.58, 1.02, 4.58]} />
      <mesh geometry={nodes.Flower_logo.geometry} material={materials.Material_flower_logo} position={[-0.76, 5.9, 1.5]} rotation={[1.46, 0, 0]} scale={[1.4, 1.05, 1.42]} />
    </group>
  )
}

useGLTF.preload('/mascot/ELPEMascotTee.gltf')
