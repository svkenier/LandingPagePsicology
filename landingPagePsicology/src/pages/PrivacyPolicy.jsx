import { 
    Container,
    Typography,
    Box,
    Link,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    ListItemText
  } from '@mui/material';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  import { Link as RouterLink } from 'react-router-dom';
  import { colorsPalette } from '@/styles/colorsPalette';
  
  const PrivacyPolicy = () => {
    const { primary, secondary, text } = colorsPalette();
  
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h2" sx={{ 
          mb: 4,
          color: primary.dark,
          fontWeight: 700,
          fontSize: '2rem'
        }}>
          Política de Privacidad de Protege Tu Psique
        </Typography>
  
        <Typography variant="body1" sx={{ mb: 4, color: text.primary }}>
          Última actualización: {new Date().toLocaleDateString()}
        </Typography>
  
        {/* Responsabilidad principal */}
        <Accordion defaultExpanded sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" sx={{ color: secondary.main }}>
              1. Responsable del Tratamiento
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText
                  primary="Identidad: Protege Tu Psique S.L."
                  secondary="NIF: B12345678"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Dirección:"
                  secondary="Av. Principal, Maracaibo, Venezuela"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Email:"
                  secondary={<Link href="mailto:contacto@protegetupsique.com">contacto@protegetupsique.com</Link>}
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
  
        {/* Finalidades del tratamiento */}
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" sx={{ color: secondary.main }}>
              2. Datos que Recopilamos y Finalidad
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Tipos de datos recopilados:
            </Typography>
            <List dense sx={{ pl: 2 }}>
              <ListItem sx={{ alignItems: 'start' }}>
                <Box sx={{ width: 8, height: 8, bgcolor: primary.main, mt: 1, mr: 2, borderRadius: '50%' }} />
                <ListItemText 
                  primary="Datos identificativos" 
                  secondary="Nombre, email, teléfono" 
                />
              </ListItem>
              <ListItem sx={{ alignItems: 'start' }}>
                <Box sx={{ width: 8, height: 8, bgcolor: primary.main, mt: 1, mr: 2, borderRadius: '50%' }} />
                <ListItemText 
                  primary="Datos de salud" 
                  secondary="Información relevante para la terapia psicológica" 
                />
              </ListItem>
            </List>
            
            <Typography variant="body1" sx={{ mt: 3 }}>
              Finalidades principales:
            </Typography>
            <ul style={{ color: text.primary }}>
              <li>Gestión de citas y terapia</li>
              <li>Comunicación profesional</li>
              <li>Mejora de nuestros servicios</li>
            </ul>
          </AccordionDetails>
        </Accordion>
  
        {/* Derechos del usuario */}
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" sx={{ color: secondary.main }}>
              3. Tus Derechos ARCO
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ 
              backgroundColor: primary.light,
              p: 3,
              borderRadius: 2,
              borderLeft: `4px solid ${primary.dark}`
            }}>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Acceso"
                    secondary="Solicitar información sobre tus datos almacenados"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Rectificación"
                    secondary="Actualizar o corregir información inexacta"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Cancelación"
                    secondary="Solicitar la eliminación de tus datos"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Oposición"
                    secondary="Limitar el uso de tus datos"
                  />
                </ListItem>
              </List>
              <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
                Ejercicio de derechos: Envía solicitud a contacto@protegetupsique.com
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
  
        {/* Cookies */}
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" sx={{ color: secondary.main }}>
              4. Política de Cookies
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Tipos de cookies utilizadas:
            </Typography>
            <Box component="table" sx={{ width: '100%', mb: 2 }}>
              <Box component="tbody">
                <Box component="tr">
                  <Box component="td" sx={{ pr: 2, fontWeight: 500 }}>Esenciales:</Box>
                  <Box component="td">Funcionamiento básico del sitio</Box>
                </Box>
                <Box component="tr">
                  <Box component="td" sx={{ pr: 2, fontWeight: 500 }}>Analíticas:</Box>
                  <Box component="td">Google Analytics (anonimizado)</Box>
                </Box>
              </Box>
            </Box>
            <Link 
              component={RouterLink} 
              to="/politica-cookies"
              sx={{ color: primary.main }}
            >
              Ver política completa de cookies
            </Link>
          </AccordionDetails>
        </Accordion>
  
        {/* Contacto */}
        <Box sx={{ 
          mt: 6,
          p: 4,
          backgroundColor: 'action.hover',
          borderRadius: 2,
          textAlign: 'center'
        }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            ¿Necesitas más información?
          </Typography>
          <Link
            href="mailto:protecciondedatos@protegetupsique.com"
            sx={{
              color: primary.dark,
              fontWeight: 500,
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            Contacta a nuestro Delegado de Protección de Datos
          </Link>
        </Box>
  
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Link 
            component={RouterLink} 
            to="/"
            sx={{
              color: text.secondary,
              '&:hover': {
                color: primary.main
              }
            }}
          >
            ← Volver al inicio
          </Link>
        </Box>
      </Container>
    );
  };
  
  export default PrivacyPolicy;