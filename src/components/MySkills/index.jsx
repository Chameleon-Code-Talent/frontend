import CardSkills from "../CardSkills";
import styles from "./mySkills.module.css";
import iconJS from "../../assets/iconJS.svg";
import iconNext from "../../assets/iconNext.svg";
import iconCss from "../../assets/iconCss.svg";
import iconTailw from "../../assets/iconTailw.svg";
import iconReact from "../../assets/iconReact.svg";
import iconHtml from "../../assets/iconHtml.svg";

const MySkills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitulo}>
        <h3 className={styles.titulo}>Minhas skills</h3>
      </div>

      <div className={styles.containerInfos}>
        <CardSkills skillIcon={iconHtml} />
        <CardSkills skillIcon={iconCss} />
        <CardSkills skillIcon={iconJS} />
        <CardSkills skillIcon={iconTailw} />
        <CardSkills skillIcon={iconReact} />
        <CardSkills skillIcon={iconNext} />
      </div>
    </div>
  );
};

export default MySkills;
