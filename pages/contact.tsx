import Header from "../components/Header"
import Footer from "../components/Footer"

import styles from "../styles/contact.module.css"
import stylesInformationsPages from "../styles/informationspages.module.css"

export default function Contact() {
    return (
        <body>
            <Header elpeClub={false}></Header>
            <main className={`${styles.main} ${stylesInformationsPages.main}`}>
                <h2 className={styles.title}>CONTACT & INFORMATIONS</h2>
                <p>Pour toute question, renseignement ou demande, veuillez m&apos;envoyer un mail à l&apos;adresse suivante :</p>
                <a href="mailto:elpe.contact@gmail.com">elpe.contact@gmail.com</a>
            </main>
            <Footer></Footer>
        </body>
    )
}
