import Link from "next/link"

import ImageWithLink from "./ImageWithLink"

import ClothesProps from "../interfacesAndTypes/clothesProps"

import styles from "../styles/clothesHome.module.css"

export default function ClothesHome(props: ClothesProps) {
    return (
        <>
            <ImageWithLink href={props.href} src={`/clothes/${props.src[0]}`} name={props.name} width={props.width} height={props.height} alt={props.alt}></ImageWithLink>
            <div className={styles.link}><Link href={props.href}>{props.name}</Link></div>
            <div className={styles.price}>Rupture de Stock</div>
        </>
    )
}
