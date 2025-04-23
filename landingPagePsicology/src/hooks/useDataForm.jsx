import {useState} from 'react'

export const useDataForm = () => {

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

    const [formValues, setformValues] = useState(initialValues)

    const handleFormValues = (newValue) =>{
        setformValues(
            newValue
        )
    }

  return (
    {
        formValues,
        handleFormValues
    }
  )
}
