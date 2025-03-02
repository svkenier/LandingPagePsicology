import { colorsPalette } from "@/styles/colorsPalette"
import { Stack,Typography } from "@mui/material"

export const InformationForm = () => {
    const {primary,text} = colorsPalette()
  return (
   <Stack sx={{width:"100%", height:"20%"}}>
    <Typography variant="h4" component="h4" color={primary} >
              Agenda tu cita
            </Typography>
            <Typography variant="body1" color={text} sx={{ fontSize: "1.3rem" ,padding:"0.5rem"}} gutterBottom>
              Completa el formulario y nos pondremos en contacto contigo para
              confirmar tu sesión.
            </Typography>
   </Stack>
  )
}
