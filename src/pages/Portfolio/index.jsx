import AboutMe from "../../components/AboutMe"
import HeaderPortfolio from "../../components/HeaderPortfolio"
import MyPresentation from "../../components/MyPresentation"
import MyProjects from "../../components/MyProjects"
import PersonInfo from "../../components/PersonInfo"

const Portfolio = () => {
    return (
        <>
            <HeaderPortfolio/>
            <MyPresentation/>
            <AboutMe/>
            <PersonInfo/>
            <MyProjects/>
        </>
    )
}

export default Portfolio