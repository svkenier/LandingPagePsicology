import { useState } from "react";

export const useHandleMenu = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };
  return {
    handleActiveMenu,
    activeMenu,
  };
};
