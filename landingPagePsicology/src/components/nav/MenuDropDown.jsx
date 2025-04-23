import { Stack, Typography } from "@mui/material";
import { colorsPalette } from "../../styles/colorsPalette";
import { contentLists } from "@/assets/contentManagement/contentLists";
import { useHandleScroll } from "@/hooks/useHandleScroll";
import PropTypes from "prop-types";

export const MenuDropDawn = ({ handleActiveMenu }) => {
  const { textTertiary, primary, secondary, textSecondary } = colorsPalette();

  const { handleScroll } = useHandleScroll();

  const { listQuickLinks } = contentLists();

  MenuDropDawn.propTypes = {
    handleActiveMenu: PropTypes.func.isRequired,
  };

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
      {listQuickLinks?.map((linkMenu, index) => (
        <Typography
          component="a"
          key={index}
          onClick={(e) => {
            handleScroll(e, linkMenu);
            handleActiveMenu(false);
          }}
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
      ))}
    </Stack>
  );
};
