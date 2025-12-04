import { useState } from "react";
import { saveAppointment, validateAppointmentData } from "@/services/appointmentService";
import { useDataForm } from "./useDataForm";

export const useAppointmentSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { handleFormValues } = useDataForm();

  const submitAppointment = async (values) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // Validate data
      validateAppointmentData(values);

      // Save to Firestore
      const appointmentId = await saveAppointment(values);

      console.log("Cita guardada exitosamente con ID:", appointmentId);
      
      setSubmitSuccess(true);
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

      return appointmentId;
    } catch (error) {
      console.error("Error al enviar la cita:", error);
      setSubmitError(error.message || "Error al enviar la solicitud");
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearMessages = () => {
    setSubmitError(null);
    setSubmitSuccess(false);
  };

  return {
    submitAppointment,
    isSubmitting,
    submitError,
    submitSuccess,
    clearMessages,
  };
};
