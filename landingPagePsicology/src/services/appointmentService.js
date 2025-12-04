import { collection, addDoc, serverTimestamp, getDocs, doc, getDoc, updateDoc, deleteDoc, query, orderBy } from "firebase/firestore";
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
 * Get all appointments from Firestore
 * @returns {Promise<Array>} - Array of appointments with IDs
 */
export const getAllAppointments = async () => {
  try {
    const q = query(collection(db, "appointments"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const appointments = [];
    
    querySnapshot.forEach((doc) => {
      appointments.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    
    return appointments;
  } catch (error) {
    console.error("Error getting appointments:", error);
    throw new Error("No se pudieron cargar las citas");
  }
};

/**
 * Get single appointment by ID
 * @param {string} id - Appointment ID
 * @returns {Promise<Object>} - Appointment data
 */
export const getAppointmentById = async (id) => {
  try {
    const docRef = doc(db, "appointments", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      };
    } else {
      throw new Error("Cita no encontrada");
    }
  } catch (error) {
    console.error("Error getting appointment:", error);
    throw new Error("No se pudo cargar la cita");
  }
};

/**
 * Update appointment
 * @param {string} id - Appointment ID
 * @param {Object} data - Updated data
 * @returns {Promise<void>}
 */
export const updateAppointment = async (id, data) => {
  try {
    const docRef = doc(db, "appointments", id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    console.log("Appointment updated successfully");
  } catch (error) {
    console.error("Error updating appointment:", error);
    throw new Error("No se pudo actualizar la cita");
  }
};

/**
 * Delete appointment
 * @param {string} id - Appointment ID
 * @returns {Promise<void>}
 */
export const deleteAppointment = async (id) => {
  try {
    const docRef = doc(db, "appointments", id);
    await deleteDoc(docRef);
    console.log("Appointment deleted successfully");
  } catch (error) {
    console.error("Error deleting appointment:", error);
    throw new Error("No se pudo eliminar la cita");
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
