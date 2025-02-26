import React, { createContext, useContext, useState } from "react";

interface NotifyContextType {
	alert: (msg: string) => void;
}

const NotifyContext = createContext<NotifyContextType | undefined>(undefined);

export const NotificationProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [message, setMessage] = useState<string | null>(null);

	const alert = (msg: string) => {
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
	alert: (msg: string) => {
		const context = useContext(NotifyContext);
		if (!context) {
			throw new Error(
				"notify.alert must be used within a NotificationProvider"
			);
		}
		context.alert(msg);
	},
};
