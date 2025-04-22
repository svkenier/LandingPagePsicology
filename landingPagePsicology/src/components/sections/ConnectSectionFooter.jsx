import { contentLists } from "@/assets/contentManagement/contentLists"
import { Stack,Typography } from "@mui/material"
import { ItemSocialMedia } from "../items/ItemSocialMedia"

export const ConnectSectionFooter = () => {

    const {listSocialMedia} = contentLists()

  return (
    <Stack sx={{padding:"1.3rem"}} >
        <Typography variant="body2" fontSize="1.3rem" fontWeight="bold" color="#fff">
        Conéctate
        </Typography>

       <Typography variant="body1" color="#fff" sx={{margin:"0.5rem"}}>
       Redes Sociales:
       </Typography>

       {
        listSocialMedia.map((infoItem, index)=> <ItemSocialMedia key={index} infoItem={infoItem} />)
       }
    </Stack>
  )
}
