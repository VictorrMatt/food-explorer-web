import { useEffect } from "react";

const addKeyPressListener = (setsidestate = "false") => {
  useEffect(() => {
    // O ouvinte de teclado será adicionado assim que o componente for montado
    const handleKeyPress = (event) => {
      const activeElement = document.activeElement;
      const activeElementName = document.activeElement.nodeName;
      const tabKeyWasPressed = event.keyCode === 13;

      const svgActions = {
        hamburger: () => setsidestate("true"),
        close: () => setsidestate("false"),
      };

      const otherActions = {
        INPUT: () => console.log("INPUTTT"),
        default: () => activeElement.click(),
      };

      if (tabKeyWasPressed && activeElementName === "svg") {
        const elementId = activeElement.id;
        const action = svgActions[elementId];
        action();
      } else if (tabKeyWasPressed) {
        const action = otherActions[activeElementName] || otherActions.default;
        action();
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
