import { Box, CardMedia } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuDropDawn } from "../nav/MenuDropDown";
import logoPicture from "../../assets/images/logoNameHDsf.png";
import PropTypes from "prop-types";

export const NavSegment = ({ handleActiveMenu, activeMenu }) => {
  NavSegment.propTypes = {
    activeMenu: PropTypes.bool.isRequired,
    handleActiveMenu: PropTypes.func.isRequired,
  };

  return (
    <>
      <Box
        component="section"
        id="navSection"
        sx={{
          width: "100%",
          height: "12vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            display: "flex",
          }}
        >
          <CardMedia
            sx={{ width: "12%", height: "100%", objectFit: "contain" }}
            title="logo"
            image={logoPicture}
            component="img"
          />

          <Box
            alignItems={"center"}
            display={"flex"}
            justifyContent={"center"}
            width={"5%"}
            height={"100%"}
            onClick={handleActiveMenu}
          >
            <MenuIcon fontSize="large" />
          </Box>
        </Box>
        <Box sx={{ zIndex: 2 }}>
          {activeMenu && <MenuDropDawn handleActiveMenu={handleActiveMenu} />}
        </Box>
      </Box>
    </>
  );
};
