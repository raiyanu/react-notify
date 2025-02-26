import React, { createContext, useContext, useState } from "react";
import "./Notify.css";

interface NotifyContextType {
	alert: (msg: string, type?: string, timeout?: number) => void;
}

const NotifyContext = createContext<NotifyContextType | undefined>(undefined);

export const NotificationProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [notification, setNotification] = useState<{
		message: string;
		type: string;
	} | null>(null);

	const alert = (
		msg: string,
		type: string = "info",
		timeout: number = 3000
	) => {
		setNotification({ message: msg, type });
		setTimeout(() => setNotification(null), timeout); // Auto-dismiss after specified timeout
	};

	return (
		<NotifyContext.Provider value={{ alert }}>
			{children}
			{notification && (
				<div
					className={`notification ${notification.type}`}
					onClick={() => setNotification(null)}
				>
					{notification.message}
				</div>
			)}
		</NotifyContext.Provider>
	);
};

export const useNotify = () => {
	const context = useContext(NotifyContext);
	if (!context) {
		throw new Error("useNotify must be used within a NotificationProvider");
	}
	return context;
};
