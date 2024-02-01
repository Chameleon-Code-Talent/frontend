import styles from "./footer.module.css";
import marcadaagua from "../../assets/marcadagua.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerNome}>
        <span className={styles.texto}>
          Elaborado por <strong className={styles.nome}>nome</strong>
        </span>
      </div>

      <div className={styles.containerChameleon}>
        <span className={styles.chameleon}>© 2024 Chameleon Code Talent</span>
        <img src={marcadaagua} alt="icone de marca d agua chameleon" />
      </div>
    </div>
  );
};

export default Footer;
