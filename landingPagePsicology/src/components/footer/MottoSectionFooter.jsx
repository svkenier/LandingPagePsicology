import { Box, Stack,Typography,CardMedia } from "@mui/material"
import logoPicture from "@/assets/images/logoNameHD.png"
import shieldPicture from "@/assets/images/shieldpicture.png" 
import { colorsPalette } from "@/styles/colorsPalette"
export const MottoSectionFooter = () => {

    const {textTertiary,details} = colorsPalette()

  return (
    <Stack sx={{width:"25%", border:`solid ${details}`,borderRight:"none", padding:"1.5rem 0.5rem 0 0.5rem" ,}} >
            <Typography variant="body2" color={textTertiary} fontSize="1.3rem" fontWeight="bold" >Tu bienestar es primero</Typography>
           
           <Box sx={{height:"50%" , width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <CardMedia
            sx={{ width: "100%", height: "70%", objectFit: "contain" }}
            title="logo"
            image={logoPicture}
            component="img"
            />
            </Box>
          <Box sx={{display:"flex", width:"100%", height:"25%"}}>
           
            <Box sx={{width:"40%"}}>
            <CardMedia
            sx={{ width: "100%", height: "100%", objectFit: "contain" }}
            title="shield"
            image={shieldPicture}
            component="img"
          />   
            </Box>
            <Box sx={{width:"100%", alignContent:"center",}}>
                <Typography variant="body2" fontSize={"0.7rem"} color={textTertiary}> Cuidamos de tu salud mental con profesionalismo y calidez humana. </Typography>
            </Box>
          </Box>

        </Stack>
  )
}
