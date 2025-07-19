import { ClothesData } from '../lib/clothesData'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { getOneClothes } from "../lib/posts"

import Header from "../components/Header"
import Footer from "../components/Footer"
import BlueButton from "../components/BlueButton"

import styles from '../styles/clothes.module.css'
import { NextRouter, useRouter } from 'next/router'

export async function getServerSideProps() {
	const clothes : string = 'elpe-by-you-hoodie'
	const clothesRequested : ClothesData | null = await getOneClothes(clothes as string)
	
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
	const [isClicked, setClicked] = useState<boolean>(false)
	const [isPhone, setIsPhone] = useState<number>(2)
	const router : NextRouter = useRouter()
	const redirectCustom = function() {
		setClicked(true)
		router.push('/custom-hoodie')
	}
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
					<h3 className={`${styles.contentBox} ${styles.price}`}>RUPTURE DE STOCK</h3>
					<p className={styles.contentBox}>{clothesRequested.description.map(function(string, index) {return (<span key={index}><span>{string}</span><br /><br /></span>)})}</p>
					<BlueButton content={isClicked ? "VEUILLEZ PATIENTER..." : "PERSONNALISER"} onClick={redirectCustom}></BlueButton>
				</div>
			</main>
			<Footer />
		</>
	)
}
