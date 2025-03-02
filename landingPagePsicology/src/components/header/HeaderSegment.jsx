import { Box } from "@mui/material";
import { InformationHeader } from "./InformationHeader";
import { PictureHeader } from "./PictureHeader";

export const HeaderSegment = () => {
  return (
    <Box
      component="section"
      id="headerSection"
      sx={{ width: "100%", height: "90vh", display: "flex", padding: "1rem" }}
    >
      <InformationHeader />
      <PictureHeader />
    </Box>
  );
};
