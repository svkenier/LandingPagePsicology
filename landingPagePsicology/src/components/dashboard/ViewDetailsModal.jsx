import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Typography,
  Divider,
  Chip,
} from "@mui/material";

export const ViewDetailsModal = ({ open, appointment, onClose }) => {
  if (!appointment) return null;

  const DetailRow = ({ label, value }) => (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={4}>
        <Typography variant="body2" fontWeight={600} color="text.secondary">
          {label}:
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body2">{value || "-"}</Typography>
      </Grid>
    </Grid>
  );

  const formatDate = (timestamp) => {
    if (!timestamp) return "-";
    if (timestamp.toDate) {
      return timestamp.toDate().toLocaleString("es-ES");
    }
    return new Date(timestamp).toLocaleString("es-ES");
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Detalles de la Cita</DialogTitle>
      <DialogContent>
        <Divider sx={{ mb: 2 }} />
        
        <DetailRow label="Nombre" value={`${appointment.name} ${appointment.lastName}`} />
        <DetailRow label="Email" value={appointment.email} />
        <DetailRow label="Teléfono" value={appointment.phone} />
        <DetailRow label="Fecha" value={appointment.date} />
        <DetailRow label="Hora" value={appointment.time} />
        
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={4}>
            <Typography variant="body2" fontWeight={600} color="text.secondary">
              Tipo:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Chip
              label={appointment.consultationType}
              size="small"
              color={appointment.consultationType === "Presencial" ? "primary" : "secondary"}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={4}>
            <Typography variant="body2" fontWeight={600} color="text.secondary">
              Estado:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Chip
              label={appointment.status || "pending"}
              size="small"
              color={appointment.status === "confirmed" ? "success" : "warning"}
            />
          </Grid>
        </Grid>

        <DetailRow label="Motivo" value={appointment.reason} />
        <DetailRow label="Creado" value={formatDate(appointment.createdAt)} />
        {appointment.updatedAt && (
          <DetailRow label="Actualizado" value={formatDate(appointment.updatedAt)} />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};
