import styles from "./cardService.module.css";

// eslint-disable-next-line react/prop-types
const CardService = ({ icon, textoServico }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <img src={icon} alt="icone do servico" />
      </div>
      <h3 className={styles.service}>{textoServico}</h3>
    </div>
  );
};

export default CardService;
