import CardService from "../CardService";
import styles from "./myServices.module.css";
import codeIcon from "../../assets/code.svg";
import figmaIcon from "../../assets/figma.svg";
import mobileIcon from "../../assets/mobile.svg";

const MyServices = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitulo}>
        <h2 className={styles.titulo}>Serviços</h2>
      </div>

      <div className={styles.containerInfos}>
        <CardService icon={codeIcon} textoServico={"Criação de sites"} />
        <CardService icon={figmaIcon} textoServico={"UI Designer"} />
        <CardService icon={mobileIcon} textoServico={"Dev Mobile"} />
      </div>
    </div>
  );
};

export default MyServices;
