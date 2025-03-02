import { Box, Stack } from "@mui/material"
import { AppointmentForm } from "./AppointmentForm"
import { InformationForm } from "./informationForm"
import { ConditionsForm } from "./ConditionsForm"


export const FormSegment = () => {
  return (
    <Stack component="section" id="formSection" sx={{padding:"0.4rem 1rem ", width:"100%", height:"100vh", marginTop:"2.5rem"}}>
    <InformationForm/>
    <Box sx={{width:"100%", display:"flex", }} >
    <AppointmentForm />
    <ConditionsForm/>
    </Box>
    </Stack>
  )
}
