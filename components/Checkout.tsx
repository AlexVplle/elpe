import { useRouter } from 'next/router'

import BlueButton from "./BlueButton";

import ContentInCart from '../interfacesAndTypes/contentInCart';
import Item from '../interfacesAndTypes/item'

export default function Checkout({ cart } : { cart : ContentInCart[] }) {
	const router = useRouter()
	const lineItems : Array<Item> = cart.map(function(item) { return { "price" : item.price_id, "quantity" : item.quantity } })
	const redirectToCheckout = () => { 
		fetch('https://www.elpe-clothing.com/api/createCheckout',
		{
			method: 'POST',
			body: JSON.stringify({ lineItems })
		})
		.then(res => res.json())
		.then(data => router.push(data.session.url)
	)}
	return <BlueButton onClick={redirectToCheckout} content="PAIEMENT"></BlueButton>
}
