import { Stack, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import { colorsPalette } from "@/styles/colorsPalette";

export const CardOfList = ({ skill }) => {
  const { primary, text, textSecondary,secondary } = colorsPalette();

  const { skills, title } = skill;

  CardOfList.propTypes = {
    skill: PropTypes.shape({
      title: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.node.isRequired,
          SubTitle: PropTypes.string,
          info: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };

  return (
    <Box
      sx={{
        width: "45%",
        display: "flex",
        padding: "1.5rem",
        justifyContent: "center",
        margin: "0 1rem",
      }}
    >
      <Stack spacing={1.5} paddingTop={2} sx={{
        border:`solid ${secondary} 0.1rem`, padding:"1rem", borderRadius:"0.2rem"
      }} >
        <Typography variant="h6" fontSize="1.2rem" component="h3" color={primary}>
          {title}
        </Typography>

        {skills.map(({ icon, subTitle, info }, index) => (
          <Box key={index} sx={{ display: "flex", width: "100%", }} >

            <Box marginRight={1}>{icon}</Box>
            
            {subTitle ? (
              <Typography variant="body1" fontSize="1rem" width="100%" margin="0.2rem" color={textSecondary}>
                {subTitle}{" "}
                <Typography variant="span" fontSize="1rem" color={text}>
                  {info}
                </Typography>
              </Typography>
            ) : (
              <Typography variant="body1" fontSize="1rem" margin="0.2rem" color={text}>
                {info}
              </Typography>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
