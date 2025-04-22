import { Box, Typography} from "@mui/material"
import { colorsPalette } from "@/styles/colorsPalette"
import { ContactDropDawn } from "./ContactDropDawn"


export const FooterSegment = () => {
    const {primary,textTertiary} = colorsPalette()
  return (
    <Box sx={{backgroundColor: primary, display:"flex", justifyContent:"center",position:"relative"}}>
        
    <Typography variant="body1" color={textTertiary}> terminos y condiciones </Typography>
    
      <ContactDropDawn/>
    </Box>
  )
}
