import ClothesHome from '../components/ClothesHome'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { getAllClothes } from '../lib/posts'

import ClothesModel from '../interfacesAndTypes/clothesModel'

import styles from '../styles/home.module.css'

export async function getServerSideProps() {
    const allClothes = await getAllClothes()
    return {
        props: { allClothes }
    }
}

export default function Home({ allClothes }: { allClothes: ClothesModel[] }) {
	return (
		<>
			<div className={styles.body}>
				<Header elpeClub={false}></Header>
				<main className={styles.main}>
					{allClothes.map(({ name, href, src, price }, index) => (
						<div key={index}>
							<ClothesHome className={styles.clothes} name={name} href={href} src={src} price={price} width={5000} height={5000} alt={name}></ClothesHome>
						</div>
					))}
				</main>
				<Footer />
			</div>
		</>
    )
}
