import { Clothes } from '@prisma/client'

import ClothesHome from '../components/ClothesHome'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { getAllClothes } from '../lib/posts'

import styles from '../styles/home.module.css'


export async function getServerSideProps() {
    const allClothes : Array<Clothes> = await getAllClothes()
    return {
        props: { allClothes }
    }
}

export default function Home({ allClothes }: { allClothes: Clothes[] }) {
	return (
		<>
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
