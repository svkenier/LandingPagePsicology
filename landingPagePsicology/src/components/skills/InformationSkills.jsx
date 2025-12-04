import { Stack, Typography, Box, Grid } from "@mui/material";
import { CardOfList } from "./CardOfList";
import { contentLists } from "@/assets/contentManagement/contentLists";

export const InformationSkills = () => {
  const { listSkills } = contentLists();

  return (
    <Stack spacing={{ xs: 3, sm: 4 }}>
      <Typography 
        variant="h2" 
        component="h2" 
        color="primary.main" 
        sx={{ fontWeight: 700 }}
      >
        Mi trayectoria profesional
      </Typography>
      
      <Typography
        variant="body1"
        component="p"
        color="text.primary"
        sx={{ 
          fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.2rem' },
          lineHeight: 1.7,
        }}
      >
        Mi nombre es Carlos Torres, soy psicólogo clínico federado en Venezuela.
        He dedicado mi carrera a fusionar el rigor académico con un enfoque
        humano y empático.
      </Typography>

      <Box sx={{ mt: { xs: 2, md: 3 } }}>
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {listSkills.map((skill, index) => (
            <Grid item xs={12} key={index}>
              <CardOfList skill={skill} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};
