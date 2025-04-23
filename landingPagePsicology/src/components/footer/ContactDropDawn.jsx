import { Box, Typography,Link } from "@mui/material";
import { useHandleContact } from "@/hooks/useHandleContact";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactsIcon from "@mui/icons-material/Contacts";
import { TikTokIcon } from "@/assets/icons/TikTokIcon";
import { colorsPalette } from "@/styles/colorsPalette";


export const ContactDropDawn = () => {
  const { details } = colorsPalette();
  const { handleContactMenu, isOpen } = useHandleContact();

  return (
    <Box>
      <Box
        onClick={handleContactMenu}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          justifyContent: "center",
          alignItems: "center",
          width: "4rem",
          height: "4rem",
          backgroundColor: details,
          borderRadius: "50%",
          position: "absolute",
          right: 10,
          bottom: 30,
        }}
      >
        {" "}
        <ContactsIcon sx={{ color: "#fff" }} fontSize="small" />
        <Typography
          sx={{
            fontSize: "0.5em",
            fontWeight: "bold",
        
          }}
          variant="body1"
          color="#fff"
        >
          Contactanos
        </Typography>
      </Box>

      {isOpen && (
        <Link href="https://www.tiktok.com/" target="_blank">

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "3rem",
            height: "3rem",
            backgroundColor: "#000",
            borderRadius: "50%",
            position: "absolute",
            right: 75,
            bottom: 35,
          }}
          >
          <TikTokIcon />
        </Box>
        </Link>
      )}

      {isOpen && (
        <Link href="https://wa.me/584121021512?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20%F0%9F%98%84" target="_blank" >
        <Box
          sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "3rem",
              height: "3rem",
              backgroundColor: "#25d366",
              borderRadius: "50%",
              position: "absolute",
              right: 70,
              bottom: 85,
            }}
            >
          <WhatsAppIcon sx={{ color: "#fff" }} />
        </Box>
        </Link>
      )}
      {isOpen && (
        <Link href="https://www.instagram.com/" target="_blank">
        <Box
          sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "3rem",
            height: "3rem",
            backgroundImage:
            "linear-gradient(45deg, #833AB4 0%, #C13584 30%, #E1306C 50%, #FD1D1D 70%, #F56040 80%, #FCAF45 100%)",
            borderRadius: "50%",
            position: "absolute",
            right: 15,
            bottom: 95,
        }}
        >
          <InstagramIcon sx={{ color: "#fff" }} />
        </Box>
        </Link>
      )}
    </Box>
  );
};
