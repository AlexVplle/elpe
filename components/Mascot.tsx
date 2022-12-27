import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

import { ModelType } from '../interfacesAndTypes/model'

import { useCustomization } from "../context/customProvider";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { color } = useCustomization()
  const { nodes, materials } = useGLTF("/mascot/ELPEMascot.gltf") as unknown as ModelType;
  materials.Material_hoodie.color = new THREE.Color(color.color)
  materials.Material_hood.color = new THREE.Color(color.color)
  materials.Material_hoodie_pocket.color = new THREE.Color(color.color)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ear_ring.geometry}
        material={materials.Material_ear_ring}
        position={[-0.68, 8.23, 0.24]}
        rotation={[-0.28, -0.71, -2.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hand.geometry}
        material={materials.Material_skin}
        position={[-1.75, 4.93, -0.26]}
        rotation={[0.07, -1.26, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ear.geometry}
        material={materials.Material_skin}
        position={[-0.01, 8.41, 0.24]}
        rotation={[0.07, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Neck.geometry}
        material={materials.Material_skin}
        position={[-0.01, 7.73, 0.19]}
        rotation={[0.07, 0, 0]}
      />
      <group
        position={[-0.01, 8.63, 0.49]}
        rotation={[0.07, 0, 0]}
        scale={5.14}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.Material_skin2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials.material_head}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hoodie_pocket.geometry}
        material={materials.Material_hoodie_pocket}
        position={[-0.02, 4.97, 0.99]}
        rotation={[1.64, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hood.geometry}
        material={materials.Material_hood}
        position={[0.04, 7.82, -0.15]}
        rotation={[1.64, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lace_hoodie.geometry}
        material={materials.Material_lace_hoodie}
        position={[0.02, 6.51, 0.94]}
        rotation={[1.64, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hoodie_under_shirt.geometry}
        material={materials.Material_hoodie_under_shirt}
        position={[-0.01, 7.67, 0.16]}
        rotation={[0.14, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hoodie.geometry}
        material={materials.Material_hoodie}
        position={[0.01, 5.74, 0.17]}
        rotation={[1.64, 0, 0]}
        scale={1.49}
      />
      <group
        position={[0.94, -0.07, 0.11]}
        rotation={[1.64, 0, -0.38]}
        scale={0.47}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tênis_Plane005.geometry}
          material={materials.Material_shoe2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tênis_Plane005_1.geometry}
          material={materials.Material_shoe1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tênis_Plane005_2.geometry}
          material={materials.Material_shoe_laces}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tênis_Plane005_3.geometry}
          material={materials.Material_shoe3}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pants.geometry}
        material={materials.Material_pants}
        position={[-0.02, 4.85, 0.13]}
        rotation={[0.07, 0, 0]}
        scale={5.19}
      />
    </group>
  );
}

useGLTF.preload("/mascot/ELPEMascot.gltf");
