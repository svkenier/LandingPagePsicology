import { Box, Grid, Typography, Paper } from "@mui/material";
import { contentLists } from "@/assets/contentManagement/contentLists";

export const AboutUsSegment = () => {
  const { listsCards } = contentLists();

  return (
    <Box
      component="section"
      id="Sobre el psicologo"
      sx={{
        width: "100%",
        py: { xs: 4, sm: 5, md: 6 },
        scrollMarginTop: '100px',
      }}
    >
      {/* Title Card */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4 },
          mb: 3,
          background: 'linear-gradient(180deg, #ADD8E6 0%, #005A8C 100%)',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 800,
            color: '#fff',
            mb: 2,
          }}
        >
          ¿Qué es Protege Tu Psique?
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1.1rem', sm: '1.2rem' },
            lineHeight: 1.7,
            color: '#fff',
            maxWidth: '900px',
            mx: 'auto',
            opacity: 0.95,
          }}
        >
          Un espacio especializado en bienestar emocional, donde la psicología se
          convierte en tu aliada para potenciar tu resiliencia y construir una
          vida equilibrada.
        </Typography>
      </Paper>

      {/* Bento Grid for Cards */}
      <Grid container spacing={3}>
        {/* Large Description Card */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, sm: 5 },
              height: '100%',
              minHeight: { xs: 'auto', md: '400px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              bgcolor: '#fff',
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
              Nuestro Enfoque
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.05rem', sm: '1.15rem' },
                lineHeight: 1.8,
                color: 'text.primary',
              }}
            >
              En Protege Tu Psique, brindamos terapia psicológica online
              personalizada, centrada en el cuidado integral de tu salud mental.
              Nuestro enfoque combina métodos basados en evidencia científica con
              herramientas prácticas, diseñadas para ayudarte a:
            </Typography>
          </Paper>
        </Grid>

        {/* Three Feature Cards - Bento Style */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {listsCards.map((card, index) => (
              <Grid item xs={12} sm={index === 0 ? 12 : 6} md={12} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    minHeight: index === 0 ? '180px' : '140px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    bgcolor: index === 0 ? 'secondary.main' : '#fff',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={card.image}
                    alt={card.title}
                    sx={{
                      width: 80,
                      height: 80,
                      objectFit: 'contain',
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: 'text.secondary',
                        mb: 0.5,
                        fontSize: '1.1rem',
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.primary',
                        lineHeight: 1.5,
                      }}
                    >
                      {card.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
