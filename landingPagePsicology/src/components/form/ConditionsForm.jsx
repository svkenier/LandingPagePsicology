import { contentLists } from "@/assets/contentManagement/contentLists";
import { Stack, Typography, Box } from "@mui/material";

export const ConditionsForm = () => {
  const { listConditionsForm } = contentLists();
  
  return (
    <Stack spacing={3}>
      {listConditionsForm.map(({ title, description }, index) => (
        <Box key={index}>
          <Typography 
            variant="h4" 
            color="primary.main" 
            sx={{ fontWeight: 700, mb: 1.5 }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body1" 
            color="text.primary" 
            sx={{ lineHeight: 1.7 }}
          >
            {description}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};
