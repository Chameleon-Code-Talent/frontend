import styles from "./headerPortfolio.module.css"
import logoCamaleao from "../../assets/logoCamaleao.svg"

const HeaderPortfolio = () => {
    return (
        <div className={styles.container}>
            <div className="logo">
              <img src={logoCamaleao} alt="Logotipo da empresa camaleao" />
            </div>

            <div className={styles.links}>
              <ul>
                <li><a href="#link1">Sobre mim</a></li>
                <li><a href="#link2">Projetos</a></li>
                <li><a href="#link3">Serviços</a></li>
                <li><a href="#link4">Minhas skills</a></li>
              </ul>
            </div>
        </div>
    )
}

export default HeaderPortfolio