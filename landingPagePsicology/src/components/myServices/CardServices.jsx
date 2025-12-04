import { Stack, Typography, Card, CardMedia, Box } from "@mui/material";
import PropTypes from "prop-types";

export const CardServices = ({ informationCard }) => {
  CardServices.propTypes = {
    informationCard: PropTypes.object.isRequired,
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.12)',
        },
      }}
    >
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Typography 
          variant="h4" 
          color="text.secondary" 
          sx={{ 
            fontWeight: 700, 
            mb: 2, 
            textAlign: 'center',
          }}
        >
          {informationCard.title}
        </Typography>

        <Box 
          sx={{ 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            my: 2,
          }}
        >
          <CardMedia
            component="img"
            image={informationCard.image}
            alt={informationCard.title}
            sx={{ 
              width: { xs: '70%', sm: '60%' }, 
              height: 'auto', 
              objectFit: 'contain',
            }}
          />
        </Box>

        <Stack spacing={1.5} sx={{ flexGrow: 1 }}>
          {informationCard.info.map((textCard, index) => (
            <Typography 
              key={index} 
              variant="body2" 
              color="text.primary" 
              sx={{ 
                fontSize: '0.95rem',
                lineHeight: 1.6,
              }}
            >
              {textCard}
            </Typography>
          ))}
        </Stack>
      </Box>
    </Card>
  );
};
