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

import ContentInCart from '../interfacesAndTypes/contentInCart'
import SizeClothes from '../interfacesAndTypes/sizeClothes'

import styles from '../styles/clothes.module.css'

export async function getServerSideProps(context : NextPageContext) {
	const { clothes } : ParsedUrlQuery = context.query
	const clothesRequested : Clothes = await getOneClothes(clothes as string)
	return {
		props: { clothesRequested } 
	}
}

// function addItem(cartContentString : string | null, clothesRequested : ContentInCart){
// 	const newContent : ContentInCart = {
// 		name : clothesRequested.name,
// 		taille : clothesRequested.taille as string,
// 		quantity : values.quantity as number,
// 		src : `/clothes/${clothesRequested.src[0]}`,
// 		href : clothesRequested.href,
// 		price : clothesRequested.price,
// 		price_id : (clothesRequested.price_id as unknown as SizeClothes)[values.taille as ("S" | "M" | "L" | "XL" | "XXL")],
// 	}
// 	if (cartContentString === null)
// 		return JSON.stringify([newContent])
// 	const cartContent : Array<ContentInCart> = JSON.parse(cartContentString)
// 	let isAdd = false;
// 	cartContent.forEach((clothes : ContentInCart) => {
// 		if (newContent.name == clothes.name && newContent.taille == clothes.taille && !isAdd) {
// 			clothes.quantity += newContent.quantity
// 			isAdd = true
// 		}
// 	})
// 	if (!isAdd)
// 		cartContent.push(newContent)
// 	return JSON.stringify(cartContent)
//  }

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
