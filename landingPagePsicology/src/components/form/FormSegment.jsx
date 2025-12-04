import { Box, Grid, Typography, Paper } from "@mui/material";
import { AppointmentForm } from "./AppointmentForm";
import { contentLists } from "@/assets/contentManagement/contentLists";

export const FormSegment = () => {
  const { listConditionsForm } = contentLists();

  return (
    <Box
      component="section"
      id="Contacto"
      sx={{
        width: "100%",
        py: { xs: 4, sm: 5, md: 6 },
        scrollMarginTop: '100px',
      }}
    >
      <Grid container spacing={2}>
        {/* Title Card */}
        <Grid item xs={12}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              bgcolor: 'primary.main',
              color: '#fff',
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 1,
                color: '#fff',
              }}
            >
              Agenda tu cita
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                color: '#fff',
                opacity: 0.95,
              }}
            >
              Completa el formulario y nos pondremos en contacto contigo para confirmar tu sesión.
            </Typography>
          </Paper>
        </Grid>

        {/* Form Card - Large */}
        <Grid item xs={12} md={7}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              height: '100%',
            }}
          >
            <AppointmentForm />
          </Paper>
        </Grid>

        {/* Conditions Cards - Stacked */}
        <Grid item xs={12} md={5}>
          <Grid container spacing={2}>
            {listConditionsForm.map(({ title, description }, index) => (
              <Grid item xs={12} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    minHeight: '140px',
                    bgcolor: index === 1 ? 'secondary.main' : '#fff',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1.5,
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.primary',
                      lineHeight: 1.6,
                    }}
                  >
                    {description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
