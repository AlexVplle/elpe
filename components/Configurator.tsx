import { useCustomization } from "../context/customProvider"

import CustomButton from "./CustomButton"

import styles from '../styles/configurator.module.css'

import { ColorArrayCustom } from "../lib/colorForCustom";

export default function Configurator() {
	const {
		color, 
		setColor,
		logo,
		setLogo,
		logoColor,
		setLogoColor,
		size,
		setSize
	} = useCustomization()
	return (
		<div className={styles.configurator}>
			<div className={styles.rowChoice}>
				<h3>Couleur</h3>
				<div>
					{ColorArrayCustom.map((value, index) => <CustomButton key={index} color={value.color} OnClick={() => setColor(value)}/>)}
				</div>
			</div>
			<div className={styles.rowChoice}>
				<h3>Logo</h3>
			</div>
			<div className={styles.rowChoice}>
				<h3>Couleur du logo</h3>
				<div>
					{ColorArrayCustom.map((value, index) => <CustomButton key={index} color={value.color} />)}
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
		</div>
	)
}
