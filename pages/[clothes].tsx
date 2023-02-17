import { Clothes } from '@prisma/client'

import { useState, useEffect } from 'react'
import { NextPageContext } from "next"
import Image from "next/image"
import { Field, Formik, Form, ErrorMessage } from 'formik'
import { Carousel } from 'react-responsive-carousel'
import { ParsedUrlQuery } from 'querystring'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { getOneClothes } from "../lib/posts"
import { addItem } from '../lib/cart'

import Header from "../components/Header"
import Footer from "../components/Footer"
import BlueButton from "../components/BlueButton"

import styles from '../styles/clothes.module.css'

export async function getServerSideProps(context : NextPageContext) {
	const { clothes } : ParsedUrlQuery = context.query
	const clothesRequested : Clothes = await getOneClothes(clothes as string)
	return {
		props: { clothesRequested } 
	}
}


export default function ClothesRender({ clothesRequested } : { clothesRequested : Clothes }) {
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
	const validate = (values : { taille: '30x40cm' | '45x60cm', numero: number, quantity: number }) => {
		const errors : { taille?: string, numero?: number, quantity?: number } = {}
		if (!values.taille)
			errors.taille = "Sélectionnez une taille s'il-vous-plaît"
		return errors
	}
	return (
		<>
			<Header elpeClub={false} />
			<main className={styles.main}>
				{isPhone ? <h1 className={`${styles.contentBox} ${styles.name}`}>{clothesRequested.name}</h1> : null }
				<Carousel infiniteLoop autoPlay emulateTouch interval={5000} showStatus={false} renderThumbs={() => clothesRequested.src.map((img, index) => <div key={index}><Image src={`/clothes/${img}`} alt="logo" width={5000} height={5000}></Image></div>)}>
      				{clothesRequested.src.map((img, index) => <div key={index} ><img src={`/clothes/${img}`} alt={`preview ${index}`}/><p className='legend'>{img.split('/').reverse()[0].slice(0, -4)}</p></div>)}
  				</Carousel>
				<div className={styles.content}>
					{isPhone ? null : <h1 className={`${styles.contentBox} ${styles.name}`}>{clothesRequested.name}</h1>}
					<h3 className={`${styles.contentBox} ${styles.price}`}>{clothesRequested.price} € pour 30x40cm<br />24.99 € pour 45x60cm</h3>
					<p className={styles.contentBox}>{clothesRequested.description.map(function(string, index) {return (<span key={index}><span>{string}</span><br /><br /></span>)})}</p>
					<Formik
						initialValues={{
							taille : '30x40cm',
							numero : 0,
							quantity : 1
						}}
						onSubmit={(values : { taille: '30x40cm' | '45x60cm', numero: number, quantity: number }) => {
							const clothesToSend : Clothes = {...clothesRequested}
							clothesToSend.name += ` ${clothesToSend.src[values.numero].split('/').reverse()[0].slice(0, -4)}`
							if (values.taille === "45x60cm")
								clothesToSend.price = 24.99
							addItem(clothesToSend, values.taille, values.quantity, clothesRequested.src[values.numero])
							setProductAdd(true)
							setTimeout(() => setProductAdd(false), 1000)
						}}
						validate={validate}
					>
						<Form className={styles.form}>
							<div className={`${styles.contentBox} ${styles.labelForm}`}>
								<label htmlFor="numero">MODELE :</label>
								<Field as="select" name="numero" className={styles.input}>
									{clothesRequested.src.map((value, index) => {
										if (index < 6)
											return <option key={index} value={index}>{value.split('/').reverse()[0].slice(0, -4)}</option>
									})}
								</Field>
								<ErrorMessage name="taille"></ErrorMessage>
							</div>
							<div className={`${styles.contentBox} ${styles.labelForm}`}>
								<label htmlFor="taille">TAILLE :</label>
								<Field as="select" name="taille" className={styles.input}>
									<option value="30x40cm">30x40cm</option>
									<option value="45x60cm">45x60cm</option>
								</Field>
								<ErrorMessage name="taille"></ErrorMessage>
							</div>
							<div className={`${styles.contentBox} ${styles.labelForm}`}>
								<label htmlFor="quantity">QUANTITÉ :</label>
								<Field name='quantity' max="9999" min="1" type="number" placeholder="1" className={styles.input}/>
							</div>
						</Form>
					</Formik>
				</div>
			</main>
			<Footer />
		</>
	)
}
