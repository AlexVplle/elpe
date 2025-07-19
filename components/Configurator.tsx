import { useState } from "react";
import Image from "next/image";

import { useCustomizationHoodie, useCustomizationTee } from "../context/customProvider"

import BlueButton from "./BlueButton";

import styles from '../styles/configurator.module.css'

import { ColorLogo, ColorHoodieBase, ColorTeeBase } from "../lib/colorForCustom";
import { LogoArrayCustom } from "../lib/logoForCustom";
import { addItem } from "../lib/cart";

import CustomizationContext from "../interfacesAndTypes/CustomizationContext";
import { ClothesData } from "../lib/clothesData";


export default function Configurator({ clothes } : { clothes : ClothesData }) {
	const [isProductAdd, setProductAdd] = useState<boolean>(false)
	const customizationHoodie : CustomizationContext = useCustomizationHoodie() as CustomizationContext
	const customizationTee : CustomizationContext = useCustomizationTee() as CustomizationContext
	const { color, setColor, logo, setLogo, logoColor, setLogoColor } = clothes.name.includes('HOODIE') ? customizationHoodie : customizationTee
	const addCustomItem = () => {
		const tailleElement : HTMLSelectElement = document.getElementById('size') as HTMLSelectElement
		const quantityElement : HTMLInputElement = document.getElementById('quantity') as HTMLInputElement
		const tailleString : string = tailleElement.value
		const quantity : number = Number(quantityElement.value)
		if (!['S', 'M', 'L', 'XL', 'XXL'].includes(tailleString))
			return
		const taille : 'S' | 'M' | 'L' | 'XL' | 'XXL' = tailleString as 'S' | 'M' | 'L' | 'XL' | 'XXL'

		const clothesToSend : ClothesData = {...clothes}
		console.log(clothesToSend);
		console.log(taille, quantity)
		clothesToSend.name += ` (BASE ${color.name}; LOGO ${logo.name} ${logoColor.name})`
		addItem(clothesToSend, taille, quantity, clothes.src[0])
		setProductAdd(true)
		setTimeout(() => setProductAdd(false), 1000)
	}
	return (
		<div className={styles.configurator}>
			<div className={styles.rowChoice}>
				<h3 className={styles.h3}>Couleur</h3>
				<div className={styles.buttonPlace}>
					{(clothes.name.includes('HOODIE') ? ColorHoodieBase : ColorTeeBase).map((value, index) => <div key={index} className={styles.buttonDiv}><button className={`${styles.button} ${value.name == color.name ? styles.button_active : ""}`} style={{ backgroundColor: value.color }} onClick={() => setColor(value)} /></div>)}
				</div>
				<div></div>
			</div>
			<div className={styles.rowChoice}>
				<h3 className={styles.h3}>Logo</h3>
				<div className={styles.logoPlace}>
					{LogoArrayCustom.map((value, index) => <div key={index} className={`${styles.logo} ${value.name == logo.name ? styles.logo_active : ""}`}><Image src={value.location} alt={value.name} width={200} height={200} onClick={() => setLogo(value)}/></div>)}
				</div>
			</div>
			<div className={styles.rowChoice}>
				<h3 className={styles.h3}>Couleur du logo</h3>
				<div className={styles.buttonPlace}>
					{ColorLogo.map((value, index) => <div key={index} className={styles.buttonDiv}><button className={`${styles.button} ${value.name == logoColor.name ? styles.button_active : ""}`} style={{ backgroundColor: value.color }} onClick={() => setLogoColor(value)} /></div>)}
				</div>
				<div></div>
			</div>
			<div className={styles.rowChoice}>
				<h3 className={styles.h3}>Taille</h3>
				<select name="taille" id="size" className={styles.input}>
					<option value="S">S</option>
					<option value="M">M</option>
					<option value="L">L</option>
					<option value="XL">XL</option>
					<option value="XXL">XXL</option>
				</select>
				<div></div>
			</div>
			<div className={styles.rowChoice}>
				<h3 className={styles.h3}>Quantité</h3>
				<input id="quantity" name='quantity' max="9999" min="1" type="number" defaultValue="1" className={styles.input}/>
				<div></div>
			</div>
		</div>
	)
}
