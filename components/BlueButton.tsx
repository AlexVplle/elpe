import BlueButtonProps from "../interfacesAndTypes/blueButtonProps"

import styles from "../styles/blueButton.module.css"

export default function BlueButton(props: BlueButtonProps) {
	return <button className={styles.button} onClick={props.onClick} >{props.content}</button>
}
