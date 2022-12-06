import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "../styles/informationspages.module.css"

export default function LegalInformations() {
    return (
        <>
            <Header elpeClub={false}></Header>
            <main className={styles.main}>
                <p>Enseigne : Elpé</p>
                <p>Nom commercial : ELPE</p>
                <p>4 allée Jeanne d’Arc, 61140, Bagnoles-de-l’Orne Normandie</p>
                <p>SIREN/SIRET : 918 574 054 00014 (RCS ALENÇON)</p>
                <p>Activité : Vente à distance sur catalogue spécialisé</p>
                <a href="mailto:elpe.contact@gmail.com">elpe.contact@gmail.com</a>
                <a href="tel:+33620703053"></a>
            </main>
            <Footer></Footer>
        </>
    )
}
