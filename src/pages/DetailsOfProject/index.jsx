import CarroselSlider from "../../components/CarroselSlider";
import DescribeProject from "../../components/DescribeProject";
import Footer from "../../components/Footer";
import HeaderDetailsProject from "../../components/HeaderDetailsProject";
import TechsUsed from "../../components/TechsUsed";
// import Footer from "../../components/Footer"

const DetailsOfProject = () => {
  return (
    <>
      <HeaderDetailsProject />
      <CarroselSlider />
      <DescribeProject />
      <TechsUsed />
      <Footer />
    </>
  );
};

export default DetailsOfProject;
