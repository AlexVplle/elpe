import Header from "../components/Header"
import Footer from "../components/Footer"

import styles from "../styles/retoursEchanges.module.css"
import stylesInformationsPages from "../styles/informationspages.module.css"

export default function RetoursEchanges() {
    return (
        <>
            <Header elpeClub={false}></Header>
            <main className={stylesInformationsPages.main}>
                <h2>Retours + Échanges</h2>
                <p className={styles.bold}>Retours</p>
                <p>Les retours sont acceptés sous certaines conditions :</p>
                <ul className={stylesInformationsPages.list}>
                    <li>le produit est défectueux</li>
                    <li>le produit n’est pas à la taille/couleur demandée</li>
                </ul>
                <p>le produit n’est pas à la taille/couleur demandée</p>
                <p className={styles.bold}>Échanges</p>
                <p>L’échange d’un article (changement de tailles, de couleurs, ou d’articles) peut être accepté dans la limite du possible : si nous ne disposons pas ou plus des articles que vous souhaitez échanger, l’échange est impossible.</p>
            </main>
            <Footer></Footer>
        </>
    )
}
