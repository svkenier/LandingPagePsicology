import {
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
  Card,
} from "@mui/material";
import PropTypes from "prop-types";
import { colorsPalette } from "@/styles/colorsPalette";

export const CardCustom = ({ card }) => {
  CardCustom.propTypes = {
    card: PropTypes.object.isRequired,
  };

  const { textSecondary } = colorsPalette();

  return (
    <Card
      sx={{ maxWidth: 345, margin: "1rem 5rem", display: "flex", width: "20%" }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={card.image}
          alt="imagen card"
          sx={{
            height: "100%",
            width: "50%",
            objectFit: "contain",
            display: "flex",
            marginTop: "5%",
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color={textSecondary}
            textAlign={"center"}
          >
            {card.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", textAlign: "center" }}
          >
            {card.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
