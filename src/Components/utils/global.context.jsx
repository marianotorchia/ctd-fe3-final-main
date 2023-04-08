import { createContext , useState } from "react";
import React, { useEffect , useMemo, useContext } from "react";


export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [data, setData] = useState([]);
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

    const value = useMemo(() => ({ theme,setTheme,toggleTheme ,data}), [theme,setTheme,data]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};  export const useGlobalContext = () => useContext(ContextGlobal);