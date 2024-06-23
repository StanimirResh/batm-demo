import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [coin, setCoin] = useState(null);
    const [action, setAction] = useState(null);

    return (
        <AppContext.Provider value={{ coin, setCoin, action, setAction }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };