import { ClothesData } from '../lib/clothesData'
import Image from 'next/image'

import ClothesHome from '../components/ClothesHome'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { getAllClothes } from '../lib/posts'

import styles from '../styles/home.module.css'


export async function getServerSideProps() {
    const allClothes : Array<ClothesData> = await getAllClothes()
    return {
        props: { allClothes }
    }
}

export default function Home({ allClothes }: { allClothes: ClothesData[] }) {
	return (
		<>
			<div className={styles.heroSection}>
				<Image 
					src="/clothes/elpeAccessories/home.gif"
					alt="ELPE Hero"
					priority
					className={styles.heroGif}
					unoptimized
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className={styles.body}>
				<Header elpeClub={false}></Header>
				<main className={styles.main}>
					{allClothes.map(({ name, href, src, price }, index) => (
						<div key={index}>
							<ClothesHome name={name} href={href} src={src[0]} price={price} ></ClothesHome>
						</div>
					))}
				</main>
				<Footer />
			</div>
		</>
    )
}
