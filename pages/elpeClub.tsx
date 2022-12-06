import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '../styles/elpeclub.module.css'

export default function ElpeClub() {
	const arrayPhoto : Array<string> = ['1', '2', '3', '4', '5']
	return (
		<>
			<Header elpeClub />
			<main className={styles.main}>
				<div className={styles.content}>
					<h2 className={styles.h2}>04.11</h2>
					<h3>1er évènement ELPÉ CLUB.</h3>
					<h3>80 PERSONNES</h3>
					<h3>SOLD OUT</h3>
				</div>
				<Carousel infiniteLoop autoPlay emulateTouch interval={5000} showStatus={false} renderThumbs={() => arrayPhoto.map((img, index) => <div key={index}><Image src={`/picture/picture${img}.jpg`} alt={`soiree preview ${index}`} width={5000} height={5000} /></div>)}>
      				{arrayPhoto.map((img, index) => <div key={index} ><img src={`/picture/picture${img}.jpg`} alt={`preview ${index}`}/></div>)}
  				</Carousel>
			</main>
			<Footer />
		</>
	)
}
