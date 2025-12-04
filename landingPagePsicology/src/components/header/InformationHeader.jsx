import { Stack, Typography, Button, Box } from "@mui/material";
import { useHandleScroll } from "@/hooks/useHandleScroll";

export const InformationHeader = () => {
  const { handleScroll } = useHandleScroll();

  return (
    <Stack
      sx={{
        display: "flex",
        width: { xs: '100%', md: '55%' },
        height: "100%",
        justifyContent: "center",
        gap: { xs: 2, sm: 3 },
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        color="text.secondary"
        sx={{ 
          textAlign: { xs: 'center', md: 'left' },
          fontWeight: 700,
        }}
      >
        CONSULTA PSICOLÓGICA ONLINE
      </Typography>
      
      <Typography
        variant="body1"
        component="p"
        color="text.primary"
        sx={{
          textAlign: { xs: 'center', md: 'left' },
          fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.25rem' },
          lineHeight: 1.7,
          maxWidth: { md: '90%' },
        }}
      >
        Terapia online segura y confidencial, diseñada para cuidar de ti en cada
        paso. Encuentra calma, claridad y herramientas para vivir en equilibrio.
      </Typography>
      
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: { xs: 'center', md: 'flex-start' },
          pt: { xs: 2, md: 3 },
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={(e) => { handleScroll(e, "Contacto") }}
          sx={{ 
            width: { xs: '100%', sm: '70%', md: '60%' },
            maxWidth: 400,
            height: { xs: '3rem', sm: '3.5rem' },
            fontSize: { xs: '0.95rem', sm: '1rem' },
            fontWeight: 600,
          }}
        >
          Agendar sesión inicial
        </Button>
      </Box>
    </Stack>
  );
};
