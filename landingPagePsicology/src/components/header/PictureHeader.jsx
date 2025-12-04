import { Box } from "@mui/material";
import profilePicture from "@/assets/images/profilePitureHD.png";

export const PictureHeader = () => {
  return (
    <Box 
      sx={{ 
        height: { xs: 'auto', md: '100%' }, 
        width: { xs: '100%', md: '45%' }, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'relative',
        mt: { xs: 4, md: 0 },
      }}
    >
      {/* Decorative borders - hidden on mobile for minimalist look */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          height: '80%',
          width: '80%',
          position: 'absolute',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            height: '85%',
            width: '2px',
            bgcolor: 'primary.main',
            position: 'absolute',
            left: '10%',
            top: '0',
          }}
        />
        <Box
          sx={{
            height: '2px',
            width: '70%',
            bgcolor: 'primary.main',
            position: 'absolute',
            bottom: '15%',
            right: '0',
          }}
        />
      </Box>
      
      <Box 
        component="img"
        src={profilePicture}
        alt="Psicólogo profesional"
        sx={{
          height: { xs: 'auto', md: '85%' },
          width: { xs: '75%', sm: '60%', md: '90%' },
          maxWidth: 500,
          objectFit: 'contain',
          position: 'relative',
          zIndex: 1,
        }}
      />
    </Box>
  );
};
