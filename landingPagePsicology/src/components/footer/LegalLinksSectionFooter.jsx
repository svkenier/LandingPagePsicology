import { contentLists } from "@/assets/contentManagement/contentLists"
import { colorsPalette } from "@/styles/colorsPalette"
import { Stack,Typography } from "@mui/material"

export const LegalLinksSectionFooter = () => {
    const {listLegalLinks} = contentLists() 
    
        const {textTertiary,details} = colorsPalette()
  return (
    <Stack sx={{padding:"1.3rem", border:`solid ${details}`, width:"25%"}} spacing={1.5} >
    <Typography variant="body2" color={textTertiary} fontSize="1.3rem" fontWeight="bold" >Legal</Typography>

    {
      listLegalLinks.map((linkQuick, index )=>(
        <Typography key={index} component="a" variant="body2" color={textTertiary} fontSize="1rem">
          {linkQuick}
        </Typography>
      ))  
    }
</Stack>
  )
}
