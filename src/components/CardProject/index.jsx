import styles from "./cardProject.module.css"

const CardProject = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerImagem}>
            </div>
            <div className={styles.containerTextos}>
                <p className={styles.titulo}>Título do projeto</p>
                <p className={styles.texto}>Tecnologias: HTML, CSS e JS</p>
            </div>
        </div>
    )
}

export default CardProject