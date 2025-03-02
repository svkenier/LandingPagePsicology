import { TextField } from "@mui/material";
import { Field } from "formik";
import PropTypes from "prop-types";
// Componente auxiliar para campos compactos  

export const CompactField = ({ name, label, errors, touched,onChange,value }) => {
    CompactField.propTypes = {
            name:PropTypes.string,
            label:PropTypes.string,
            errors:PropTypes.object,
            touched:PropTypes.object,
            onChange:PropTypes.func,
            value:PropTypes.string
          };
  return (
    <Field
    as={TextField}
    name={name}
    label={label}
    fullWidth
    size="small"
    margin="dense"
    error={touched[name] && Boolean(errors[name])}
    helperText={touched[name] && errors[name]}
    value={value}
    onChange={onChange}
    sx={{
      "& .MuiInputBase-root": { fontSize: "0.875rem" },
      "& .MuiFormHelperText-root": { fontSize: "0.7rem", mx: 0 },
    }}
  />
  )
}



