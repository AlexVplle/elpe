import { NextRouter, useRouter } from 'next/router'
import { MouseEventHandler } from 'react'

import BlueButton from "./BlueButton"

import ContentInCart from '../interfacesAndTypes/contentInCart'
import Item from '../interfacesAndTypes/item'

export default function Checkout({ cart } : { cart : Array<ContentInCart> }) {
	const router : NextRouter = useRouter()
	const lineItems : Array<Item> = cart.map(function(item) { return { 'price' : item.price_id, 'quantity' : item.quantity } })
	const redirectToCheckout : MouseEventHandler<HTMLButtonElement> = () => { 
		fetch('https://www.elpe-clothing.com/api/createCheckout',
		{
			method: 'POST',
			body: JSON.stringify({ lineItems })
		})
		.then((res : Response) => res.json())
		.then((data) => router.push(data.session.url)
	)}
	return <BlueButton onClick={redirectToCheckout} content='PAIEMENT'></BlueButton>
}
