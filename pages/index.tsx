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
		<>
			<HeadAPP />
			<div className={styles.image} id="image">
				<div></div>
				<div></div>
				<button className={styles.button} onClick={redirectHome}><div className='text' id='text'>Entrez →</div><div className={styles.logo} id="logo"><Image src="/icons/logo.gif" width={70} height={70} alt={"test"}/></div></button>
			</div>
		</>
	)
}
