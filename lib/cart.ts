import { Clothes } from "@prisma/client";
import ContentInCart from '../interfacesAndTypes/contentInCart'

export const getCart = () : Array<ContentInCart> => {
	const cartArrayString : string | null = localStorage.getItem('cart')
	if (cartArrayString === null)
		return []
	else
		return JSON.parse(cartArrayString)
}

export const addItem = ({ name, src, href, price } : Clothes, taille : 'S' | 'M' | 'L' | 'XL' | 'XXL', quantity : number) : void => {
	const newContent : ContentInCart = {
		name : name,
		taille : taille,
		quantity : quantity,
		src : `/clothes/${src[0]}`,
		href : href,
		price : price,
	}
	let cartContent : Array<ContentInCart>
	const cartContentString : string | null = localStorage.getItem('cart')
	if (cartContentString !== null) {
		cartContent = JSON.parse(cartContentString)
		let isAdd : boolean = false;
		cartContent.forEach((clothes : ContentInCart) => {
			if (newContent.name == clothes.name && newContent.taille == clothes.taille && !isAdd) {
				clothes.quantity += newContent.quantity
				isAdd = true
			}
		})
		if (!isAdd)
			cartContent.push(newContent)
	}
	else
		cartContent = [newContent]
	localStorage.setItem('cart', JSON.stringify(cartContent))
 }

export const deleteItem = (name : string, taille : string) : Array<ContentInCart> => {
	const cartArray : Array<ContentInCart> = getCart()
	const newCart : Array<ContentInCart> = cartArray.filter(item => item.name != name || item.taille != taille);
	localStorage.setItem('cart', JSON.stringify(newCart))
	return newCart
}
 
export const getTotalPrice = (cartArray : Array<ContentInCart>) : number => {
	let sum : number = 0
	for (let i : number = 0; i < cartArray.length; i++)
		sum += cartArray[i].quantity * cartArray[i].price
	return Math.round(sum * 100) / 100
}
