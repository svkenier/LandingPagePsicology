import "./styles/App.css";
import { Box } from "@mui/material";
import { NavSegment } from "./components/nav/NavSegment";
import { HeaderSegment } from "./components/header/HeaderSegment";
import { useHandleMenu } from "./hooks/useHandleMenu";
import { AboutUsSegment } from "./components/aboutUs/AboutUsSegment";
import { SkillsSegment } from "./components/skills/SkillsSegment";
import { ServicesSegment } from "./components/myServices/servicesSegment";
import { FormSegment } from "./components/form/FormSegment";
import PropTypes from "prop-types";
import { FooterSegment } from "./components/footer/footerSegment";


function App() {
  const { handleActiveMenu, activeMenu } = useHandleMenu();

  App.propTypes = {
    handleActiveMenu: PropTypes.func.isRequired,
    activeMenu: PropTypes.bool.isRequired,
  };

  return (
    <Box>
      <NavSegment handleActiveMenu={handleActiveMenu} activeMenu={activeMenu} />
      <HeaderSegment />
      <AboutUsSegment />
      <SkillsSegment />
      <ServicesSegment />
      <FormSegment/>
      <FooterSegment/>
      
    </Box>
  );
}

export default App;
