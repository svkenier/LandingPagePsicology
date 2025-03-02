import { Stack, Typography, Box } from "@mui/material";
import { CardOfList } from "./CardOfList";
import { colorsPalette } from "@/styles/colorsPalette";
import { contentLists } from "@/assets/contentManagement/contentLists";

export const InformationSkills = () => {
  const { primary, text } = colorsPalette();

  const { listSkills } = contentLists();

  return (
    <Stack sx={{ width: "75%", padding: "2rem 1rem" }}>
      <Typography variant="h4" component="h4" color={primary}>
        Mi trayectoria profesional
      </Typography>
      <Typography
        variant="body1"
        component="p"
        color={text}
        sx={{ fontSize: "1.5rem", paddingTop: "1.5rem"  }}
      >
        Mi nombre es Carlos Torres. soy psicólogo clínico federado en Venezuela,
        he dedicado mi carrera a fusionar el rigor académico con un enfoque
        humano y empático.
      </Typography>

      <Box sx={{ width: "100%", display: "flex", marginTop: "1rem" }}>
        {listSkills.map((skill, index) => (
          <CardOfList key={index} skill={skill} />
        ))}
      </Box>
    </Stack>
  );
};
