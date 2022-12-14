import { useState } from "react";
import Image from "next/image";

import { useCustomization } from "../context/customProvider"

import BlueButton from "./BlueButton";

import styles from '../styles/configurator.module.css'

import { ColorArrayCustom } from "../lib/colorForCustom";
import { LogoArrayCustom } from "../lib/logoForCustom";

import CustomizationContext from "../interfacesAndTypes/CustomizationContext";

export default function Configurator() {
	const [isProductAdd, setProductAdd] = useState<boolean>(false)
	const customization : CustomizationContext | null = useCustomization()
	if (customization === null)
		return <></>
	const { setColor, setLogo, setLogoColor, setSize } = customization
	return (
		<div className={styles.configurator}>
			<div className={styles.rowChoice}>
				<h3>Couleur</h3>
				<div>
					{ColorArrayCustom.map((value, index) => <button key={index} className={styles.button} style={{ backgroundColor: value.color }} onClick={() => setColor(value)} />)}
				</div>
			</div>
			<div className={styles.rowChoice}>
				<h3>Logo</h3>
				<div>
					{LogoArrayCustom.map((value, index) => <Image key={index} src={value.location} alt={value.name} width={200} height={200} onClick={() => setLogo(value)}/>)}
				</div>
			</div>
			<div className={styles.rowChoice}>
				<h3>Couleur du logo</h3>
				<div>
					{ColorArrayCustom.map((value, index) => <button key={index} className={styles.button} style={{ backgroundColor: value.color }} onClick={() => setLogoColor(value)} />)}
				</div>
			</div>
			<div className={styles.rowChoice}>
				<h3>Taille</h3>
				<select className={styles.size}>
					<option value="S">S</option>
					<option value="M">M</option>
					<option value="L">L</option>
					<option value="XL">XL</option>
					<option value="XXL">XXL</option>
				</select>
			</div>
			<BlueButton content={isProductAdd ? "PRODUIT AJOUTE !" : "AJOUTEZ AU PANIER"} onClick={() => null}></BlueButton>
		</div>
	)
}
