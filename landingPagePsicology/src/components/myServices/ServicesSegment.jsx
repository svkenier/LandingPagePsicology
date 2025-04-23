import { Box } from "@mui/material";
import { ShowServices } from "./ShowServices";
import { InformationServices } from "./InformationServices";

export const ServicesSegment = () => {
  return (
    <Box
      component="section"
      id="Servicios"
      sx={{ width: "100%", display: "flex", height: "100vh" }}
    >
      <ShowServices />
      <InformationServices />
    </Box>
  );
};
