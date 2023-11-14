import { useEffect } from "react";

const addKeyPressListener = (setSideState = false) => {
  useEffect(() => {
    // O ouvinte de teclado será adicionado assim que o componente for montado
    const handleKeyPress = (event) => {
      if (event.keyCode === 13 && document.activeElement.nodeName === "svg") {
        let elementId = document.activeElement.id;
        console.log(elementId);
        if (elementId === "hamburger") {
          setSideState(true);
        } else if (elementId === "close") {
          setSideState(false);
        }
      } else {
        document.activeElement.click();
      }
    };

    document.onkeydown = handleKeyPress;

    return () => {
      // Limpando o ouvinte ao desmontar o componente
      document.onkeydown = null;
    };
  }, []);
};

export default addKeyPressListener;
