import { NextRouter, useRouter } from 'next/router'
import { MouseEventHandler, useState } from 'react'

import BlueButton from "./BlueButton"

import ContentInCart from '../interfacesAndTypes/contentInCart'

export default function Checkout({ cart } : { cart : Array<ContentInCart> }) {
	const [isClicked, setClicked] = useState<boolean>(false)
	const router : NextRouter = useRouter()
	const redirectToCheckout : MouseEventHandler<HTMLButtonElement> = () => { 
		setClicked(true)
		fetch('/api/createCheckout',
		{
			method: 'POST',
			body: JSON.stringify({ cart })
		})
		.then((res : Response) => res.json())
		.then((data) => router.push(data.session.url))
	}
	return <BlueButton onClick={redirectToCheckout} content={isClicked ? "VEUILLEZ PATIENTER..." : "PAIEMENT"}></BlueButton>
}
