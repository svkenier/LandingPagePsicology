import { Stack, Typography, Box, Paper } from "@mui/material";
import PropTypes from "prop-types";

export const CardOfList = ({ skill }) => {
  const { skills, title } = skill;

  CardOfList.propTypes = {
    skill: PropTypes.shape({
      title: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.node.isRequired,
          subTitle: PropTypes.string,
          info: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        width: "100%", 
        p: { xs: 2.5, sm: 3 }, 
        border: '1px solid',
        borderColor: 'secondary.main',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'primary.main',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        },
      }}
    >
      <Stack spacing={2}>
        <Typography 
          variant="h4" 
          component="h3" 
          color="primary.main" 
          sx={{ fontWeight: 700 }}
        >
          {title}
        </Typography>

        {skills.map(({ icon, subTitle, info }, index) => (
          <Box 
            key={index} 
            sx={{ 
              display: "flex", 
              alignItems: 'flex-start', 
              gap: 1.5 
            }}
          >
            <Box sx={{ mt: 0.3, flexShrink: 0 }}>{icon}</Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {subTitle && (
                <Typography 
                  variant="subtitle1" 
                  color="text.secondary" 
                  sx={{ fontWeight: 600 }}
                >
                  {subTitle}
                </Typography>
              )}
              <Typography 
                variant="body2" 
                color="text.primary" 
                sx={{ 
                  mt: subTitle ? 0.5 : 0,
                  lineHeight: 1.6,
                }}
              >
                {info}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
};
