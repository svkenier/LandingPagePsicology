import {
  Typography,
  CardMedia,
  CardContent,
  Card,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";

export const CardCustom = ({ card }) => {
  CardCustom.propTypes = {
    card: PropTypes.object.isRequired,
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.12)',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: 4,
          pb: 2,
        }}
      >
        <CardMedia
          component="img"
          image={card.image}
          alt={card.title}
          sx={{
            height: 120,
            width: 'auto',
            objectFit: 'contain',
          }}
        />
      </Box>
      
      <CardContent sx={{ flexGrow: 1, textAlign: 'center', px: 3, pb: 3 }}>
        <Typography
          gutterBottom
          variant="h4"
          component="h3"
          color="text.secondary"
          sx={{ 
            fontWeight: 600,
            mb: 1.5,
          }}
        >
          {card.title}
        </Typography>
        
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ 
            lineHeight: 1.6,
            fontSize: '0.95rem',
          }}
        >
          {card.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
