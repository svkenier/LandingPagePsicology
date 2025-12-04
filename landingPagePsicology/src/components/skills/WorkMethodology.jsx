import { Box, Stack, Typography } from "@mui/material";
import { contentLists } from "@/assets/contentManagement/contentLists";

export const WorkMethodology = () => {
  const { listMethology } = contentLists();

  return (
    <Stack spacing={2.5}>
      <Typography 
        variant="h4" 
        component="h3" 
        color="primary.main"
        sx={{ fontWeight: 700 }}
      >
        Metodología de trabajo:
      </Typography>
      
      {listMethology.map(({ title, info }, index) => (
        <Box key={index}>
          <Typography 
            variant="subtitle1" 
            color="text.secondary" 
            component="span"
            sx={{ fontWeight: 600 }}
          >
            {title}{' '}
          </Typography>
          <Typography 
            variant="body1" 
            color="text.primary"
            component="span"
            sx={{ lineHeight: 1.7 }}
          >
            {info}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};
