import styles from "./footerDefault.module.css";

import logoCamaleao from "../../assets/logoCamaleao.svg";

const FooterDefault = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerCCT}>
        <img src={logoCamaleao} alt="Icone" />
        <h4>
          © <strong style={{ color: "#00DF5E" }}>Chameleon Code Talent</strong>{" "}
          2024 - Todos os direitos reservados
        </h4>
      </div>

      <div className={styles.containerTermos}>
        <p>Política de Privacidade</p>
        <p>Termos de uso</p>
      </div>
    </section>
  );
};

export default FooterDefault;
