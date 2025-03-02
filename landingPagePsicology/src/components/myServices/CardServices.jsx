import {
  Stack,
  Typography,
  CardMedia,
  Card,
  CardActionArea,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import { colorsPalette } from "@/styles/colorsPalette";

export const CardServices = ({ informationCard }) => {
  CardServices.propTypes = {
    informationCard: PropTypes.object.isRequired,
  };

  const { text, textSecondary,secondary } = colorsPalette();

  return (
    <Card
      sx={{
        border: `solid ${secondary} 1.5px`,
        borderRadius: "0.4rem",
        alignItemsc: "center",
        margin: "1rem",
        padding: "1rem",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <CardActionArea sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" color={textSecondary}>
          {informationCard.title}
        </Typography>

        <Box
          sx={{
            height: "30%",
            width: "40%",
            objectFit: "contain",
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={informationCard.image}
            alt="imagen card"
            sx={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </Box>

        <Stack sx={{ width: "100%" }}>
          {informationCard.info.map((textCard, index) => (
            <Typography
              key={index}
              variant="body1"
              color={text}
              fontSize={"0.8rem"}
              margin={"0.5rem"}
            >
              {textCard}
            </Typography>
          ))}
        </Stack>
      </CardActionArea>
    </Card>
  );
};
