import CardBenefits from "../../components/CardBenefits";
import FooterDefault from "../../components/FooterDefault";
import FormRecoverPassword from "../../components/FormRecoverPassword";
import styles from "./recoverPassword.module.css";

const RecoverPassword = () => {
    return (
        <div>
            <section>
                <div className={styles.containerLogin}>
                    <FormRecoverPassword/>
                </div>
                <div className={styles.containerVantagens}>
                    <CardBenefits />
                </div>
            </section>

            <FooterDefault />
        </div>
    )
}

export default RecoverPassword