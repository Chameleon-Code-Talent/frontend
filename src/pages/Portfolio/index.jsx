import AboutMe from "../../components/AboutMe"
import Footer from "../../components/Footer"
import HeaderPortfolio from "../../components/HeaderPortfolio"
import MyPresentation from "../../components/MyPresentation"
import MyProjects from "../../components/MyProjects"
import MyServices from "../../components/MyServices"
import MySkills from "../../components/MySkills"
import PersonInfo from "../../components/PersonInfo"
import styles from "./portfolio.module.css"

const Portfolio = () => {
    return (
        <>
            <HeaderPortfolio/>
            <main className={styles.container}>
                <MyPresentation/>
                <AboutMe/>
                <PersonInfo/>
                <MyProjects/>
                <MyServices/>
                <MySkills/>
            </main>
            <Footer/>
        </>
    )
}

export default Portfolio