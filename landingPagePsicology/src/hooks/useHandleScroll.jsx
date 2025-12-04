import { useDataForm } from "./useDataForm";

export const useHandleScroll = () => {
  const { setConsultationType } = useDataForm();

  const handleScroll = (e, id, consultationType = null) => {
    if (e) e.preventDefault();
    
    // Set consultation type if provided
    if (consultationType) {
      setConsultationType(consultationType);
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    handleScroll,
  };
};
