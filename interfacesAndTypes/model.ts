import { GLTF } from "three-stdlib";

export type ModelType = GLTF & {
  nodes: {
    Ear_ring: THREE.Mesh;
    Hand: THREE.Mesh;
    Ear: THREE.Mesh;
    Neck: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube005_1: THREE.Mesh;
    Hoodie_pocket: THREE.Mesh;
    Hood: THREE.Mesh;
    Lace_hoodie: THREE.Mesh;
    Hoodie_under_shirt: THREE.Mesh;
    Hoodie: THREE.Mesh;
    Tênis_Plane005: THREE.Mesh;
    Tênis_Plane005_1: THREE.Mesh;
    Tênis_Plane005_2: THREE.Mesh;
    Tênis_Plane005_3: THREE.Mesh;
    Pants: THREE.Mesh;
  }
  materials: {
    Material_ear_ring: THREE.MeshStandardMaterial
    Material_skin: THREE.MeshStandardMaterial
    Material_skin2: THREE.MeshStandardMaterial
    material_head: THREE.MeshStandardMaterial
    Material_hoodie_pocket: THREE.MeshStandardMaterial
    Material_hood: THREE.MeshStandardMaterial
    Material_lace_hoodie: THREE.MeshStandardMaterial
    Material_hoodie_under_shirt: THREE.MeshStandardMaterial
    Material_hoodie: THREE.MeshStandardMaterial
    Material_shoe2: THREE.MeshStandardMaterial
    Material_shoe1: THREE.MeshStandardMaterial
    Material_shoe_laces: THREE.MeshStandardMaterial
    Material_shoe3: THREE.MeshStandardMaterial
    Material_pants: THREE.MeshStandardMaterial
  }
}
