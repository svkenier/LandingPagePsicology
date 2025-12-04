import { Box } from "@mui/material";
import profilePicture from "@/assets/images/profilePitureHD.png";

export const PictureSkills = () => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src={profilePicture}
        alt="Carlos Torres - Psicólogo"
        sx={{
          width: '100%',
          maxWidth: 300,
          height: 'auto',
          objectFit: 'cover',
          borderRadius: 2,
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        }}
      />
    </Box>
  );
};
