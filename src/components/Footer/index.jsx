import styles from "./footer.module.css"
import marcadaagua from "../../assets/marcadagua.svg"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerNome}>
                <p className={styles.texto}>Elaborado por <strong className={styles.nome}>nome</strong></p>
            </div>

            <div className={styles.containerChameleon}>
                <p className={styles.chameleon}>© 2024 Chameleon Code Talent</p>
                <img src={marcadaagua} alt="icone de marca d agua chameleon" />
            </div>
        </div>
    )
}

export default Footer