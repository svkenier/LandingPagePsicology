import { contentLists } from "@/assets/contentManagement/contentLists";
import { colorsPalette } from "@/styles/colorsPalette";
import { Stack, Typography } from "@mui/material";

export const ConditionsForm = () => {
  const { listConditionsForm } = contentLists();
  const {primary,text} = colorsPalette()
  return (
    <Stack sx={{width:"60%", padding:"2rem", }} spacing={1.5} >
      {listConditionsForm.map(({ title, description }, index) => (
        <Stack key={index}>
          <Typography variant="h6" color={primary} fontSize="1.3rem" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color={text} fontSize="1rem" gutterBottom>
            {description}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};
