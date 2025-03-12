import { Box} from "@mui/material"
import { colorsPalette } from "@/styles/colorsPalette"
import { MottoSectionFooter } from "./MottoSectionFooter"
import { QuickLinksSectionFooter } from "./QuickLinksSectionFooter"
import { LegalLinksSectionFooter } from "./LegalLinksSectionFooter"
import { ConnectSectionFooter } from "./ConnectSectionFooter"


export const FooterSegment = () => {
    const {primary,} = colorsPalette()
  return (
    <Box sx={{backgroundColor: primary, display:"flex"}}>
        
        <MottoSectionFooter/>
        <QuickLinksSectionFooter/>
        <LegalLinksSectionFooter/>
        <ConnectSectionFooter/>
    </Box>
  )
}
