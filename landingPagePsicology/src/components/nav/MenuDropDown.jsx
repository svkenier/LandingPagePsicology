import { Stack, Typography } from "@mui/material";
import { colorsPalette } from "../../styles/colorsPalette";
import PropTypes from "prop-types";
import { contentLists } from "@/assets/contentManagement/contentLists";


export const MenuDropDawn = ({ handleActiveMenu }) => {
  const { textTertiary, primary, secondary, textSecondary } = colorsPalette();

  //Pregunatar porque es necesario establecer una props como requerida
  MenuDropDawn.propTypes = {
    handleActiveMenu: PropTypes.func.isRequired,
  };

  const { listQuickLinks  } = contentLists()

  return (
    <Stack
      sx={{
        width: "30%",
        height: "90vh",
        backgroundColor: `${primary}`,
        padding: "0.5% 0 0.5% 0",
        display: "flex",
        justifySelf: "flex-end",
      }}
    >
      {
        listQuickLinks?.map((linkMenu, index) => (
          <Typography
          component="a"
          key={index}
          onClick={handleActiveMenu}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1.5rem",
            "&:hover": {
              backgroundColor: `${secondary}`,
              cursor: "pointer",
              color: `${textSecondary}`,
            },
          }}
          variant="body1"
          color={textTertiary}
        >
        {linkMenu}
        </Typography>
        ))
      }

    </Stack>
  );
};
