import Image from 'next/image'
import { useEffect, useState } from 'react'

import NavLink from "./Navlink"

import styles from '../styles/footer.module.css'

export default function Footer() {
	const [isDisplayMenu, setDisplayMenu] = useState<boolean>(false)
	const [isPhone, setIsPhone] = useState<number>(2)
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
	const switchMenu = function() {
		const arrow : CSSStyleDeclaration = document.getElementById('arrow')!.style
		if (isDisplayMenu) {
			setDisplayMenu(false)
			arrow.transform = 'rotate(0deg)'
		}
		else {
			setDisplayMenu(true)
			arrow.transform = "rotate(90deg)"
		}
	}
    return (
        <footer className={styles.footer}>
		<button className={styles.arrow} id="arrow" onClick={switchMenu}>
			<Image src="/icons/arrow.png" alt='arrow' width={36} height={36} />
		</button>
	   	{ isPhone && !isDisplayMenu ? null : <div className={styles.menu} id="menu">
			 <div className={styles.contentBox}>
				<h3 className={`${styles.h3} ${styles.title}`}>INFORMATIONS</h3>
				<ul className={styles.ul}>
				    <li className={styles.list}><NavLink name='CONTACT : elpe.contact@gmail.com' href='/contact' /></li>
				    <li className={styles.list}><NavLink name='INFORMATION LÉGALES' href='/informations-legales' /></li>
				</ul>
			 </div>
			 <div className={styles.contentBox}>
				<h3 className={`${styles.h3} ${styles.title}`}>COMMANDES</h3>
				<ul className={styles.ul}>
				    <li className={styles.list}><NavLink name='TRAITEMENT + LIVRAISON' href='/traitement-livraison' /></li>
				    <li className={styles.list}><NavLink name='RETOURS + ÉCHANGES' href='/retours-echanges' /></li>
				</ul>
			 </div>
			 <div className={styles.contentBox}>
				<h3 className={`${styles.h3} ${styles.title}`}>RÉSEAUX SOCIAUX</h3>
				<ul className={styles.ul}>
				    <li className={styles.list}><NavLink name='INSTAGRAM' href='https://www.instagram.com/elpe_clothing/' /></li>
				</ul>
			 </div>
			 <div className={styles.contentBox}>
				<h3 className={`${styles.h3} ${styles.title}`}>POLITIQUES</h3>
				<ul className={styles.ul}>
				    <li className={styles.list}><NavLink name='CONDITIONS GÉNÉRALES' href='/conditions-generales' /></li>
				    <li className={styles.list}><NavLink name='POLITIQUE DE CONFIDENTIALITÉ' href='/politique-de-confidentialite' /></li>
				</ul>
			</div>
		</div>}
        </footer>
    )
}
