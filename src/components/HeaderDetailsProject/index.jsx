import styles from "./headerDetailsProject.module.css"
import logoCamaleao from "../../assets/logoCamaleao.svg"
import setaVoltar from "../../assets/setaVoltar.svg"

const HeaderDetailsProject = () => {
    return (
        <header className={styles.container}>
            <img src={logoCamaleao} alt="Icone do chameleon" />
            <div className={styles.containerImg}>
                <img src={setaVoltar} alt="Icone de seta voltar"/>
            </div>
        </header>
    )
}

export default HeaderDetailsProject