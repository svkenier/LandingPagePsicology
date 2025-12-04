import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";

/**
 * Save appointment data to Firestore
 * @param {Object} appointmentData - The appointment form data
 * @returns {Promise<string>} - The ID of the created document
 */
export const saveAppointment = async (appointmentData) => {
  try {
    // Add server timestamp and default status
    const dataToSave = {
      ...appointmentData,
      createdAt: serverTimestamp(),
      status: "pending", // pending, confirmed, cancelled
    };

    // Add document to 'appointments' collection
    const docRef = await addDoc(collection(db, "appointments"), dataToSave);
    
    console.log("Appointment saved with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving appointment:", error);
    throw new Error("No se pudo guardar la cita. Por favor, intenta nuevamente.");
  }
};

/**
 * Validate appointment data before saving
 * @param {Object} data - The appointment data to validate
 * @returns {boolean} - True if valid, throws error if invalid
 */
export const validateAppointmentData = (data) => {
  const requiredFields = [
    "name",
    "lastName",
    "email",
    "phone",
    "date",
    "time",
    "reason",
    "consultationType",
  ];

  for (const field of requiredFields) {
    if (!data[field] || data[field].toString().trim() === "") {
      throw new Error(`El campo ${field} es requerido`);
    }
  }

  if (!data.terms) {
    throw new Error("Debes aceptar los términos y condiciones");
  }

  return true;
};
