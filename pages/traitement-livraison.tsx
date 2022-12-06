import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "../styles/informationspages.module.css"

export default function TraitementLivraisons() {
    return (
        <>
            <Header elpeClub={false}></Header>
            <main className={styles.main}>
                <h2>Traitement + Livraison</h2>
                <p>Nous mettons évidemment tout en ordre pour rendre le traitement et la livraison de vos commandes les plus simples et rapides possibles. ELPÉ étant à l’état de lancement, les délais peuvent varier, allant de 1 semaine à 3 suivant le produit, la disponibilité, et la période. Un afflux massif de commandes ou des contre-temps inattendus peuvent parfois se produire.</p>
                <p>S’il y avait le moindre le problème, ou si vous souhaitez vous renseignez directement auprès de nous au sujet de votre commande ou de quoi que ce soit, notre boite mail est ouverte :</p>
                <a href="mailto:elpe.contact@gmail.com">elpe.contact@gmail.com</a>
            </main>
            <Footer></Footer>
        </>
    )
}
