import styles from "./personInfo.module.css";
import smileIcon from "../../assets/smile.svg";
import mailIcon from "../../assets/mail.svg";
import vectorIcon from "../../assets/Vector.svg";
import phoneIcon from "../../assets/phone.svg";

const PersonInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerIconNome}>
        <div className={styles.emoji}>
          <img src={smileIcon} alt="Icone para meu nome" />
        </div>
        <div>
          <p className={styles.titulo}>Meu nome</p>
          <p className={styles.texto}>Luri Silva</p>
        </div>
      </div>

      <div className={styles.containerIconEmail}>
        <div className={styles.emoji}>
          <img src={mailIcon} alt="Icone para o e-mail" />
        </div>
        <div>
          <p className={styles.titulo}>E-mail</p>
          <p className={styles.texto}>luricold99@gmail.com</p>
        </div>
      </div>

      <div className={styles.containerIconGithub}>
        <div className={styles.emoji}>
          <img src={vectorIcon} alt="Icone para o github" />
        </div>
        <div>
          <p className={styles.titulo}>Github</p>
          <p className={styles.texto}>@luricode</p>
        </div>
      </div>

      <div className={styles.containerIconPhone}>
        <div className={styles.emoji}>
          <img src={phoneIcon} alt="Icone para o telefone" />
        </div>
        <div>
          <p className={styles.titulo}>Telefone</p>
          <p className={styles.texto}>(14) 99999-9999</p>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
