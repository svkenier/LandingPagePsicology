import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
    consultationType: "",
    terms: false,
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleFormValues = (newValue) => {
    setFormValues(newValue);
  };

  const setConsultationType = (type) => {
    setFormValues(prev => ({
      ...prev,
      consultationType: type
    }));
  };

  return (
    <FormContext.Provider value={{ formValues, handleFormValues, setConsultationType }}>
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useDataForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useDataForm must be used within a FormProvider');
  }
  return context;
};
