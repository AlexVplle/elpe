import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from 'stripe'
import contentInCart from "../../interfacesAndTypes/contentInCart"

const stripeAPI : string = process.env.STRIPE_SECRET_KEY as string
const stripe = new Stripe(stripeAPI, { apiVersion: '2022-08-01'})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { cart } : { cart : Array<contentInCart> }= JSON.parse(req.body)
	const lineItems : Array<{ price: string, quantity: number}> = await Promise.all(cart.map(async ({ name, price, quantity, taille }) => {
		const productFound = await stripe.products.search({
			query:`name~'${name} TAILLE ${taille}'`
		})
		if (!productFound.data.length) {
			const { default_price } = await stripe.products.create({
				name : `${name} EN TAILLE ${taille}`,
				default_price_data: {
					currency: 'eur',
					unit_amount: Math.round(price * 100),
				},
				shippable: true,
				images: [
					`https://res.cloudinary.com/dkxhy1nwn/${name.split(' ').slice(0, 5).join('%20')}`
				]
			})
			return { price: default_price as string, quantity: quantity}
		}
		const { default_price } = productFound.data[0]
			return { price: default_price as string, quantity: quantity}
	}))
	const session : Stripe.Response<Stripe.Checkout.Session> = await stripe.checkout.sessions.create({
		mode: 'payment',
		allow_promotion_codes : true,
		shipping_address_collection: {allowed_countries: ['FR', 'DE', 'AR', 'BE', 'BR', 'CA', 'CN', 'KR', 'ES', 'GR', 'GF', 'IT', 'GB', 'US']},
		line_items : lineItems,
		success_url: `https://www.elpe-clothing.com/sucess?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: 'https://www.elpe-clothing.com/'
	})
	res.status(200).json({ session })
}
