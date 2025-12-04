import { Stack, Typography, Box, Button, Grid } from "@mui/material";
import { CardServices } from "./CardServices";
import { contentLists } from "@/assets/contentManagement/contentLists";
import { useHandleScroll } from "@/hooks/useHandleScroll";

export const ShowServices = () => {
  const { listServices } = contentLists();
  const { handleScroll } = useHandleScroll();

  return (
    <Stack spacing={{ xs: 3, sm: 4 }}>
      <Typography 
        variant="h2" 
        component="h2" 
        color="primary.main" 
        sx={{ fontWeight: 700 }}
      >
        Servicios de Terapia Individual
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
        Encuentra el formato que mejor se adapte a tus necesidades:
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {listServices.map((informationCard, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <CardServices informationCard={informationCard} />
          </Grid>
        ))}
      </Grid>

      <Stack spacing={2.5} sx={{ mt: { xs: 2, md: 3 } }}>
        <Typography 
          variant="h4" 
          component="h3" 
          color="text.secondary" 
          sx={{ fontWeight: 600 }}
        >
          Elige tu modalidad y comienza tu camino hacia el equilibrio emocional
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            gap: 2, 
            flexDirection: { xs: 'column', sm: 'row' },
            flexWrap: 'wrap',
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={(e) => handleScroll(e, "Contacto", "Presencial")}
            sx={{ 
              flex: { xs: '1 1 100%', sm: '1 1 auto' },
              minWidth: { sm: 220 },
            }}
          >
            Reserva tu primera sesión presencial
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={(e) => handleScroll(e, "Contacto", "Online")}
            sx={{ 
              flex: { xs: '1 1 100%', sm: '1 1 auto' },
              minWidth: { sm: 220 },
            }}
          >
            Agenda consulta online
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};
