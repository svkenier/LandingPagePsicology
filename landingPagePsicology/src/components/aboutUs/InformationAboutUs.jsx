import { Stack, Typography, Grid } from "@mui/material";
import { CardCustom } from "./CardCustom";
import { contentLists } from "@/assets/contentManagement/contentLists";

export const InformationAboutUs = () => {
  const { listsCards } = contentLists();
  
  return (
    <Stack spacing={{ xs: 4, sm: 5, md: 6 }} sx={{ width: '100%' }}>
      <Typography
        variant="h2"
        component="h2"
        color="primary.main"
        sx={{ 
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        ¿Qué es Protege Tu Psique?
      </Typography>
      
      <Stack spacing={3} sx={{ px: { xs: 2, sm: 3, md: 0 } }}>
        <Typography
          variant="body1"
          component="p"
          color="text.secondary"
          sx={{ 
            fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.25rem' },
            lineHeight: 1.7,
            textAlign: 'center',
          }}
        >
          Un espacio especializado en bienestar emocional, donde la psicología se
          convierte en tu aliada para potenciar tu resiliencia y construir una
          vida equilibrada.
        </Typography>
        
        <Typography
          variant="body1"
          component="p"
          color="text.secondary"
          sx={{ 
            fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.25rem' },
            lineHeight: 1.7,
            textAlign: 'center',
          }}
        >
          En Protege Tu Psique, brindamos terapia psicológica online
          personalizada, centrada en el cuidado integral de tu salud mental.
          Nuestro enfoque combina métodos basados en evidencia científica con
          herramientas prácticas, diseñadas para ayudarte a:
        </Typography>
      </Stack>

      <Grid 
        container 
        spacing={{ xs: 3, sm: 4, md: 5 }}
        justifyContent="center"
        sx={{ mt: { xs: 2, md: 4 } }}
      >
        {listsCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardCustom card={card} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
