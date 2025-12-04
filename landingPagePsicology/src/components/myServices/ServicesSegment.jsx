import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import { contentLists } from "@/assets/contentManagement/contentLists";
import { useHandleScroll } from "@/hooks/useHandleScroll";

export const ServicesSegment = () => {
  const { listServices, sesionContent, keyBenefits } = contentLists();
  const { handleScroll } = useHandleScroll();

  return (
    <Box
      component="section"
      id="Servicios"
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
              background: 'linear-gradient(135deg, #005A8C 0%, #3C80A6 100%)',
              color: '#fff',
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                color: '#fff',
              }}
            >
              Servicios de Terapia Individual
            </Typography>
          </Paper>
        </Grid>

        {/* Service Cards - Bento Style */}
        {listServices.map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, sm: 5 },
                height: '100%',
                minHeight: { xs: 'auto', md: '400px' },
                display: 'flex',
                flexDirection: 'column',
                bgcolor: index === 0 ? 'secondary.main' : '#fff',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 2,
                }}
              >
                {service.title}
              </Typography>

              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: '100%',
                  maxWidth: 200,
                  height: 'auto',
                  mx: 'auto',
                  my: 3,
                  objectFit: 'contain',
                }}
              />

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {service.info.map((text, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    sx={{
                      color: 'text.primary',
                      lineHeight: 1.6,
                    }}
                  >
                    {text}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}

        {/* Session Content - Tall Card */}
        <Grid item xs={12} md={5}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              height: '100%',
              minHeight: { xs: 'auto', md: '450px' },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 3,
              }}
            >
              ¿Qué incluye cada sesión?
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {sesionContent.map(({ title, Info }, index) => (
                <Box key={index}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: '#2d3436',
                      mb: 0.5,
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#5c5c5c',
                      lineHeight: 1.6,
                    }}
                  >
                    {Info}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Benefits - Grid of Small Cards */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            {keyBenefits.map(({ icon, title, Info }, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    minHeight: '140px',
                    display: 'flex',
                    gap: 2,
                    bgcolor: index % 2 === 0 ? '#fff' : 'secondary.main',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box sx={{ flexShrink: 0, mt: 0.5 }}>{icon}</Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        color: 'text.secondary',
                        mb: 0.5,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.primary',
                        lineHeight: 1.5,
                      }}
                    >
                      {Info}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* CTA Card */}
        <Grid item xs={12}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, sm: 5 },
              background: 'linear-gradient(135deg, #3C80A6 0%, #005A8C 100%)',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: '#fff',
              }}
            >
              Elige tu modalidad y comienza tu camino hacia el equilibrio emocional
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={(e) => handleScroll(e, "Contacto")}
                sx={{
                  bgcolor: '#fff',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                  },
                }}
              >
                Reserva sesión presencial
              </Button>
              <Button
                variant="contained"
                size="large"
                onClick={(e) => handleScroll(e, "Contacto")}
                sx={{
                  bgcolor: '#fff',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                  },
                }}
              >
                Agenda consulta online
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
