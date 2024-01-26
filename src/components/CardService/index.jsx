import styles from "./cardService.module.css";

// eslint-disable-next-line react/prop-types
const CardService = ({ icon, textoServico }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <img src={icon} alt="icone do servico" />
      </div>

      <div className={styles.containerTexto}>
        <p className={styles.texto}>{textoServico}</p>
      </div>
    </div>
  );
};

export default CardService;
