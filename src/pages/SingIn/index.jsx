import CardBenefits from "../../components/CardBenefits";
import FooterDefault from "../../components/FooterDefault";
import FormLogin from "../../components/FormLogin";
import styles from "./singIn.module.css";

const SingIn = () => {
    return (
        <div>
            <section>
                <div className={styles.containerLogin}>
                    <FormLogin/>
                </div>
                <div className={styles.containerVantagens}>
                    <CardBenefits />
                </div>
            </section>

            <FooterDefault />
        </div>
    )
}

export default SingIn