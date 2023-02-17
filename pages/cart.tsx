import { useEffect, useState } from 'react'
import Image from 'next/image'

import Header from "../components/Header"
import Footer from '../components/Footer'
import Checkout from "../components/Checkout"
import ImageWithLink from '../components/ImageWithLink'

import ContentInCart from '../interfacesAndTypes/contentInCart' 

import styles from "../styles/cart.module.css"
import { deleteItem, getCart, getTotalPrice } from '../lib/cart'

export default function Cart() {
	const [cartArray, setCartArray] = useState<Array<ContentInCart>>([])
	useEffect(() => {
		 localStorage.removeItem('cart')
		setCartArray(getCart())
	}, [])
	return (
		<>
			<Header elpeClub={false}/>
			<main className={styles.main}>
				<h1>Panier</h1>
                	<hr />
				{cartArray.map(({ price, name, taille, quantity, src, href } : ContentInCart, index : number) => (
					<div key={index}>
						<div className={styles.clothes}>
							<ImageWithLink src={src} href={href} width={5000} height={5000} alt={name}></ImageWithLink>
							<div>
								<h3>{name}</h3>
								<h3>Taille : {taille}</h3>
							</div>
							<h3>Quantité : {quantity}</h3>
							<h3>{Math.round(quantity * price * 100) / 100} €</h3>
							<button className={styles.button} onClick={() => setCartArray(deleteItem(name, taille))}><Image src='/icons/closeBlack.png' alt='closeIcon' width={20} height={20} ></Image></button>
						</div>
						<hr />
					</div>
				))}
				<h3>Sous total : {getTotalPrice(cartArray)} €</h3>
				{ getTotalPrice(cartArray) ? <Checkout cart={cartArray}/> : null}
			</main>
			<Footer />
		</>
	)
}
