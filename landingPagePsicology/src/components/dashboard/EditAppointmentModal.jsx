import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Grid,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { updateAppointment } from "@/services/appointmentService";

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es requerido"),
  lastName: Yup.string().required("El apellido es requerido"),
  email: Yup.string().email("Email inválido").required("El email es requerido"),
  phone: Yup.string().required("El teléfono es requerido"),
  date: Yup.string().required("La fecha es requerida"),
  time: Yup.string().required("La hora es requerida"),
  reason: Yup.string().required("El motivo es requerido"),
  consultationType: Yup.string().required("El tipo es requerido"),
  status: Yup.string().required("El estado es requerido"),
});

export const EditAppointmentModal = ({ open, appointment, onClose, onSuccess }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!appointment) return null;

  const handleSubmit = async (values, { setSubmitting }) => {
    setError("");
    setSuccess(false);
    
    try {
      await updateAppointment(appointment.id, values);
      setSuccess(true);
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Editar Cita</DialogTitle>
      <Formik
        initialValues={{
          name: appointment.name || "",
          lastName: appointment.lastName || "",
          email: appointment.email || "",
          phone: appointment.phone || "",
          date: appointment.date || "",
          time: appointment.time || "",
          reason: appointment.reason || "",
          consultationType: appointment.consultationType || "",
          status: appointment.status || "pending",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <DialogContent>
              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}
              {success && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Cita actualizada exitosamente
                </Alert>
              )}

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field name="name">
                    {({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Nombre"
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                      />
                    )}
                  </Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field name="lastName">
                    {({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Apellido"
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                      />
                    )}
                  </Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field name="email">
                    {({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Email"
                        type="email"
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    )}
                  </Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field name="phone">
                    {({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Teléfono"
                        error={touched.phone && Boolean(errors.phone)}
                        helperText={touched.phone && errors.phone}
                      />
                    )}
                  </Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field name="date">
                    {({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Fecha"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        error={touched.date && Boolean(errors.date)}
                        helperText={touched.date && errors.date}
                      />
                    )}
                  </Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field name="time">
                    {({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Hora"
                        type="time"
                        InputLabelProps={{ shrink: true }}
                        error={touched.time && Boolean(errors.time)}
                        helperText={touched.time && errors.time}
                      />
                    )}
                  </Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field name="consultationType">
                    {({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        select
                        label="Tipo de Consulta"
                        error={touched.consultationType && Boolean(errors.consultationType)}
                        helperText={touched.consultationType && errors.consultationType}
                      >
                        <MenuItem value="Presencial">Presencial</MenuItem>
                        <MenuItem value="Online">Online</MenuItem>
                      </TextField>
                    )}
                  </Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field name="status">
                    {({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        select
                        label="Estado"
                        error={touched.status && Boolean(errors.status)}
                        helperText={touched.status && errors.status}
                      >
                        <MenuItem value="pending">Pendiente</MenuItem>
                        <MenuItem value="confirmed">Confirmada</MenuItem>
                        <MenuItem value="cancelled">Cancelada</MenuItem>
                        <MenuItem value="completed">Completada</MenuItem>
                      </TextField>
                    )}
                  </Field>
                </Grid>

                <Grid item xs={12}>
                  <Field name="reason">
                    {({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Motivo de Consulta"
                        multiline
                        rows={3}
                        error={touched.reason && Boolean(errors.reason)}
                        helperText={touched.reason && errors.reason}
                      />
                    )}
                  </Field>
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions>
              <Button onClick={onClose} disabled={isSubmitting}>
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
              >
                {isSubmitting ? "Guardando..." : "Guardar Cambios"}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};
