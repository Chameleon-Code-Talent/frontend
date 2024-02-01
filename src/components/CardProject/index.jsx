import styles from "./cardProject.module.css";
import portfolioCover from "../../assets/portfolio-capa.png";

const CardProject = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImagem}>
        <img
          className={styles.image}
          src={portfolioCover}
          alt="imagem exemplo"
        />
      </div>
      <div className={styles.containerTextos}>
        <h3 className={styles.titulo}>Título do projeto</h3>
        <span className={styles.texto}>Tecnologias: HTML, CSS e JS</span>
      </div>
    </div>
  );
};

export default CardProject;
