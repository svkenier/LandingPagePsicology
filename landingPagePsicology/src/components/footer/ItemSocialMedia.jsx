import { colorsPalette } from "@/styles/colorsPalette";
import { Box, Typography } from "@mui/material"
import PropTypes from "prop-types";

export const ItemSocialMedia = ({infoItem}) => {

    const {textTertiary} = colorsPalette() 

     ItemSocialMedia.propTypes = {
        infoItem: PropTypes.shape({
            icon: PropTypes.element.isRequired,
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
          }).isRequired,
        
      };

  return (
    <Box sx={{display:"flex", margin:"0.4rem 0"}} >
        <Box marginRight={1} color={textTertiary}>
        {infoItem.icon}
        </Box>
        <Typography marginRight={0.5} variant="body1"  color={textTertiary}>
            {infoItem.title}: 
        </Typography>
        <Typography component="a" variant="body1" color={textTertiary} sx={{textDecoration:"underline"}}>
            {infoItem.link}
        </Typography>
    </Box>
  )
}
