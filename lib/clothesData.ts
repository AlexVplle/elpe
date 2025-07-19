// Données en dur pour remplacer la base de données
export interface ClothesData {
  id: string;
  name: string;
  href: string;
  src: string[];
  price: number;
  description: string[];
}

export const clothesArray: ClothesData[] = [
  {
    id: "1",
    name: "ELPE Essential Hoodie",
    href: "/essential-hoodie",
    src: ["essential/hoodieEssential.png", "essential/hoodieEssential.png"],
    price: 65.00,
    description: [
      "Hoodie essentiel ELPE en coton biologique",
      "Coupe décontractée et confortable",
      "Logo ELPE brodé"
    ]
  },
  {
    id: "2", 
    name: "ELPE Essential Tee",
    href: "/essential-tee",
    src: ["essential/teeEssential.png", "essential/teeEssential.png"],
    price: 35.00,
    description: [
      "T-shirt essentiel ELPE en coton biologique",
      "Coupe classique et confortable",
      "Logo ELPE brodé"
    ]
  },
  {
    id: "3",
    name: "ELPE Zip Hoodie",
    href: "/zip-hoodie",
    src: ["essential/zip.png", "essential/zip.png"],
    price: 75.00,
    description: [
      "Hoodie zippé ELPE en coton premium",
      "Fermeture éclair full-zip",
      "Logo ELPE brodé sur la poitrine"
    ]
  },
  {
    id: "4",
    name: "ELPE BY YOU Hoodie",
    href: "/by-you-hoodie", 
    src: ["byYou/hoodieByYou.png", "byYou/hoodieByYou.png"],
    price: 80.00,
    description: [
      "Hoodie personnalisable ELPE BY YOU",
      "Choisissez votre design et couleurs",
      "Impression haute qualité"
    ]
  },
  {
    id: "5",
    name: "ELPE BY YOU Tee",
    href: "/by-you-tee",
    src: ["byYou/teeByYou.png", "byYou/teeByYou.png"], 
    price: 45.00,
    description: [
      "T-shirt personnalisable ELPE BY YOU",
      "Choisissez votre design et couleurs",
      "Impression haute qualité"
    ]
  },
  {
    id: "6",
    name: "ELPE Cap",
    href: "/elpe-cap",
    src: ["elpeAccessories/cap/1.png", "elpeAccessories/cap/2.png", "elpeAccessories/cap/3.png"],
    price: 25.00,
    description: [
      "Casquette ELPE en coton",
      "Réglable avec fermeture à l'arrière",
      "Logo ELPE brodé"
    ]
  },
  {
    id: "7",
    name: "ELPE Custom Hoodie",
    href: "/custom-hoodie",
    src: ["byYou/hoodieByYou.png", "byYou/hoodieByYou.png"],
    price: 85.00,
    description: [
      "Hoodie entièrement personnalisable",
      "Configurateur 3D interactif",
      "Choix des couleurs et logos"
    ]
  },
  {
    id: "8",
    name: "ELPE Custom Tee", 
    href: "/custom-tee",
    src: ["byYou/teeByYou.png", "byYou/teeByYou.png"],
    price: 50.00,
    description: [
      "T-shirt entièrement personnalisable",
      "Configurateur 3D interactif", 
      "Choix des couleurs et logos"
    ]
  }
];