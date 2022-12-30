import { useState } from "react";
import Image from "next/image";
import { Field, Formik, Form } from 'formik'

import { useCustomization } from "../context/customProvider"

import BlueButton from "./BlueButton";

import styles from '../styles/configurator.module.css'

import { ColorArrayCustom } from "../lib/colorForCustom";
import { LogoArrayCustom } from "../lib/logoForCustom";
import { addItem } from "../lib/cart";

import CustomizationContext from "../interfacesAndTypes/CustomizationContext";
import { Clothes } from "@prisma/client";
import ValueForm from "../interfacesAndTypes/valueForm";

export default function Configurator({ clothes } : { clothes : Clothes }) {
	const [isProductAdd, setProductAdd] = useState<boolean>(false)
	const customization : CustomizationContext | null = useCustomization()
	if (customization === null)
		return <></>
	const { color, setColor, logo, setLogo, logoColor, setLogoColor } = customization
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
				<Formik initialValues={{ taille : 'S', quantity : 1 }} onSubmit={({ taille, quantity } : ValueForm) => {
					clothes.name += ` (BASE ${color.name}; LOGO ${logo.name} ${logoColor.name})`
					addItem(clothes, taille, quantity)
					setProductAdd(true)
				}}>
						<Form className={styles.form}>
							<div className={`${styles.contentBox} ${styles.labelForm}`}>
								<label htmlFor="taille"><h3>TAILLE :</h3></label>
								<Field as="select" name="taille" className={styles.input}>
									<option value="">Sélectionnez votre taille</option>
									<option value="S">S</option>
									<option value="M">M</option>
									<option value="L">L</option>
									<option value="XL">XL</option>
									<option value="XXL">XXL</option>
								</Field>
							</div>
							<div className={`${styles.contentBox} ${styles.labelForm}`}>
								<label htmlFor="quantity"><h3>QUANTITÉ :</h3></label>
								<Field name='quantity' max="9999" min="1" type="number" placeholder="1" className={styles.input}/>
								<BlueButton content={isProductAdd ? "PRODUIT AJOUTE !" : "AJOUTEZ AU PANIER"}></BlueButton>
							</div>
						</Form>
					</Formik>
			</div>
		</div>
	)
}
