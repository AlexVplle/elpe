import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'

import { useCustomizationTee } from "../context/customProvider";

import { LogoArrayCustom } from '../lib/logoForCustom';

import { ModelTee } from '../interfacesAndTypes/model'
import CustomizationContext from '../interfacesAndTypes/CustomizationContext';

export default function Model() {
  const { nodes, materials } = useGLTF('/mascot/ELPEMascotTee.gltf') as unknown as ModelTee
  const customization : CustomizationContext | null = useCustomizationTee()
  if (customization === null)
  	return <></>
  const { color, logo, logoColor } = customization
  const arrayLogo : Array<JSX.Element> = [
      <mesh geometry={nodes.Classic_logo.geometry} material={materials.Material_classic_logo} position={[-0.83, 5.75, 1.22]} rotation={[1.54, 0, 0]} scale={[6.1, 1.05, 6.1]} key={0}/>,
      <mesh geometry={nodes.World_logo.geometry} material={materials.Material_world_logo} position={[-0.62814933, 6.36764336, 0.80209541]} rotation={[1.13492856, 0, 0]} scale={[0.01429086, 0.07552702, 0.01445073]} key={1}/>,
      <mesh geometry={nodes.Spiral_logo.geometry} material={materials.Material_spiral_logo} position={[-0.54, 6.01, 3.28]} rotation={[1.56, 0, 0]} scale={[3.2, 1.02, 3.2]} key={2}/>,
      <mesh geometry={nodes.Flower_logo.geometry} material={materials.Material_flower_logo} position={[-0.52, 6.18, 1.3]} rotation={[1.46, 0, 0]} scale={[1.01, 1.05, 1.03]} key={3}/>
  ]
  materials.Material_tee.color = new THREE.Color(color.color)
  materials.Material_classic_logo.color = new THREE.Color(logoColor.color)
  materials.Material_world_logo.color = new THREE.Color(logoColor.color)
  materials.Material_spiral_logo.color = new THREE.Color(logoColor.color)
  materials.Material_flower_logo.color = new THREE.Color(logoColor.color)
  return (
    <group>
      <mesh geometry={nodes.Ear_ring.geometry} material={materials.Material_ear_ring} position={[-0.68, 8.23, 0.05]} rotation={[-0.28, -0.71, -2.08]} />
      <mesh geometry={nodes.Hand.geometry} material={materials.Material_skin} position={[-1.75, 4.93, -0.2]} rotation={[0.07, -1.26, 0]} />
      <mesh geometry={nodes.Ear.geometry} material={materials.Material_skin} position={[-0.01, 8.41, 0.05]} rotation={[0.07, 0, 0]} />
      <mesh geometry={nodes.Neck.geometry} material={materials.Material_skin} position={[-0.01, 7.73, -0.03]} rotation={[0.07, 0, 0]} />
      <group position={[-0.01, 8.63, 0.3]} rotation={[0.07, 0, 0]} scale={5.14}>
        <mesh geometry={nodes.Mesh_3.geometry} material={materials.Material_skin2} />
        <mesh geometry={nodes.Mesh_4.geometry} material={materials.material_head} />
      </group>
      <mesh geometry={nodes.Tee.geometry} material={materials.Material_tee} position={[-0.02, 5.96, -0.03]} rotation={[Math.PI / 2, 0, 0]} />
      <group position={[0.94, -0.07, 0.11]} rotation={[1.64, 0, -0.38]} scale={0.47}>
        <mesh geometry={nodes.Geometry_shoes.geometry} material={materials.Material_shoe2} />
        <mesh geometry={nodes.Geometry_shoes_1.geometry} material={materials.Material_shoe1} />
        <mesh geometry={nodes.Geometry_shoes_2.geometry} material={materials.Material_shoe_laces} />
        <mesh geometry={nodes.Geometry_shoes_3.geometry} material={materials.Material_shoe3} />
      </group>
      <mesh geometry={nodes.Pants.geometry} material={materials.Material_pants} position={[-0.02, 4.85, 0.13]} rotation={[0.07, 0, 0]} scale={5.19} />
	 {arrayLogo[LogoArrayCustom.findIndex((value) => value.name == logo.name)]}
    </group>
  )
}

useGLTF.preload('/mascot/ELPEMascotTee.gltf')
