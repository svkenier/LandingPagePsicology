import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import profilePicture from "@/assets/images/profilePiture2HD.jpg";
import { useHandleScroll } from "@/hooks/useHandleScroll";

export const HeaderSegment = () => {
  const { handleScroll } = useHandleScroll();

  return (
    <Box
      component="section"
      id="Inicio"
      sx={{
        width: "100%",
        minHeight: { xs: 'auto', md: '90vh' },
        py: { xs: 4, sm: 5, md: 6 },
        scrollMarginTop: '100px',
      }}
    >
      <Grid container spacing={2}>
        {/* Large Hero Card - Left Side */}
        <Grid item xs={12} md={7}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, sm: 5, md: 6 },
              height: '100%',
              minHeight: { xs: 'auto', md: '500px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #005A8C 0%, #3C80A6 100%)',
              color: '#fff',
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 1.1,
                color: '#fff',
              }}
            >
              CONSULTA PSICOLÓGICA ONLINE
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                lineHeight: 1.7,
                mb: 4,
                color: '#fff',
                opacity: 0.95,
              }}
            >
              Terapia online segura y confidencial, diseñada para cuidar de ti en cada
              paso. Encuentra calma, claridad y herramientas para vivir en equilibrio.
            </Typography>

            <Box>
              <Button
                variant="contained"
                size="large"
                onClick={(e) => handleScroll(e, "Contacto")}
                sx={{
                  bgcolor: '#fff',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Agendar sesión inicial
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Right Side - Stacked Cards */}
        <Grid item xs={12} md={5}>
          <Grid container spacing={3} sx={{ height: '100%' }}>
            {/* Image Card - Top */}
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  height: { xs: '300px', md: '480px' },
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Box
                  component="img"
                  src={profilePicture}
                  alt="Psicólogo profesional"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '0% 40%',
                  }}
                />
              </Paper>
            </Grid>

            {/* Info Card - Bottom */}
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 2 },
                  height: '100%',
                  minHeight: { xs: 'auto', md: '100px' },
                  bgcolor: 'secondary.main',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
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
                  Atención Profesional
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6,
                  }}
                >
                  Psicólogo clínico federado con maestría en Psicología Clínica
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
