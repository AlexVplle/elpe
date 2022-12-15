import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Ear_ring: THREE.Mesh;
    Hand: THREE.Mesh;
    Ear: THREE.Mesh;
    Neck: THREE.Mesh;
    Mesh003: THREE.Mesh;
    Mesh003_1: THREE.Mesh;
    Retopo_Hoodie_Pocket_lo: THREE.Mesh;
    Retopo_Hoodie_Hood_lo: THREE.Mesh;
    Hoodie_Tassel1_lo: THREE.Mesh;
    Circle: THREE.Mesh;
    Retopo_Hoodie_lo002: THREE.Mesh;
    Tênis_Plane005_1: THREE.Mesh;
    Tênis_Plane005_2: THREE.Mesh;
    Tênis_Plane005_3: THREE.Mesh;
    Tênis_Plane005_4: THREE.Mesh;
    Circle001: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    Skin: THREE.MeshStandardMaterial;
    ["Skin.003"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Hoodie Pocket"]: THREE.MeshStandardMaterial;
    ["Hoodie  - Secondary"]: THREE.MeshStandardMaterial;
    ["Hoodie - Tassel"]: THREE.MeshStandardMaterial;
    ["Hoodie Under shirt"]: THREE.MeshStandardMaterial;
    Hoodie: THREE.MeshStandardMaterial;
    ["Shoe 2"]: THREE.MeshStandardMaterial;
    ["Shoe 1"]: THREE.MeshStandardMaterial;
    ["Shoe laces"]: THREE.MeshStandardMaterial;
    Shoe: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/mascot/ELPEMascot.gltf") as unknown as GLTFResult;
  const jeanTexture = useLoader(TextureLoader, '/mascot/texture/jeanTexture.jpg')
  materials["Hoodie  - Secondary"].color = new THREE.Color(0x8638c6)
  materials["Hoodie Pocket"].color = new THREE.Color(0x8638c6)
  materials.Hoodie.color = new THREE.Color(0x8638c6)
  materials["Material.002"].color = new THREE.Color(0x425d8c)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ear_ring.geometry}
        material={materials["Material.001"]}
        position={[-0.68, 8.22, 0.11]}
        rotation={[-0.35, -0.71, -2.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hand.geometry}
        material={materials.Skin}
        position={[-1.75, 4.9, -0.16]}
        rotation={[0, -1.26, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ear.geometry}
        material={materials.Skin}
        position={[-0.01, 8.4, 0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Neck.geometry}
        material={materials.Skin}
        position={[-0.01, 7.72, 0.09]}
      />
      <group position={[-0.01, 8.64, 0.33]} scale={5.14}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003.geometry}
          material={materials["Skin.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_1.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Retopo_Hoodie_Pocket_lo.geometry}
        material={materials["Hoodie Pocket"]}
        position={[-0.02, 5.02, 1.08]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Retopo_Hoodie_Hood_lo.geometry}
        material={materials["Hoodie  - Secondary"]}
        position={[0.04, 7.79, -0.26]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hoodie_Tassel1_lo.geometry}
        material={materials["Hoodie - Tassel"]}
        position={[0.02, 6.56, 0.93]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials["Hoodie Under shirt"]}
        position={[-0.01, 7.66, 0.07]}
        rotation={[0.07, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Retopo_Hoodie_lo002.geometry}
        material={materials.Hoodie}
        position={[0.01, 5.73, 0.21]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.49}
      />
      <group
        position={[0.94, -0.06, 0.55]}
        rotation={[Math.PI / 2, 0, -0.38]}
        scale={0.47}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tênis_Plane005_1.geometry}
          material={materials["Shoe 2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tênis_Plane005_2.geometry}
          material={materials["Shoe 1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tênis_Plane005_3.geometry}
          material={materials["Shoe laces"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tênis_Plane005_4.geometry}
          material={materials.Shoe}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials["Material.002"]}
        position={[-0.02, 4.84, 0.23]}
        scale={5.19}
      />
    </group>
  );
}

useGLTF.preload("/mascot/ELPEMascot.gltf");

