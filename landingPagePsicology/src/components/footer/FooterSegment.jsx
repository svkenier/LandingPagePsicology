import { Box, Container, Grid, Typography, Stack, Link, Divider } from "@mui/material";
import { ContactDropDawn } from "./ContactDropDawn";
import { contentLists } from "@/assets/contentManagement/contentLists";
import { useHandleScroll } from "@/hooks/useHandleScroll";

export const FooterSegment = () => {
  const { listQuickLinks, listLegalLinks, listSocialMedia } = contentLists();
  const { handleScroll } = useHandleScroll();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        py: { xs: 2, md: 2.5 },
        mt: 'auto',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="flex-start">
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700, 
                mb: 1, 
                color: '#fff',
                pb: 0.5,
                borderBottom: '2px solid #ADD8E6',
                display: 'inline-block',
                fontSize: '1rem',
              }}
            >
              Protege Tu Psique
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.5, color: '#fff', opacity: 0.9, fontSize: '0.85rem' }}>
              Espacio especializado en bienestar emocional, donde la psicología se
              convierte en tu aliada para potenciar tu resiliencia.
            </Typography>
          </Grid>

          {/* Quick Links - Horizontal */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700, 
                mb: 1, 
                color: '#fff',
                pb: 0.5,
                borderBottom: '2px solid #ADD8E6',
                display: 'inline-block',
                fontSize: '1rem',
              }}
            >
              Enlaces Rápidos
            </Typography>
            <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
              {listQuickLinks?.map((link, index) => (
                <Link
                  key={index}
                  component="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(e, link);
                  }}
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    opacity: 0.9,
                    fontSize: '0.85rem',
                    transition: 'opacity 0.3s',
                    '&:hover': {
                      opacity: 1,
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Social Media - Compact */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700, 
                mb: 1, 
                color: '#fff',
                pb: 0.5,
                borderBottom: '2px solid #ADD8E6',
                display: 'inline-block',
                fontSize: '1rem',
              }}
            >
              Síguenos
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              {listSocialMedia?.map(({ icon, title, link }, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Box sx={{ opacity: 0.9, fontSize: '1.2rem' }}>{icon}</Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#fff', fontSize: '0.85rem' }}>
                    {title}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 1.5, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Bottom Section - Single Line */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2" sx={{ opacity: 0.9, color: '#fff', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Protege Tu Psique. Todos los derechos reservados.
          </Typography>
          
          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            {listLegalLinks?.map((link, index) => (
              <Link
                key={index}
                href="#"
                sx={{
                  color: '#fff',
                  textDecoration: 'none',
                  opacity: 0.8,
                  fontSize: '0.8rem',
                  '&:hover': {
                    opacity: 1,
                    textDecoration: 'underline',
                  },
                }}
              >
                {link}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>

      <ContactDropDawn />
    </Box>
  );
};
