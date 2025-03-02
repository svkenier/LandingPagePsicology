import { Box, CardMedia } from "@mui/material";
import profilePicture from "@/assets/images/profilePitureHD.png";
import { colorsPalette } from "@/styles/colorsPalette";

export const PictureHeader = () => {
  const { primary } = colorsPalette();

  return (
    <Box sx={{ height: "100%", width: "40%" }}>
      <Box
        sx={{
          height: "86%",
          width: "34%",
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            height: "85%",
            width: "25%",
            border: `solid ${primary}`,
            margin: "2% 0 0 14% ",
          }}
        ></Box>
        <Box
          sx={{
            height: "70%",
            width: "25%",
            border: `solid ${primary}`,
            display: "flex",
            alignSelf: "flex-end",
            margin: "0 2%  2% 0",
          }}
        ></Box>
      </Box>
      <Box sx={{ height: "100%", width: "100%", position: "relative" }}>
        <CardMedia
          component={"img"}
          title="profilePicture"
          image={profilePicture}
          sx={{
            height: "90%",
            width: "100%",
            objectFit: "contain",
            display: "flex",
            marginTop: "5%",
          }}
        />
      </Box>
    </Box>
  );
};
