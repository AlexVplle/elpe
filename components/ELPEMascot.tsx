import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'

import { useCustomization } from "../context/customProvider";

import { LogoArrayCustom } from '../lib/logoForCustom';

import { ModelType } from '../interfacesAndTypes/model'

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/mascot/ELPEMascot.gltf') as unknown as ModelType
  const { color, logo, logoColor } = useCustomization()
  const arrayLogo = [
      <mesh geometry={nodes.Classic_logo.geometry} material={materials.Material_classic_logo} position={[-1.53, 4.92, 1.52]} rotation={[1.54, 0, 0]} scale={[10.39, 1.05, 10.39]} key={0} />,
      <mesh geometry={nodes.World_logo.geometry} material={materials.Material_world_logo} position={[-1.25, 5.74, 1.38]} rotation={[1.54, 0, 0]} scale={[0.03, 0.08, 0.03]} key={1} />,
      <mesh geometry={nodes.Spiral_logo.geometry} material={materials.Material_spiral_logo} position={[-1.1, 5.31, 3.53]} rotation={[1.56, 0, 0]} scale={[6.1, 1.02, 6.1]}  key={2}/>,
      <mesh geometry={nodes.Flower_logo.geometry} material={materials.Material_flower_logo} position={[-1, 5.62, 1.5]} rotation={[1.46, 0, 0]} scale={[1.82, 1.05, 1.83]} key={3} />
  ]
  materials.Material_hoodie.color = new THREE.Color(color.color)
  materials.Material_hood.color = new THREE.Color(color.color)
  materials.Material_hoodie_pocket.color = new THREE.Color(color.color)
  materials.Material_classic_logo.color = new THREE.Color(logoColor.color)
  materials.Material_world_logo.color = new THREE.Color(logoColor.color)
  materials.Material_spiral_logo.color = new THREE.Color(logoColor.color)
  materials.Material_flower_logo.color = new THREE.Color(logoColor.color)
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
      <mesh geometry={nodes.Hoodie_pocket.geometry} material={materials.Material_hoodie_pocket} position={[-0.02, 4.97, 0.99]} rotation={[1.64, 0, 0]} />
      <mesh geometry={nodes.Hood.geometry} material={materials.Material_hood} position={[0.04, 7.82, -0.15]} rotation={[1.64, 0, 0]} />
      <mesh geometry={nodes.Lace_hoodie.geometry} material={materials.Material_lace_hoodie} position={[0.02, 6.51, 0.94]} rotation={[1.64, 0, 0]} />
      <mesh geometry={nodes.Hoodie_under_shirt.geometry} material={materials.Material_hoodie_under_shirt} position={[-0.01, 7.67, 0.16]} rotation={[0.14, 0, 0]} />
      <mesh geometry={nodes.Hoodie.geometry} material={materials.Material_hoodie} position={[0.01, 5.74, 0.17]} rotation={[1.64, 0, 0]} scale={1.49} />
      <group position={[0.94, -0.07, 0.11]} rotation={[1.64, 0, -0.38]} scale={0.47}>
        <mesh geometry={nodes.Geometry_shoes.geometry} material={materials.Material_shoe2} />
        <mesh geometry={nodes.Geometry_shoes_1.geometry} material={materials.Material_shoe1} />
        <mesh geometry={nodes.Geometry_shoes_2.geometry} material={materials.Material_shoe_laces} />
        <mesh geometry={nodes.Geometry_shoes_3.geometry} material={materials.Material_shoe3} />
      </group>
      <mesh geometry={nodes.Pants.geometry} material={materials.Material_pants} position={[-0.02, 4.85, 0.13]} rotation={[0.07, 0, 0]} scale={5.19} />
	 {arrayLogo[LogoArrayCustom.findIndex((value) => value.logo == logo.logo)]}
    </group>
  )
}

useGLTF.preload('/mascot/ELPEMascot.gltf')
