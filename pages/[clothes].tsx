import { Clothes } from '@prisma/client'

import { useState, useEffect } from 'react'
import { NextPageContext } from "next"
import Image from "next/image"
import { Field, Formik, Form, ErrorMessage } from 'formik'
import { Carousel } from 'react-responsive-carousel'
import { ParsedUrlQuery } from 'querystring'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { getOneClothes } from "../lib/posts"

import Header from "../components/Header"
import Footer from "../components/Footer"
import BlueButton from "../components/BlueButton"

import SizeClothes from '../interfacesAndTypes/sizeClothes'

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
					<h3 className={`${styles.contentBox} ${styles.price}`}>Rupture de Stock</h3>
					<p className={styles.contentBox}>{clothesRequested.description.map(function(string, index) {return (<span key={index}><span>{string}</span><br /><br /></span>)})}</p>
				</div>
			</main>
			<Footer />
		</>
	)
}
