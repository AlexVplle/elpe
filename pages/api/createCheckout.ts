import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from 'stripe'

const stripeAPI : string = process.env.STRIPE_SECRET_KEY as string
const stripe = new Stripe(stripeAPI, { apiVersion: '2022-08-01'})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { lineItems } = JSON.parse(req.body)
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
