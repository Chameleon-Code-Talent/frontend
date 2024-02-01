import styles from "./personInfo.module.css";
import smileIcon from "../../assets/smile.svg";
import mailIcon from "../../assets/mail.svg";
import vectorIcon from "../../assets/Vector.svg";
import phoneIcon from "../../assets/phone.svg";

const PersonInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerIcon}>
        <div className={styles.emoji}>
          <img src={smileIcon} alt="Icone para meu nome" />
        </div>
        <div className={styles.texts}>
          <span className={styles.titulo}>Meu nome</span>
          <span className={styles.texto}>Luri Silva</span>
        </div>
      </div>

      <div className={styles.containerIcon}>
        <div className={styles.emoji}>
          <img src={mailIcon} alt="Icone para o e-mail" />
        </div>
        <div className={styles.texts}>
          <span className={styles.titulo}>E-mail</span>
          <span className={styles.texto}>luricold99@gmail.com</span>
        </div>
      </div>

      <div className={styles.containerIcon}>
        <div className={styles.emoji}>
          <img src={vectorIcon} alt="Icone para o github" />
        </div>
        <div className={styles.texts}>
          <span className={styles.titulo}>Github</span>
          <span className={styles.texto}>@luricode</span>
        </div>
      </div>

      <div className={styles.containerIcon}>
        <div className={styles.emoji}>
          <img src={phoneIcon} alt="Icone para o telefone" />
        </div>
        <div className={styles.texts}>
          <span className={styles.titulo}>Telefone</span>
          <span className={styles.texto}>(14) 99999-9999</span>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
