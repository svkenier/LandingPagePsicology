import { Box, Stack, Typography } from "@mui/material";
import { colorsPalette } from "@/styles/colorsPalette";
import { contentLists } from "@/assets/contentManagement/contentLists";

const { primary, text, textSecondary } = colorsPalette();

const { sesionContent, keyBenefits } = contentLists();

export const InformationServices = () => {
  return (
    <Stack sx={{ width: "30%" }}>
      <Stack sx={{ width: "100%", padding: "1rem" }}>
        <Typography variant="h6" color={primary}>
          ¿Qué incluye cada sesión?
        </Typography>

        <Stack sx={{ width: "100%" }}>
          {sesionContent.map(({ title, Info }, index) => (
            <Typography
              sx={{ padding: "0.7rem" }}
              key={index}
              variant="body1"
              component="p"
              color={textSecondary}
              fontSize={"0.9rem"}
            >
              {title}
              <Typography
                variant="body1"
                component="span"
                color={text}
                fontSize={"0.9rem"}
              >
                {Info}
              </Typography>
            </Typography>
          ))}
        </Stack>
      </Stack>
      <Stack sx={{ width: "100%", padding: "1rem" }}>
        <Typography variant="h6" color={primary}>
          Beneficios Clave
        </Typography>

        <Stack>
          {keyBenefits.map(({ title, Info, icon }, index) => (
            <Box sx={{ display: "flex", padding: "0.7rem" }} key={index}>
              {icon}
              <Typography
                variant="body1"
                component="p"
                color={textSecondary}
                fontSize={"0.9rem"}
              >
                {title}{" "}
                <Typography
                  variant="body1"
                  component="span"
                  color={text}
                  fontSize={"0.9rem"}
                >
                  {Info}
                </Typography>
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
