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
} from "@mui/material";
import { CompactField } from "./CompactField";
import { CompactDateField } from "./CompactDateField";
import { useDataForm } from "@/hooks/useDataForm";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("El nombre es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  lastName: Yup.string()
    .required("El apellido es requerido")
    .min(3, "El apellido debe tener al menos 3 caracteres"),
  email: Yup.string()
    .email("Ingresa un email válido")
    .required("El email es requerido"),
  phone: Yup.string()
    .required("El teléfono es requerido")
    .matches(/^[0-9]+$/, "Debe ser un número de teléfono válido"),
  date: Yup.date().required("La fecha es requerida"),
  time: Yup.string().required("La hora es requerida"),
  reason: Yup.string().required("El motivo de la consulta es requerido"),
  consultationType: Yup.string().required("El tipo de consulta es requerido"),
  terms: Yup.boolean().oneOf(
    [true],
    "Debes aceptar los términos y condiciones"
  ),
});

export const AppointmentForm = () => {
  const { formValues } = useDataForm();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched, values, handleChange }) => (
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
            >
              Enviar solicitud
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
