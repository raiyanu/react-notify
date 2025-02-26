import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { NotificationProvider } from "./component/Notify";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<NotificationProvider>
			<App />
		</NotificationProvider>
	</StrictMode>
);
