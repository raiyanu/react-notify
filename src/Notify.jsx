import React, { createContext, useContext, useState } from "react";

const NotifyContext = createContext();

export const useNotify = () => {
    const context = useContext(NotifyContext);
    if (!context) {
        throw new Error("useNotify must be used within a NotificationProvider");
    }
    return context;
};

const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState(null);

    const alert = (msg) => {
        setMessage(msg);
        setTimeout(() => setMessage(null), 3000);
    };

    return (
        <NotifyContext.Provider value={{ alert }}>
            {children}
            {message && (
                <div
                    style={{
                        position: "fixed",
                        top: "10px",
                        right: "10px",
                        background: "black",
                        color: "white",
                        padding: "10px",
                        borderRadius: "5px",
                    }}
                >
                    {message}
                </div>
            )}
        </NotifyContext.Provider>
    );
};

export default NotificationProvider;
