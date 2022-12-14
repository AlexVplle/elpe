import Link from "next/link"

import ImageWithLink from "./ImageWithLink"

import styles from "../styles/clothesHome.module.css"

export default function ClothesHome({href, src, name} : { name : string, href : string, src: string, price : number }) {
    return (
        <>
            <ImageWithLink href={href} src={`/clothes/${src}`} alt={name} width={5000} height={5000} ></ImageWithLink>
            <div className={styles.link}><Link href={href}>{name}</Link></div>
            <div className={styles.price}>Rupture de Stock</div>
        </>
    )
}
