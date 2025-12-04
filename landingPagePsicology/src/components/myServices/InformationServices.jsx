import { Box, Stack, Typography } from "@mui/material";
import { contentLists } from "@/assets/contentManagement/contentLists";

export const InformationServices = () => {
  const { sesionContent, keyBenefits } = contentLists();

  return (
    <Stack spacing={4}>
      <Stack spacing={2.5}>
        <Typography 
          variant="h4" 
          color="primary.main" 
          sx={{ fontWeight: 700 }}
        >
          ¿Qué incluye cada sesión?
        </Typography>

        <Stack spacing={2}>
          {sesionContent.map(({ title, Info }, index) => (
            <Box key={index}>
              <Typography 
                variant="subtitle1" 
                color="text.secondary" 
                sx={{ fontWeight: 600 }}
              >
                {title}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.primary" 
                sx={{ mt: 0.5, lineHeight: 1.6 }}
              >
                {Info}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>

      <Stack spacing={2.5}>
        <Typography 
          variant="h4" 
          color="primary.main" 
          sx={{ fontWeight: 700 }}
        >
          Beneficios Clave
        </Typography>

        <Stack spacing={2}>
          {keyBenefits.map(({ title, Info, icon }, index) => (
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 1.5, 
                alignItems: 'flex-start' 
              }} 
              key={index}
            >
              <Box sx={{ mt: 0.3, flexShrink: 0 }}>{icon}</Box>
              <Box>
                <Typography 
                  variant="subtitle1" 
                  color="text.secondary" 
                  sx={{ fontWeight: 600 }}
                >
                  {title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.primary"
                  sx={{ lineHeight: 1.6 }}
                >
                  {Info}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
