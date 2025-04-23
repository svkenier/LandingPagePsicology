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
import { colorsPalette } from "@/styles/colorsPalette";
import { CompactField } from "./CompactField";
import { CompactDateField } from "./CompactDateField";
import { useDataForm } from "@/hooks/useDataForm";

const validationSchema = Yup.object({
  // Mantener el esquema de validación original
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
  const { primary, details } = colorsPalette();

  // Mantener initialValues y handleSubmit originales

 const {formValues} = useDataForm()

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Stack sx={{ border: `solid ${details} 0.1em `, width:"40%", height: "100%", padding:"1rem",borderRadius:"0.2rem"}}>
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, values, handleChange }) => (
          <Form>
            <Stack
              sx={{ padding: " 0 1rem" }}
              spacing={1.5}
            >
              <Box sx={{ width: "100%", display: "flex", gap: 2 }}>
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

              <Box sx={{ width: "100%" }}>
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
                  margin="dense"
                  error={
                    touched.consultationType && Boolean(errors.consultationType)
                  }
                >
                  <InputLabel sx={{ fontSize: "0.875rem" }}>
                    Tipo de Consulta
                  </InputLabel>
                  <Field
                    as={Select}
                    name="consultationType"
                    label="Tipo de Consulta"
                    sx={{ fontSize: "0.875rem" }}
                    value={values.consultationType}
                    onChange={handleChange}
                  >
                    <MenuItem  value="Presencial" sx={{ fontSize: "0.875rem" }}>
                      Presencial
                    </MenuItem>
                    <MenuItem value="Online" sx={{ fontSize: "0.875rem" }}>
                      Online
                    </MenuItem>
                  </Field>
                </FormControl>
                <Typography variant="body1" color={primary} textAlign="center">
                  Fecha y hora Preferida
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
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
                rows={3}
                size="small"
                margin="dense"
                error={touched.reason && Boolean(errors.reason)}
                helperText={touched.reason && errors.reason}
                sx={{
                  "& .MuiInputBase-root": { fontSize: "0.875rem" },
                  "& .MuiFormHelperText-root": { fontSize: "0.7rem", mx: 0 },
                }}
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
                    sx={{ py: 0 }}
                    value={values.terms}
                  />
                }
                label={
                  <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                    Acepto los términos y condiciones
                  </Typography>
                }
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="small"
                disabled={isSubmitting}
                sx={{
                  mt: 2,
                  backgroundColor: primary,
                  fontSize: "0.875rem",
                  py: 0.5,
                  "&:hover": { backgroundColor: primary },
                }}
              >
                Enviar
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};


