import { AppBar, Toolbar, IconButton, Box, Drawer, List, ListItem, ListItemButton, ListItemText, useTheme, useMediaQuery, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logoPicture from "../../assets/images/logoNameHDsf.png";
import PropTypes from "prop-types";
import { contentLists } from "@/assets/contentManagement/contentLists";
import { useHandleScroll } from "@/hooks/useHandleScroll";

export const NavSegment = ({ handleActiveMenu, activeMenu }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { handleScroll } = useHandleScroll();
  const { listQuickLinks } = contentLists();

  NavSegment.propTypes = {
    activeMenu: PropTypes.bool.isRequired,
    handleActiveMenu: PropTypes.func.isRequired,
  };

  const handleNavClick = (linkMenu) => {
    handleScroll(null, linkMenu);
    handleActiveMenu(false);
  };

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          backgroundColor: '#fff',
          borderBottom: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
          <Box
            component="img"
            src={logoPicture}
            alt="Logo"
            sx={{ 
              height: { xs: 50, sm: 60 },
              width: 'auto',
              objectFit: 'contain',
            }}
          />

          {isMobile ? (
            <IconButton
              edge="end"
              sx={{ 
                bgcolor: 'primary.main',
                color: '#fff',
                '&:hover': { 
                  bgcolor: 'primary.dark',
                },
                borderRadius: 2,
              }}
              aria-label="menu"
              onClick={() => handleActiveMenu(!activeMenu)}
            >
              {activeMenu ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {listQuickLinks?.map((linkMenu, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  component="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(linkMenu);
                  }}
                  sx={{
                    cursor: 'pointer',
                    px: 2.5,
                    py: 1,
                    bgcolor: index === 0 ? 'primary.main' : 'transparent',
                    color: index === 0 ? '#fff' : 'text.primary',
                    border: index === 0 ? 'none' : '1px solid',
                    borderColor: 'divider',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: index === 0 ? 'primary.dark' : 'secondary.main',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {linkMenu}
                </Paper>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={activeMenu && isMobile}
        onClose={() => handleActiveMenu(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '75%', sm: '50%' },
            maxWidth: 320,
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            onClick={() => handleActiveMenu(false)}
            sx={{ color: 'primary.contrastText' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {listQuickLinks?.map((linkMenu, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(linkMenu);
                }}
                sx={{
                  py: 2,
                  px: 3,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <ListItemText 
                  primary={linkMenu}
                  primaryTypographyProps={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'primary.contrastText',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
