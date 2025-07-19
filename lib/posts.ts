import { clothesArray, ClothesData } from './clothesData'

export async function getAllClothes(): Promise<ClothesData[]> {
	return clothesArray
}

export async function getOneClothes(hrefParam: string): Promise<ClothesData | null> {
	return clothesArray.find(clothes => clothes.href === `/${hrefParam}`) || null
}
