import { Box, Grid, Typography, Paper } from "@mui/material";
import { contentLists } from "@/assets/contentManagement/contentLists";
import profilePicture from "@/assets/images/profilePitureHD.png";

export const SkillsSegment = () => {
  const { listSkills, listMethology } = contentLists();

  return (
    <Box
      component="section"
      id="skillsSection"
      sx={{
        width: "100%",
        py: { xs: 4, sm: 5, md: 6 },
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
                color: '#fff',
              }}
            >
              Mi trayectoria profesional
            </Typography>
          </Paper>
        </Grid>

        {/* Large Intro Card */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, sm: 5 },
              height: '100%',
              minHeight: { xs: 'auto', md: '200px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                lineHeight: 1.8,
                color: 'text.primary',
              }}
            >
              Mi nombre es Carlos Torres, soy psicólogo clínico federado en Venezuela.
              He dedicado mi carrera a fusionar el rigor académico con un enfoque
              humano y empático.
            </Typography>
          </Paper>
        </Grid>

        {/* Profile Image Card */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              height: '100%',
              minHeight: { xs: '300px', md: '200px' },
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src={profilePicture}
              alt="Carlos Torres"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Paper>
        </Grid>

        {/* Credentials Card - Larger */}
        <Grid item xs={12} md={7}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              height: '100%',
              minHeight: { xs: 'auto', md: '350px' },
              bgcolor: 'secondary.main',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: '#2d3436',
                mb: 3,
              }}
            >
              {listSkills[0]?.title}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {listSkills[0]?.skills.map(({ icon, subTitle, info }, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                  }}
                >
                  <Box sx={{ mt: 0.3, flexShrink: 0 }}>{icon}</Box>
                  <Box>
                    {subTitle && (
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 700,
                          color: 'text.secondary',
                          mb: 0.5,
                        }}
                      >
                        {subTitle}
                      </Typography>
                    )}
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.primary',
                        lineHeight: 1.6,
                      }}
                    >
                      {info}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Intervention Areas Card */}
        <Grid item xs={12} md={5}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              height: '100%',
              minHeight: { xs: 'auto', md: '350px' },
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
              {listSkills[1]?.title}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {listSkills[1]?.skills.map(({ icon, info }, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                  }}
                >
                  <Box sx={{ mt: 0.3, flexShrink: 0 }}>{icon}</Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.primary',
                      lineHeight: 1.6,
                    }}
                  >
                    {info}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Methodology Cards - Three Small Cards */}
        {listMethology.map(({ title, info }, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                minHeight: '140px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                bgcolor: index === 1 ? 'primary.main' : '#fff',
                color: index === 1 ? '#fff' : 'inherit',
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
                  mb: 1.5,
                  color: index === 1 ? '#fff' : 'primary.main',
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  lineHeight: 1.6,
                  color: index === 1 ? 'rgba(255,255,255,0.95)' : 'text.primary',
                }}
              >
                {info}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
