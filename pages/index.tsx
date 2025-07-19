import { NextRouter, useRouter } from 'next/router'
import Image from 'next/image'

import HeadAPP from '../components/Head'

import styles from '../styles/index.module.css'

export default function Index() {
	const router : NextRouter = useRouter()
	const redirectHome = function() {
		router.push('/home')
		document.getElementById('text')!.style.display = 'none'
		document.getElementById('logo')!.style.display = 'inline-block'
	}
	return (
		<div className={styles.body}>
			<HeadAPP />
			<Image id="video" className={styles.video} src="/clothes/elpeAccessories/home.gif" alt='video collier' width={1920} height={1080} />
			<button className={styles.button} onClick={redirectHome}><div className={styles.textButton} id='text'>Entrez →</div><div className={styles.logo} id="logo"><Image src="/icons/logo.gif" width={70} height={70} alt={"test"}/></div></button>
		</div>
	)
}
