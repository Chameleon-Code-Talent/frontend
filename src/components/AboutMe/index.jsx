import styles from "./aboutMe.module.css"

const AboutMe = () => {
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.titulo}>Sobre mim</h2>
            </div>
            <div>
                <p className={styles.texto}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            </div>
        </div>
    )
}

export default AboutMe