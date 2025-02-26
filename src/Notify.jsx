import React, { createContext, useContext, useState } from "react";

const NotifyContext = createContext();

const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState(null);

    const alert = (msg) => {
        setMessage(msg);
        setTimeout(() => setMessage(null), 3000); // Auto-dismiss after 3 seconds
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

export const notify = {
    alert: (msg) => {
        const context = useContext(NotifyContext);
        if (!context) {
            throw new Error("notify.alert must be used within a NotificationProvider");
        }
        context.alert(msg);
    },
};

export default NotificationProvider;