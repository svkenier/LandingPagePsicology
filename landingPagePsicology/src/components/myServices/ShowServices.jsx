import { Stack, Typography, Box, Button } from "@mui/material";
import { CardServices } from "./CardServices";
import { colorsPalette } from "@/styles/colorsPalette";
import { contentLists } from "@/assets/contentManagement/contentLists";

export const ShowServices = () => {
  const { listServices } = contentLists();

  const { primary, text, textSecondary } = colorsPalette();

  return (
    <Stack sx={{ width: "70%" }}>
      <Typography
        marginLeft={"1rem"}
        variant="h4"
        component="h2"
        color={primary}
      >
        Servicios de Terapia Individual
      </Typography>
      <Typography
        margin={"0.5rem"}
        variant="body1"
        component="p"
        fontSize={"1.3rem"}
        color={text}
      >
        Encuentra el formato que mejor se adapte a tus necesidades:
      </Typography>

      <Box sx={{ display: "flex" }}>
        {listServices.map((informationCard, index) => (
          <CardServices key={index} informationCard={informationCard} />
        ))}
      </Box>

      <Stack spacing={1.5} padding={1.5}>
        <Typography
          variant="h5"
          component="h3"
          color={textSecondary}
          fontSize={"1.3rem"}
        >
          Elije tu modalidad y comienza tu camino hacia el equilibrio emocional
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 2rem",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: `${primary}`,
              fontSize: "0.6rem",
              padding: "0.9rem",
              width: "40%",
            }}
          >
            Reserva tu primera sesión presencial
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: `${primary}`,
              fontSize: "0.6rem",
              padding: "0.9rem",
              width: "40%",
            }}
          >
            Agenda consulta online
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};
