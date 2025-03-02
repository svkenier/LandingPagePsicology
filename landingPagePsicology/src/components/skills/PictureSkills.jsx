import { Box, CardMedia } from "@mui/material";
import profilePicture from "@/assets/images/profilePitureHD.png";
import { colorsPalette } from "@/styles/colorsPalette";

export const PictureSkills = () => {
  const { primary } = colorsPalette();

  return (
    <Box
      sx={{
        height: "40%",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: "1rem",
      }}
    >
      <Box
        sx={{
          height: "39%",
          width: "14%",
          position: "absolute",
          display: "flex",
          justifySelf: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            height: "75%",
            width: "25%",
            border: `solid ${primary}`,
            margin: "3% 0 0 6% ",
          }}
        ></Box>
        <Box
          sx={{
            height: "65%",
            width: "25%",
            border: `solid ${primary}`,
            display: "flex",
            alignSelf: "flex-end",
            margin: "0 8%  2% 0",
          }}
        ></Box>
      </Box>
      <Box sx={{ height: "85%", width: "100%", position: "relative" }}>
        <CardMedia
          component={"img"}
          title="profilePicture"
          image={profilePicture}
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
            display: "flex",
          }}
        />
      </Box>
    </Box>
  );
};
