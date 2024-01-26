import styles from "./techsUsed.module.css"
import iconJS  from "../../assets/iconJS.svg"
import iconNext from "../../assets/iconNext.svg"
import iconCss from "../../assets/iconCss.svg"
import iconTailw from "../../assets/iconTailw.svg"
import iconReact from "../../assets/iconReact.svg"
import iconHtml from "../../assets/iconHtml.svg"
import CardSkills from "../CardSkills"

const TechsUsed = () => {
    return (
        <section className={styles.container}>
            <div className={styles.containerTitulo}>
                <p className={styles.titulo}>Descrição do projeto</p>
            </div>

            <div className={styles.containerIcons}>
                <CardSkills skillIcon={iconHtml}/>
                <CardSkills skillIcon={iconCss}/>
                <CardSkills skillIcon={iconJS}/>
                <CardSkills skillIcon={iconTailw}/>
                <CardSkills skillIcon={iconReact}/>
                <CardSkills skillIcon={iconNext}/>
            </div>
        </section>
    )
}

export default TechsUsed