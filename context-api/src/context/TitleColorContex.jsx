import { createContext, useState } from "react";

export const TitleColorContext = createContext();

export const TitleColorProvider = ({ children }) => {
  const [titleColor, setTitleColor] = useState("black");

  return (
    <TitleColorContext.Provider value={{ titleColor, setTitleColor }}>
      {children}
    </TitleColorContext.Provider>
  );
};
