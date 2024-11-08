import React, { createContext, useState } from 'react';

const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
    const [dark, setDark] = useState(false);
 

    return (
        <GeneralContext.Provider value={{ dark, setDark }}>
            {children}
        </GeneralContext.Provider>
    );
};

export const useGeneral = () => {
    const context = React.useContext(GeneralContext);
    return context;
}
export { GeneralContext, GeneralProvider };