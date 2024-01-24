import CardBenefitsGrid from "../CardBenefitsGrid"
import styles from "./cardBenefits.module.css"

import IconRelogio from "../../assets/icon-relogio.svg"
import IconMaos from "../../assets/icone-maos.svg"
import IconFlex from "../../assets/icone-flex.svg"
import IconLampada from "../../assets/icone-lampada.svg"
import IconCv from "../../assets/icone-cv.svg"
import IconSeguranca from "../../assets/icone-seguranca.svg"

const CardBenefits = () => {
    return (
        <section className={styles.container}>
            <div className={styles.containerTitulo}>
                <h1 className={styles.titulo}>Olha só as <strong style={{ color: "#00DF5E" }}>vantagens</strong> em se cadastrar em nosso site:</h1>
            </div>

            <div className={styles.containerGrid}>
                <CardBenefitsGrid 
                    icone={IconRelogio} 
                    titulo="Rápido e prático" 
                    texto="Com a Chameleon Code Talent você consegue criar seu portfólio em poucos minutos."
                />
                <CardBenefitsGrid 
                    icone={IconMaos}
                    titulo="Encontre clientes"
                    texto="Ter uma área para exibir seus serviços agora é possível, atraia novos clientes."
                />
                <CardBenefitsGrid 
                    icone={IconFlex}
                    titulo="Flexível"
                    texto="Com a Chameleon Code Talent você tem mais flexibilidade no momento de inserir seus dados."
                />
                <CardBenefitsGrid 
                    icone={IconLampada}
                    titulo="Compartilhe projetos"
                    texto="É possível adicionar quantos projetos você quiser. Compartilhe e demonstre a tua experiência."
                />
                <CardBenefitsGrid 
                    icone={IconCv}
                    titulo="Compartilhe teu CV"
                    texto="Caso queir você também pode adicionar o teu currículo, aumentando as informações se achar relevante"
                />
                <CardBenefitsGrid 
                    icone={IconSeguranca}
                    titulo="Segurança"
                    texto="A Chameleon Code Talent garante a segurança dos teus dados."
                />
            </div>
        </section>
    )
}

export default CardBenefits