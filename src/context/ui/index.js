import { createContext, useContext, useState } from "react";

export const UIContext = createContext({});
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
    const [openDrawer, setOpenDrawer] = useState(true);

    const value = {
        openDrawer,
        setOpenDrawer,
        
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}