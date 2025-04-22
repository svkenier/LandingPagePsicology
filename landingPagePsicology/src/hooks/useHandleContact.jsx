

import { useState } from "react"

export const useHandleContact = () => {
    const [isOpen, setisOpen] = useState(false)

    const handleContactMenu =()=>{
        setisOpen(!isOpen)
    }
  return {
    handleContactMenu,
    isOpen
  }
}
