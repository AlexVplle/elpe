import { NextRouter, useRouter } from 'next/router'
import { MouseEventHandler } from 'react'

import BlueButton from "./BlueButton"

import ContentInCart from '../interfacesAndTypes/contentInCart'

export default function Checkout({ cart } : { cart : Array<ContentInCart> }) {
	const router : NextRouter = useRouter()
	const redirectToCheckout : MouseEventHandler<HTMLButtonElement> = () => { 
		fetch(`http://localhost:3001/api/createCheckout`,
		{
			method: 'POST',
			body: JSON.stringify({ cart })
		})
		.then((res : Response) => res.json())
		.then((data) => router.push(data.session.url))
	}
	return <BlueButton onClick={redirectToCheckout} content='PAIEMENT'></BlueButton>
}
