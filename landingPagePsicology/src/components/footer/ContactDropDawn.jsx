import { Box, Fab, Collapse, Stack, Link, Tooltip } from "@mui/material";
import { useHandleContact } from "@/hooks/useHandleContact";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactsIcon from "@mui/icons-material/Contacts";
import CloseIcon from "@mui/icons-material/Close";
import { TikTokIcon } from "@/assets/icons/TikTokIcon";

export const ContactDropDawn = () => {
  const { handleContactMenu, isOpen } = useHandleContact();

  const socialLinks = [
    {
      icon: <WhatsAppIcon />,
      label: "WhatsApp",
      href: "https://wa.me/584127713052?text=me%20gustaria%20solicitar%20informacion%20de%20su%20servicios",
      color: "#25d366",
    },
    {
      icon: <InstagramIcon />,
      label: "Instagram",
      href: "https://www.instagram.com/protegetupsique/",
      color: "linear-gradient(45deg, #833AB4 0%, #C13584 30%, #E1306C 50%, #FD1D1D 70%, #F56040 80%, #FCAF45 100%)",
    },
    {
      icon: <TikTokIcon />,
      label: "TikTok",
      href: "https://www.tiktok.com/@protegetupsique?_r=1&_t=ZM-91x1AhtH69z",
      color: "#000",
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 16, sm: 24 },
        right: { xs: 16, sm: 24 },
        zIndex: 1000,
      }}
    >
      <Stack spacing={2} alignItems="flex-end">
        <Collapse in={isOpen}>
          <Stack spacing={1.5} alignItems="flex-end">
            {socialLinks.map((social, index) => (
              <Tooltip key={index} title={social.label} placement="left">
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                  <Fab
                    size="medium"
                    sx={{
                      background: social.color,
                      color: "#fff",
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {social.icon}
                  </Fab>
                </Link>
              </Tooltip>
            ))}
          </Stack>
        </Collapse>

        <Fab
          color="primary"
          onClick={handleContactMenu}
          sx={{
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            '&:hover': {
              transform: 'scale(1.05)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          {isOpen ? <CloseIcon /> : <ContactsIcon />}
        </Fab>
      </Stack>
    </Box>
  );
};
