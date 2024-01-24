import CardBenefits from "../../components/CardBenefits";
import FormLogin from "../../components/FormLogin";
import styles from "./singIn.module.css";

const SingIn = () => {
    return (
        <section>
            <div className={styles.containerLogin}>
                <FormLogin/>
            </div>
            <div className={styles.containerVantagens}>
                <CardBenefits />
            </div>
        </section>
    )
}

export default SingIn