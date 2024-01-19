import styles from "./cardSkills.module.css"

// eslint-disable-next-line react/prop-types
const CardSkills = ({ skillIcon }) => {
    return (
        <div className={styles.container}>
            <img src={skillIcon} alt="Icone das skills" />
        </div>
    )
}

export default CardSkills