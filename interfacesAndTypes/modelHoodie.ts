import { GLTF } from "three-stdlib";

export type ModelHoodieType = GLTF & {
  nodes: {
    Ear_ring: THREE.Mesh;
    Hand: THREE.Mesh;
    Ear: THREE.Mesh;
    Neck: THREE.Mesh;
    Geometry_head: THREE.Mesh;
    Geometry_head_1: THREE.Mesh;
    Hoodie_pocket: THREE.Mesh;
    Hood: THREE.Mesh;
    Lace_hoodie: THREE.Mesh;
    Hoodie_under_shirt: THREE.Mesh;
    Hoodie: THREE.Mesh;
    Geometry_shoes: THREE.Mesh;
    Geometry_shoes_1: THREE.Mesh;
    Geometry_shoes_2: THREE.Mesh;
    Geometry_shoes_3: THREE.Mesh;
    Pants: THREE.Mesh;
    Classic_logo: THREE.Mesh;
    World_logo: THREE.Mesh;
    Spiral_logo: THREE.Mesh;
    Flower_logo: THREE.Mesh;
  };
  materials: {
    Material_ear_ring: THREE.MeshStandardMaterial;
    Material_skin: THREE.MeshStandardMaterial;
    Material_skin2: THREE.MeshStandardMaterial;
    material_head: THREE.MeshStandardMaterial;
    Material_hoodie_pocket: THREE.MeshStandardMaterial;
    Material_hood: THREE.MeshStandardMaterial;
    Material_lace_hoodie: THREE.MeshStandardMaterial;
    Material_hoodie_under_shirt: THREE.MeshStandardMaterial;
    Material_hoodie: THREE.MeshStandardMaterial;
    Material_shoe2: THREE.MeshStandardMaterial;
    Material_shoe1: THREE.MeshStandardMaterial;
    Material_shoe_laces: THREE.MeshStandardMaterial;
    Material_shoe3: THREE.MeshStandardMaterial;
    Material_pants: THREE.MeshStandardMaterial;
    Material_classic_logo: THREE.MeshStandardMaterial;
    Material_world_logo: THREE.MeshStandardMaterial;
    Material_spiral_logo: THREE.MeshStandardMaterial;
    Material_flower_logo: THREE.MeshStandardMaterial;
  };
};

export type ModelTeeType = GLTF & {
  nodes: {
    Ear_ring: THREE.Mesh
    Hand: THREE.Mesh
    Ear: THREE.Mesh
    Neck: THREE.Mesh
    Geometry_head: THREE.Mesh
    Geometry_head_1: THREE.Mesh
    Tee: THREE.Mesh
    Geometry_shoes: THREE.Mesh
    Geometry_shoes_1: THREE.Mesh
    Geometry_shoes_2: THREE.Mesh
    Geometry_shoes_3: THREE.Mesh
    Pants: THREE.Mesh
    Classic_logo: THREE.Mesh
    World_logo: THREE.Mesh
    Spiral_logo: THREE.Mesh
    Flower_logo: THREE.Mesh
  }
  materials: {
    Material_ear_ring: THREE.MeshStandardMaterial
    Material_skin: THREE.MeshStandardMaterial
    Material_skin2: THREE.MeshStandardMaterial
    material_head: THREE.MeshStandardMaterial
    Material_tee: THREE.MeshStandardMaterial
    Material_shoe2: THREE.MeshStandardMaterial
    Material_shoe1: THREE.MeshStandardMaterial
    Material_shoe_laces: THREE.MeshStandardMaterial
    Material_shoe3: THREE.MeshStandardMaterial
    Material_pants: THREE.MeshStandardMaterial
    Material_classic_logo: THREE.MeshStandardMaterial
    Material_world_logo: THREE.MeshStandardMaterial
    Material_spiral_logo: THREE.MeshStandardMaterial
    Material_flower_logo: THREE.MeshStandardMaterial
  }
}
