import { Box, CssBaseline, ThemeProvider, Container } from "@mui/material";
import { NavSegment } from "./components/nav/NavSegment";
import { HeaderSegment } from "./components/header/HeaderSegment";
import { useHandleMenu } from "./hooks/useHandleMenu";
import { AboutUsSegment } from "./components/aboutUs/AboutUsSegment";
import { SkillsSegment } from "./components/skills/SkillsSegment";
import { ServicesSegment } from "./components/myServices/ServicesSegment";
import { FormSegment } from "./components/form/FormSegment";
import PropTypes from "prop-types";
import { FooterSegment } from "./components/footer/footerSegment";
import { theme } from "./styles/theme";
import { FormProvider } from "./hooks/useDataForm";


function App() {
  const { handleActiveMenu, activeMenu } = useHandleMenu();

  App.propTypes = {
    handleActiveMenu: PropTypes.func.isRequired,
    activeMenu: PropTypes.bool.isRequired,
  };

  return (
    <ThemeProvider theme={theme}>
      <FormProvider>
        <CssBaseline />
        <Box sx={{ backgroundColor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
          <NavSegment handleActiveMenu={handleActiveMenu} activeMenu={activeMenu} />
          <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
            <HeaderSegment />
            <AboutUsSegment />
            <SkillsSegment />
            <ServicesSegment />
            <FormSegment />
          </Container>
          <FooterSegment />
        </Box>
      </FormProvider>
    </ThemeProvider>
  );
}

export default App;
