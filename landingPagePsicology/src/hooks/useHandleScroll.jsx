

export const useHandleScroll = () => {
 

  const handleScroll = (e, id) => {
    if (e) e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    handleScroll,
  };
};
