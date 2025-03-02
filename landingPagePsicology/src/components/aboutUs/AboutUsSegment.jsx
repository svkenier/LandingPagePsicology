import { Box } from "@mui/material";
import { InformationAboutUs } from "./InformationAboutUs";
import { colorsPalette } from "@/styles/colorsPalette";

export const AboutUsSegment = () => {
  const { secondary } = colorsPalette();

  return (
    <Box
      bgcolor={secondary}
      component="section"
      id="aboutUsSection"
      sx={{
        width: "100%",
        height: "100vh",
        padding: "1rem",
        backgroundImage: "linear-gradient(0deg, #055a8c 10%, #add8e6 90%)",
      }}
    >
      <InformationAboutUs />
    </Box>
  );
};
