import { Field } from "formik";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";

// Componente auxiliar para campos de fecha/hora

export const CompactDateField = ({ name, label, errors, touched,onChange,value }) => {

    CompactDateField.propTypes = {
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
      type={name === "date" ? "date" : "time"}
      fullWidth
      size="small"
      margin="dense"
      value={value}
      onChange={onChange}
      InputLabelProps={{ shrink: true }}
      error={touched[name] && Boolean(errors[name])}
      helperText={touched[name] && errors[name]}
      sx={{
        "& .MuiInputBase-root": { fontSize: "0.875rem" },
        "& .MuiFormHelperText-root": { fontSize: "0.7rem", mx: 0 },
      }}
    />
  )
}
