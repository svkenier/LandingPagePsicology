import { Box, Stack } from "@mui/material";
import { InformationSkills } from "./InformationSkills";
import { PictureSkills } from "../skills/PictureSkills";
import { WorkMethodology } from "./WorkMethodology";

export const SkillsSegment = () => {
  return (
    <Box
      component="section"
      id="skillsSection"
      sx={{ width: "100%", display: "flex", height: "100vh" }}
    >
      <InformationSkills />

      <Stack sx={{ width: "25%" }}>
        <PictureSkills />
        <WorkMethodology />
      </Stack>
    </Box>
  );
};
