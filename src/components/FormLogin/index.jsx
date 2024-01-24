// import { Link } from "react-router-dom"
import styles from "./formLogin.module.css"

import { BsArrowRight } from "react-icons/bs"

import IconCasa from "../../assets/icon-casa.svg"
import IconCamaleaoForm from "../../assets/camaleaoForm.svg"

const FormLogin = () => {
    return (
        <section className={styles.container}>
            <div className={styles.voltar}>
                {/* <Link to="/"> */}
                    <p>Voltar</p>
                    <img src={IconCasa} alt="Icone da casa" />
                {/* </Link> */}
            </div>

            <div className={styles.containerFormulario}>
                <div>
                    <img src={IconCamaleaoForm} alt="Icone do camaleão" />
                </div>

                <form>

                </form>
            </div>

            <div className={styles.containerCadastrar}>
                <p>Não é cadastrado?</p>
                <div className={styles.botaoCadastrar}>
                    <p>Cadastre-se</p>
                    <BsArrowRight color="white" size={24} />
                </div>
            </div>
        </section>
    )
}

export default FormLogin