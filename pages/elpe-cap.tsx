import { ClothesData } from '../lib/clothesData'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { Field, Formik, Form } from 'formik'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { getOneClothes } from "../lib/posts"
import { addItem } from '../lib/cart'

import Header from "../components/Header"
import Footer from "../components/Footer"
import BlueButton from "../components/BlueButton"

import styles from '../styles/clothes.module.css'
import stylesConfigurator from '../styles/configurator.module.css'

export async function getServerSideProps() {
	const clothesRequested : ClothesData | null = await getOneClothes('elpe-cap')
	
	if (!clothesRequested) {
		return {
			notFound: true
		}
	}
	
	return {
		props: { clothesRequested } 
	}
}


export default function ClothesRender({ clothesRequested } : { clothesRequested : ClothesData }) {
	const colorArray : Array<{name: string, color: string, image: number}> = [
		{ name: 'NOIRE', color: '#000000', image: 0},
		{ name: 'CRÈME', color: '#eadfcc', image: 1},
		{ name: 'MARINE', color: '#133b79', image: 2}
	] 
	const [color, setColor] = useState<{name: string, color: string, image: number}>(colorArray[0])
	const [isPhone, setIsPhone] = useState<number>(2)
	const [isProductAdd, setProductAdd] = useState<boolean>(false)
	useEffect(() => {
		const match : MediaQueryList = window.matchMedia('(max-width: 640px)')
		const matchOrNot = function(){
			setIsPhone(match.matches ? 1 : 0)
		}
		match.addEventListener('change', matchOrNot)
		if (isPhone == 2)
			matchOrNot()
		return () => match.removeEventListener('change', matchOrNot)
	})
	return (
		<>
			<Header elpeClub={false} />
			<main className={styles.main}>
				{isPhone ? <h1 className={`${styles.contentBox} ${styles.name}`}>{clothesRequested.name}</h1> : null }
				<Carousel infiniteLoop autoPlay emulateTouch interval={5000} showStatus={false} renderThumbs={() => clothesRequested.src.map((img, index) => <div key={index}><Image src={`/clothes/${img}`} alt="logo" width={5000} height={5000}></Image></div>)}>
      				{clothesRequested.src.map((img, index) => <div key={index} ><img src={`/clothes/${img}`} alt={`preview ${index}`}/></div>)}
  				</Carousel>
				<div className={styles.content}>
					{isPhone ? null : <h1 className={`${styles.contentBox} ${styles.name}`}>{clothesRequested.name}</h1>}
					<h3 className={`${styles.contentBox} ${styles.price}`}>Rupture de stock</h3>
					<p className={styles.contentBox}>{clothesRequested.description.map(function(string, index) {return (<span key={index}><span>{string}</span><br /><br /></span>)})}</p>
					<Formik
						initialValues={{
							quantity : 1
						}}
						onSubmit={(values : { quantity: number }, actions) => {
							const clothesToSend : ClothesData = {...clothesRequested}
							clothesToSend.name += ` ${color.name}`
							addItem(clothesToSend, "", values.quantity, clothesRequested.src[color.image])
							setProductAdd(true)
							setTimeout(() => setProductAdd(false), 1000)
							actions.setSubmitting(false)
						}}
					>
						<Form className={styles.form}>
							<div className={`${styles.contentBox} ${styles.labelForm}`}>
								<label htmlFor="quantity" className={styles.label}>QUANTITÉ :</label>
								<Field name='quantity' max="9999" min="1" type="number" placeholder="1" className={styles.input}/>
								<div className={stylesConfigurator.rowChoice}>
									<label className={styles.label}>COULEUR :</label>
									<div className={stylesConfigurator.buttonPlace}>
										{colorArray.map((value, index) => <div key={index} className={stylesConfigurator.buttonDiv}><div className={`${stylesConfigurator.button} ${value.name == color.name ? stylesConfigurator.button_active : ""}`} style={{ backgroundColor: value.color }} onClick={() => setColor(value)} /></div>)}
									</div>
								</div>
							</div>
						</Form>
					</Formik>
				</div>
			</main>
			<Footer />
		</>
	)
}
