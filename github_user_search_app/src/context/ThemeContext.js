import { createContext, useState } from "react";

const ThemeContext = createContext();

function Provider(props) {
  const [lightMode, setLigthMode] = useState(true);

  const valueToShare = {
    lightMode,
    modeChanger: () => {
      setLigthMode((prevMode) => !prevMode);
    },
  };
  return (
    <ThemeContext.Provider value={valueToShare}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export { Provider };
export default ThemeContext;
