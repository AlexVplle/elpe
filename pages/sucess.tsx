import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/sucess.module.css"

export default function Sucess() {
	useEffect(() => localStorage.removeItem('cart'))
	return (
		<>
			<Header elpeClub={false}/>
			<div className={styles.title}>
				<h1>VOTRE PANIER VIENT D&apos;ÊTRE COMMANDÉ !</h1>
				<h1>MERCI DE VOTRE CONFIANCE !</h1>
			</div>
			<Footer />
		</>
	)
}
