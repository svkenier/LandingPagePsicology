import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "@/services/authService";
import { useAuth } from "@/contexts/AuthContext";
import { AppointmentsTable } from "@/components/dashboard/AppointmentsTable";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
            Panel de Administración
          </Typography>
          <Typography variant="body2" sx={{ mr: 2, color: '#fff' }}>
            {user?.email}
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            Gestión de Citas
          </Typography>
          <AppointmentsTable />
        </Paper>
      </Container>
    </Box>
  );
};
