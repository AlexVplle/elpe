import Image from 'next/image'
import ImageWithLink from './ImageWithLink'
import NavLink from './Navlink'

import styles from '../styles/headerPhone.module.css'

export default function HeaderPhone() {
	const displayLateralPanel = function() : void {
		document.getElementById('menu')!.style.left = "0px"
		document.getElementById('linkSquare')!.style.transform = "translate3d(0,0,0)"
	}
	const removeLateralPanel = function() : void {
		document.getElementById('menu')!.style.left = "99999px"
		document.getElementById('linkSquare')!.style.transform = "translate3d(200%,0,0)"
	}
	return (
		<>
			<header className={styles.headerPhone}>
				<ImageWithLink src='/icons/shoppingBa.png' alt='shoppingBag' width={35} height={35} href='/cart'></ImageWithLink>
				<ImageWithLink src='/logo/logoHeader.png' alt='logoHeader' width={80} height={80} href='/home'></ImageWithLink>
				<button className={styles.buttonOpen} onClick={displayLateralPanel}><Image src='/icons/menuHamburger.svg' alt='menuHamburger' width={35} height={35} /></button>
			</header>
			<div className={styles.menu} id='menu'>
				<button className={styles.buttonClose} onClick={removeLateralPanel}>
					<Image src="/icons/close.svg" alt='closeIcon' width={20} height={20} />
				</button>
				<div className={styles.linkSquare} id='linkSquare'>
					<div className={styles.link}><NavLink name='ACCUEIL' href='/home'></NavLink></div>
					<div className={styles.link}><NavLink name='ELPE CLUB' href='/elpeClub'></NavLink></div>
				</div>
			</div>
		</>
	)
}
