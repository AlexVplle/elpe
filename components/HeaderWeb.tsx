import NavLink from './Navlink'
import ImageWithLink from './ImageWithLink'

import HeaderProps from '../interfacesAndTypes/headerProps'

import styles from '../styles/headerWeb.module.css'

export default function HeaderWeb({ elpeClub } : HeaderProps) {
	return (
		<>
			<header className={elpeClub ? styles.headerElpeClubWeb : styles.headerWeb}>
				<nav className={`${styles.nav} ${styles.equal}`}>
					<div className={styles.navlink}><NavLink name='ACCUEIL' href='/home'></NavLink></div>
					<div className={styles.navlink}><NavLink name='ELPE CLUB' href='/elpeClub'></NavLink></div>
				</nav>
				<ImageWithLink className={styles.equal} src='/logo/logoHeader.png' alt='logo' width={100} height={100} href='/'></ImageWithLink>
				<div className={`${styles.shopping} ${styles.equal}`}><NavLink name='PANIER' href='/cart'></NavLink></div>
		   </header>
	   </>
    )
}
