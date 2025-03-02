import { Box, Stack, Typography } from "@mui/material";
import { colorsPalette } from "@/styles/colorsPalette";
import { CardCustom } from "./CardCustom";
import { contentLists } from "@/assets/contentManagement/contentLists";

export const InformationAboutUs = () => {
  const { primary, textSecondary } = colorsPalette();

  const { listsCards } = contentLists();
  return (
    <Stack spacing={2}>
      <Typography
        variant="h4"
        component="h2"
        color={primary}
        sx={{ textAlign: "center" }}
      >
        ¿Que es protege tu psique?
      </Typography>
      <Typography
        variant="body1"
        component="p"
        color={textSecondary}
        sx={{ fontSize: "1.3rem", paddingTop: "1.5rem" }}
      >
        Un espacio especializado en bienestar emocional, donde la psicología se
        convierte en tu aliada para potenciar tu resiliencia y construir una
        vida equilibrada.
      </Typography>
      <Typography
        variant="body1"
        component="p"
        color={textSecondary}
        sx={{ fontSize: "1.3rem" }}
      >
        En Protege Tu Psique, brindamos terapia psicológica online
        personalizada, centrada en el cuidado integral de tu salud mental.
        Nuestro enfoque combina métodos basados en evidencia científica con
        herramientas prácticas, diseñadas para ayudarte a:
      </Typography>

      <Box sx={{ display: "flex" }}>
        {listsCards.map((card, index) => {
          return <CardCustom key={index} card={card} />;
        })}
      </Box>
    </Stack>
  );
};
