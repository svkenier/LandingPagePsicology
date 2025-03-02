import { Box, Stack, Typography } from "@mui/material"
import { colorsPalette } from "@/styles/colorsPalette"
import { contentLists } from "@/assets/contentManagement/contentLists"


export const WorkMethodology = () => {


        const {listMethology} = contentLists()
       
        const {primary,text,textSecondary} = colorsPalette()

  return (
    <Stack > 

    <Typography sx={{margin:"0.8rem 1rem"}} fontSize="1.4rem" variant="h6" component="h3" color={primary}>
    Metodología de trabajo:
    </Typography>
        {listMethology.map(({title,info},index)=> (
            <Box sx={{margin:"0.7rem 1rem"}}  key={index}>
                <Typography variant="body2" color={textSecondary} fontSize="1eem" >
                {title} <Typography variant="span" fontSize="1rem" color={text}>
                {info}
                </Typography>
                </Typography>
            </Box>
        ))}
    </Stack>
  )
}
