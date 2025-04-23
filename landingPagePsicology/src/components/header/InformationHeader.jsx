import { Stack, Typography, Button, Box } from "@mui/material";
import { colorsPalette } from "@/styles/colorsPalette";
import { useHandleScroll } from "@/hooks/useHandleScroll";

export const InformationHeader = () => {

const {handleScroll} = useHandleScroll()

  const { text, textSecondary, primary } = colorsPalette();
  return (
    <Stack
      sx={{
        display: "flex",
        width: "60%",
        height: "100%",
        justifyContent: "center",
      }}
      spacing={2}
    >
      <Typography
        variant="h3"
        component="h1"
        color={textSecondary}
        sx={{ display: "flex", alignSelf: "center" }}
      >
        CONSULTA PSICOLÓGICA ONLINE
      </Typography>
      <Typography
        variant="body1"
        component="p"
        color={text}
        sx={{
          display: "flex",
          alignSelf: "center",
          width: "90%",
          marginBottom: "10px",
          fontSize: "1.6rem",
        }}
      >
        Terapia online segura y confidencial, diseñada para cuidar de ti en cada
        paso. Encuentra calma, claridad y herramientas para vivir en equilibrio.
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "8%",
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{ bgcolor: `${primary}`, width: "50%", height: "3.5rem" }}
          onClick={(e)=>{ handleScroll(e, "Contacto")}}
        >
          Agendar sesión inicial
        </Button>
      </Box>
    </Stack>
  );
};
