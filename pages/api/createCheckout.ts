import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from 'stripe'
import contentInCart from "../../interfacesAndTypes/contentInCart"

const stripeAPI : string = process.env.STRIPE_SECRET_KEY as string
// @ts-ignore
const stripe = new Stripe(stripeAPI, { apiVersion: '2022-11-15'})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { cart } : { cart : Array<contentInCart> }= JSON.parse(req.body)
	// const lineItems : Array<{ price: string, quantity: number}> = await Promise.all(cart.map(async ({ name, price, quantity, taille }) => {
	// 	const productFound = await stripe.products.search({
	// 		query:`name~'${name} TAILLE ${taille}'`
	// 	})
	// 	const { default_price } = productFound.data[0]
	// 		return { price: default_price as string, quantity: quantity}
	// }))
	// const session : Stripe.Response<Stripe.Checkout.Session> = await stripe.checkout.sessions.create({
	// 	mode: 'payment',
	// 	allow_promotion_codes : true,
	// 	shipping_address_collection: {allowed_countries: ['FR', 'DE', 'AR', 'BE', 'BR', 'CA', 'CN', 'KR', 'ES', 'GR', 'GF', 'IT', 'GB', 'US']},
	// 	line_items : [{ price : 'price_1MZgzLJAtKEdmzDNDGTHC76l', quantity: 3 }],
	// 	success_url: `https://www.elpe-clothing.com/sucess?session_id={CHECKOUT_SESSION_ID}`,
	// 	cancel_url: 'https://www.elpe-clothing.com/'
	// })
	const response = await fetch('https://api.chucknorris.io/jokes/random');
	const data = await response.json()
	res.status(200).json({ 'test' : data })
}
