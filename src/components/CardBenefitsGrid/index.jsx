import styles from "./cardBenefitsGrid.module.css";

// eslint-disable-next-line react/prop-types
const CardBenefitsGrid = ({ icone, titulo, texto }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <img src={icone} alt="Icone" />
      </div>

      <div className={styles.containerTitulo}>
        <p>{titulo}</p>
      </div>

      <div className={styles.containerTexto}>
        <h4>{texto}</h4>
      </div>
    </div>
  );
};

export default CardBenefitsGrid;
