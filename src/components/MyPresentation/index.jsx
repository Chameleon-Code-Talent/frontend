import styles from "./myPresentation.module.css";
import bannerHome from "../../assets/Banner-home.svg";

const MyPresentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.informacoes}>
        <div className={styles.nome}>
          <h1>Olá, eu sou o luri Silva :)</h1>
        </div>

        <p>Desenvolvedor Front-End & UI Designer</p>

        <div className={styles.botoes}>
          <button className={styles.botaoDownload}>Download CV</button>
          <button className={styles.botaoContato}>Entrar em contato</button>
        </div>
      </div>
      <div className={styles.banner}>
        <img src={bannerHome} alt="banner de exemplo" />
      </div>
    </div>
  );
};

export default MyPresentation;
