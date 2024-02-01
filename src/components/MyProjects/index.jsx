import styles from "./myProjects.module.css";
import CardProject from "../CardProject";

const MyProjects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitulo}>
        <h2 className={styles.titulo}>Projetos</h2>
      </div>
      <div className={styles.containerProjetos}>
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
    </div>
  );
};

export default MyProjects;
