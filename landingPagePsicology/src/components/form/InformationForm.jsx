import { Stack, Typography } from "@mui/material";

export const InformationForm = () => {
  return (
    <Stack spacing={2} sx={{ mb: 4 }}>
      <Typography 
        variant="h2" 
        component="h2" 
        color="primary.main"
        sx={{ fontWeight: 700 }}
      >
        Agenda tu cita
      </Typography>
      
      <Typography 
        variant="body1" 
        color="text.primary" 
        sx={{ 
          fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.2rem' },
          lineHeight: 1.7,
        }}
      >
        Completa el formulario y nos pondremos en contacto contigo para
        confirmar tu sesión.
      </Typography>
    </Stack>
  );
};
