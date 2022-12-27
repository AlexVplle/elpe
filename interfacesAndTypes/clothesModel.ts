import { Prisma } from "@prisma/client";

export default interface ClothesModel {
    id: string,
    name: string,
    href: string,
    src: Array<string>,
    price_id: Prisma.JsonArray,
    price: number,
    width: number,
    height: number,
    alt: string,
    home: boolean,
    description: Array<string>
}
