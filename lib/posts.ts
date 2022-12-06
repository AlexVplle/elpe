import { Clothes, PrismaClient } from '@prisma/client'


let prisma : PrismaClient | null = null;
if (prisma == null)
	prisma = new PrismaClient()

export async function getAllClothes() {
	return await (prisma as PrismaClient).clothes.findMany()
}

export async function getOneClothes(hrefParam: string) {
	const clothesRequested = await (prisma as PrismaClient).clothes.findFirst({ where : { href: `/${hrefParam}` } }) as Clothes
	return clothesRequested
}
