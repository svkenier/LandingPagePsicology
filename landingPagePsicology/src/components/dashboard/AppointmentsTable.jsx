import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  CircularProgress,
  Box,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { getAllAppointments, updateAppointment } from "@/services/appointmentService";
import { ViewDetailsModal } from "./ViewDetailsModal";
import { EditAppointmentModal } from "./EditAppointmentModal";
import { DeleteConfirmModal } from "./DeleteConfirmModal";

export const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Modal states
  const [viewModal, setViewModal] = useState({ open: false, appointment: null });
  const [editModal, setEditModal] = useState({ open: false, appointment: null });
  const [deleteModal, setDeleteModal] = useState({ open: false, appointment: null });

  const loadAppointments = async () => {
    try {
      setLoading(true);
      const data = await getAllAppointments();
      setAppointments(data);
    } catch (error) {
      console.error("Error loading appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const filteredAppointments = appointments.filter((apt) =>
    Object.values(apt).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const getStatusColor = (status) => {
    const colors = {
      pending: "warning",
      resolved: "success",
      confirmed: "success",
      cancelled: "error",
      completed: "info",
    };
    return colors[status] || "default";
  };

  const getStatusLabel = (status) => {
    const labels = {
      pending: "Pendiente",
      resolved: "Resuelto",
      confirmed: "Confirmada",
      cancelled: "Cancelada",
      completed: "Completada",
    };
    return labels[status] || status;
  };

  const handleStatusToggle = async (appointment) => {
    try {
      const newStatus = appointment.status === "pending" ? "confirmed" : "pending";
      await updateAppointment(appointment.id, { status: newStatus });
      loadAppointments(); // Reload to show updated status
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "-";
    if (timestamp.toDate) {
      return timestamp.toDate().toLocaleDateString("es-ES");
    }
    return new Date(timestamp).toLocaleDateString("es-ES");
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Buscar por nombre, email, teléfono..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "primary.main" }}>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Nombre</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Email</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Teléfono</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Fecha</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Hora</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Tipo</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Estado</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }} align="center">
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAppointments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  <Typography variant="body2" color="text.secondary" sx={{ py: 3 }}>
                    No se encontraron citas
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredAppointments.map((appointment) => (
                <TableRow 
                  key={appointment.id} 
                  hover
                  sx={{
                    '&:hover': {
                      bgcolor: 'primary.main',
                      '& .MuiTableCell-root': {
                        color: '#fff',
                      },
                      '& .MuiIconButton-root': {
                        color: '#fff',
                      },
                    },
                  }}
                >
                  <TableCell>
                    {appointment.name} {appointment.lastName}
                  </TableCell>
                  <TableCell>{appointment.email}</TableCell>
                  <TableCell>{appointment.phone}</TableCell>
                  <TableCell>{appointment.date || "-"}</TableCell>
                  <TableCell>{appointment.time || "-"}</TableCell>
                  <TableCell>
                    <Chip
                      label={appointment.consultationType}
                      size="small"
                      color={appointment.consultationType === "Presencial" ? "primary" : "secondary"}
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={getStatusLabel(appointment.status || "pending")}
                      size="small"
                      color={getStatusColor(appointment.status)}
                      onClick={() => handleStatusToggle(appointment)}
                      sx={{ 
                        cursor: 'pointer',
                        '&:hover': {
                          opacity: 0.8,
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      size="small"
                      color="info"
                      onClick={() => setViewModal({ open: true, appointment })}
                      title="Ver detalles"
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => setEditModal({ open: true, appointment })}
                      title="Editar"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => setDeleteModal({ open: true, appointment })}
                      title="Eliminar"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modals */}
      <ViewDetailsModal
        open={viewModal.open}
        appointment={viewModal.appointment}
        onClose={() => setViewModal({ open: false, appointment: null })}
      />

      <EditAppointmentModal
        open={editModal.open}
        appointment={editModal.appointment}
        onClose={() => setEditModal({ open: false, appointment: null })}
        onSuccess={loadAppointments}
      />

      <DeleteConfirmModal
        open={deleteModal.open}
        appointment={deleteModal.appointment}
        onClose={() => setDeleteModal({ open: false, appointment: null })}
        onSuccess={loadAppointments}
      />
    </>
  );
};
