import { useEffect, useState } from 'react'
import Image from 'next/image'

import Header from "../components/Header"
import Footer from '../components/Footer'
import Checkout from "../components/Checkout"
import ImageWithLink from '../components/ImageWithLink'

import ContentInCart from '../interfacesAndTypes/contentInCart' 

import styles from "../styles/cart.module.css"

export default function Cart() {
	const [cartItem, setCartArray] = useState<Array<ContentInCart>>([])
	useEffect(() => {
		localStorage.clear()
	}, [])
	function sumItem() {
		let sum = 0;
		const cartItemArray = cartItem as Array<ContentInCart>
		for (let i = 0; i < cartItemArray.length; i++)
			sum += cartItemArray[i].quantity * cartItemArray[i].price
		return  Math.round(sum * 100) / 100
	}
	function deleteItem(name : string, taille : string) {
		const newCart = cartItem.filter(item => item.name != name || item.taille != taille);
		localStorage.setItem('cart', JSON.stringify(newCart))
		setCartArray(newCart)
	}
	return (
		<>
			<Header elpeClub={false}/>
			<main className={styles.main}>
				<h1>Panier</h1>
                	<hr />
				{cartItem.map(({ price, name, taille, quantity, src, href, id, width, height, alt }) => (
					<div key={id}>
						<div className={styles.clothes}>
							<ImageWithLink src={src} href={href} width={width} height={height} alt={alt}></ImageWithLink>
							<div>
								<h3>{name}</h3>
								<h3>Taille : {taille}</h3>
							</div>
							<h3>Quantité : {quantity}</h3>
							<h3>{quantity * price} €</h3>
							<button className={styles.button} onClick={() => deleteItem(name, taille)}><Image src='/icons/closeBlack.png' alt='closeIcon' width={20} height={20} ></Image></button>
						</div>
						<hr />
					</div>
				))}
				<h3>Sous total : {sumItem()} €</h3>
				{ sumItem() ? <Checkout cart={cartItem}/> : null}
			</main>
			<Footer />
		</>
	)
}
