import * as THREE from "three";
import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Ear_ring: THREE.Mesh;
    Hand: THREE.Mesh;
    Ear: THREE.Mesh;
    Neck: THREE.Mesh;
    Maillage_3: THREE.Mesh;
    Maillage_4: THREE.Mesh;
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
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/ELPEMascot.gtlf") as unknown as GLTFResult;
  const textureJean = useTexture("texture/textureJean.jpg")
  const firstLogo = useTexture("texture/logo1.png")
  const secondLogo = useTexture("texture/logo2.png")
  const thirdLogo = useTexture("texture/logo3.png")
  const fourthLogo = useTexture("texture/logo4.png")
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Ear_ring.geometry}
        material={materials["Material.001"]}
        position={[-0.68, 8.22, 0.11]}
        rotation={[-0.35, -0.71, -2.08]}
      />
      <mesh
        geometry={nodes.Hand.geometry}
        material={materials.Skin}
        position={[-1.75, 4.9, -0.16]}
        rotation={[0, -1.26, 0]}
      />
      <mesh
        geometry={nodes.Ear.geometry}
        material={materials.Skin}
        position={[-0.01, 8.4, 0.09]}
      />
      <mesh
        geometry={nodes.Neck.geometry}
        material={materials.Skin}
        position={[-0.01, 7.72, 0.09]}
      />
      <group position={[-0.01, 8.64, 0.33]} scale={5.14}>
        <mesh
          geometry={nodes.Maillage_3.geometry}
          material={materials["Skin.003"]}
        />
        <mesh
          geometry={nodes.Maillage_4.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <mesh
        geometry={nodes.Retopo_Hoodie_Pocket_lo.geometry}
        position={[-0.02, 5.02, 1.08]}
        rotation={[Math.PI / 2, 0, 0]}
      >
	 </mesh>
      <mesh
        geometry={nodes.Retopo_Hoodie_Hood_lo.geometry}
        position={[0.04, 7.79, -0.26]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Hoodie_Tassel1_lo.geometry}
        position={[0.02, 6.56, 0.93]}
        rotation={[Math.PI / 2, 0, 0]}
      >
	 </mesh>
      <mesh
        geometry={nodes.Circle.geometry}
        position={[-0.01, 7.66, 0.07]}
        rotation={[0.07, 0, 0]}
      >
	 	<meshBasicMaterial map={firstLogo} />
	 </mesh>
      <mesh
        geometry={nodes.Retopo_Hoodie_lo002.geometry}
        position={[0.01, 5.73, 0.21]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.49}
      >
	 	<meshBasicMaterial map={firstLogo} />
	 </mesh>
      <group
        position={[0.94, -0.06, 0.55]}
        rotation={[Math.PI / 2, 0, -0.38]}
        scale={0.47}
      >
        <mesh
          geometry={nodes.Tênis_Plane005_1.geometry}
          material={materials["Shoe 2"]}
        />
        <mesh
          geometry={nodes.Tênis_Plane005_2.geometry}
          material={materials["Shoe 1"]}
        />
        <mesh
          geometry={nodes.Tênis_Plane005_3.geometry}
          material={materials["Shoe laces"]}
        />
        <mesh
          geometry={nodes.Tênis_Plane005_4.geometry}
          material={materials.Shoe}
        />
      </group>
      <mesh
        geometry={nodes.Circle001.geometry}
	   material={materials["Material.001"]}
        position={[-0.02, 4.84, 0.23]}
        scale={5.19}
      >
	 	<meshBasicMaterial attach={"material"} color={"#FF0000"}/>
	 </mesh>
    </group>
  );
}

useGLTF.preload("/ELPEMascot.gtlf");
