import styles from '../styles/customButton.module.css'

export default function CustomButton(props: {color: string, OnClick?: any}) {
	const backgroundColor = {
		backgroundColor: props.color,
	};
	return (
		<button className={styles.button} style={backgroundColor} onClick={props.OnClick}></button>
	)
}
