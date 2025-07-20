import { NextRouter, useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/home.module.css'

export default function Index() {
	const router : NextRouter = useRouter()
	
	const handleEnterClick = () => {
		router.push('/home')
	}

	return (
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
			<div className={styles.container}>
				<button 
					className={styles.blackAndWhiteButton}
					onClick={handleEnterClick}
				>
					ENTRER
				</button>
			</div>
		</div>
	)
}
