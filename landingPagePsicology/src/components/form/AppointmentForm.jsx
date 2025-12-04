import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stack,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { CompactField } from "./CompactField";
import { CompactDateField } from "./CompactDateField";
import { useDataForm } from "@/hooks/useDataForm";
import { useAppointmentSubmit } from "@/hooks/useAppointmentSubmit";
import { useEffect } from "react";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("El nombre es requerido")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder 50 caracteres")
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras"),
  
  lastName: Yup.string()
    .required("El apellido es requerido")
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .max(50, "El apellido no puede exceder 50 caracteres")
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El apellido solo puede contener letras"),
  
  email: Yup.string()
    .required("El email es requerido")
    .email("Ingresa un email válido (ejemplo: nombre@dominio.com)")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "El formato del email no es válido"
    ),
  
  phone: Yup.string()
    .required("El teléfono es requerido")
    .matches(/^[0-9]+$/, "El teléfono solo puede contener números")
    .min(10, "El teléfono debe tener al menos 10 dígitos")
    .max(15, "El teléfono no puede exceder 15 dígitos"),
  
  date: Yup.date()
    .required("La fecha es requerida")
    .min(new Date(), "La fecha debe ser hoy o en el futuro")
    .typeError("Ingresa una fecha válida"),
  
  time: Yup.string()
    .required("La hora es requerida")
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Formato de hora inválido (HH:MM)"),
  
  reason: Yup.string()
    .required("El motivo de la consulta es requerido")
    .min(10, "El motivo debe tener al menos 10 caracteres")
    .max(500, "El motivo no puede exceder 500 caracteres"),
  
  consultationType: Yup.string()
    .required("El tipo de consulta es requerido")
    .oneOf(["Presencial", "Online"], "Selecciona un tipo de consulta válido"),
  
  terms: Yup.boolean()
    .oneOf([true], "Debes aceptar los términos y condiciones para continuar")
    .required("Debes aceptar los términos y condiciones"),
});

export const AppointmentForm = () => {
  const { formValues } = useDataForm();
  const { 
    submitAppointment, 
    isSubmitting, 
    submitError, 
    submitSuccess,
    clearMessages 
  } = useAppointmentSubmit();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await submitAppointment(values);
      // Reset form after successful submission
      resetForm();
    } catch (error) {
      // Error is handled by the hook
    } finally {
      setSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    clearMessages();
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ isSubmitting, errors, touched, values, handleChange, setFieldValue }) => {
        // Sync consultationType from context to Formik
        useEffect(() => {
          if (formValues.consultationType && formValues.consultationType !== values.consultationType) {
            setFieldValue('consultationType', formValues.consultationType);
          }
        }, [formValues.consultationType, setFieldValue, values.consultationType]);

        return (
        <Form>
          <Stack spacing={2.5}>
            <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
              <CompactField
                name="name"
                label="Nombre"
                errors={errors}
                touched={touched}
                onChange={handleChange}
                value={values.name}
              />
              <CompactField
                name="lastName"
                label="Apellido"
                errors={errors}
                touched={touched}
                onChange={handleChange}
                value={values.lastName}
              />
            </Box>

            <CompactField
              name="email"
              label="Email"
              errors={errors}
              touched={touched}
              onChange={handleChange}
              value={values.email}
            />

            <CompactField
              name="phone"
              label="Teléfono"
              errors={errors}
              touched={touched}
              onChange={handleChange}
              value={values.phone}
            />

            <FormControl
              fullWidth
              size="small"
              error={touched.consultationType && Boolean(errors.consultationType)}
            >
              <InputLabel>Tipo de Consulta</InputLabel>
              <Field
                as={Select}
                name="consultationType"
                label="Tipo de Consulta"
                value={values.consultationType}
                onChange={handleChange}
              >
                <MenuItem value="Presencial">Presencial</MenuItem>
                <MenuItem value="Online">Online</MenuItem>
              </Field>
            </FormControl>

            <Typography
              variant="subtitle1"
              color="primary.main"
              sx={{ fontWeight: 600, pt: 1 }}
            >
              Fecha y hora preferida
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
              <CompactDateField
                name="date"
                label="Fecha"
                errors={errors}
                touched={touched}
                onChange={handleChange}
                value={values.date}
              />
              <CompactDateField
                name="time"
                label="Hora"
                errors={errors}
                touched={touched}
                onChange={handleChange}
                value={values.time}
              />
            </Box>

            <Field
              as={TextField}
              name="reason"
              label="Motivo de la consulta"
              fullWidth
              multiline
              rows={4}
              size="small"
              error={touched.reason && Boolean(errors.reason)}
              helperText={touched.reason && errors.reason}
              value={values.reason}
              onChange={handleChange}
            />

            <FormControlLabel
              control={
                <Field
                  as={Checkbox}
                  name="terms"
                  color="primary"
                  size="small"
                  value={values.terms}
                />
              }
              label={
                <Typography variant="body2">
                  Acepto los términos y condiciones
                </Typography>
              }
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={isSubmitting}
              sx={{ mt: 2 }}
              startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
            >
              {isSubmitting ? "Enviando..." : "Enviar solicitud"}
            </Button>
          </Stack>

          {/* Success Snackbar */}
          <Snackbar 
            open={submitSuccess} 
            autoHideDuration={6000} 
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
              ¡Solicitud enviada exitosamente! Nos pondremos en contacto contigo pronto.
            </Alert>
          </Snackbar>

          {/* Error Snackbar */}
          <Snackbar 
            open={!!submitError} 
            autoHideDuration={6000} 
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
              {submitError || "Error al enviar la solicitud. Por favor, intenta nuevamente."}
            </Alert>
          </Snackbar>
        </Form>
        );
      }}
    </Formik>
  );
};
