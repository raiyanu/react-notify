import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			include: ["src/**/*.ts", "src/**/*.tsx"],
			insertTypesEntry: true,
		}),
	],
	build: {
		lib: {
			entry: "src/index.ts",
			name: "ReactNotify",
			fileName: (format) => `react-notify.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
