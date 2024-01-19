import AboutMe from "../../components/AboutMe"
import Footer from "../../components/Footer"
import HeaderPortfolio from "../../components/HeaderPortfolio"
import MyPresentation from "../../components/MyPresentation"
import MyProjects from "../../components/MyProjects"
import MyServices from "../../components/MyServices"
import MySkills from "../../components/MySkills"
import PersonInfo from "../../components/PersonInfo"

const Portfolio = () => {
    return (
        <>
            <HeaderPortfolio/>
            <MyPresentation/>
            <AboutMe/>
            <PersonInfo/>
            <MyProjects/>
            <MyServices/>
            <MySkills/>
            <Footer/>
        </>
    )
}

export default Portfolio