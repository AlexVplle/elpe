import BlueButtonProps from "../interfaces/blueButtonProps"

import styles from "../styles/blueButton.module.css"

export default function BlueButton(props: BlueButtonProps) {
	return <button className={styles.button} onClick={props.onClick} type='submit'>{props.content}</button>
}
